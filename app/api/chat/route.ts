import {
  UIMessage,
  createDataStreamResponse,
  smoothStream,
  streamText,
} from 'ai';
import { generateUUID } from '@/lib/utils';
import { isProductionEnvironment } from '@/lib/constants';
import { myProvider } from '@/lib/ai/providers';
import fs from 'fs';
import path from 'path';

export const maxDuration = 60;

// Chat Bot Hizmeti context dosyasını oku
function getChatBotContext(): string {
  try {
    const contextFilePath = path.join(process.cwd(), 'lib/ai/nivars-context.md');
    return fs.readFileSync(contextFilePath, 'utf-8');
  } catch (error) {
    console.error('Error reading Chat Bot context file:', error);
    return 'Error: Could not load context information.';
  }
}

// Chat Bot Hizmeti için sistem promptu
const chatBotSystemPromptInstruction = 
  'Sen bir Chat Bot Hizmeti Asistanısın. Görevin, Chat Bot Hizmeti ile ilgili ürün, hizmet, entegrasyon, sektörler ve teknik detaylar hakkında kullanıcılara yardımcı olmaktır. Cevaplarını SADECE aşağıdaki bilgilere ve www.chatbothizmeti.com web sitesindeki bilgilere dayandır. Bu bilgilerin dışına KESİNLİKLE çıkma. Eğer bir soru bu bilgilerle cevaplanamıyorsa, "Bu konuda bilgim yok, ancak daha fazla bilgi için www.chatbothizmeti.com adresini ziyaret edebilir veya info@chatbothizmeti.com adresine e-posta gönderebilirsiniz." şeklinde cevap ver. Tahminde bulunma veya genel cevaplar verme.';

export async function POST(request: Request) {
  try {
    const {
      messages,
      selectedChatModel,
    }: {
      id: string;
      messages: Array<UIMessage>;
      selectedChatModel: string;
    } = await request.json();

    // Context dosyasını oku
    const chatBotContextContent = getChatBotContext();

    // Sistem promptunu ve context'i birleştir
    const finalSystemPrompt =
      chatBotSystemPromptInstruction +
      '\n\nİşte sana sağlanan bilgiler:\n---\n' +
      chatBotContextContent +
      '\n---\n';

    return createDataStreamResponse({
      execute: (dataStream) => {
        const result = streamText({
          model: myProvider.languageModel(selectedChatModel),
          system: finalSystemPrompt,
          messages,
          experimental_transform: smoothStream({ chunking: 'word' }),
          experimental_generateMessageId: generateUUID,
          experimental_telemetry: {
            isEnabled: isProductionEnvironment,
            functionId: 'stream-text',
          },
        });

        result.consumeStream();

        result.mergeIntoDataStream(dataStream, {
          sendReasoning: false,
        });
      },
      onError: (error) => {
        console.error('Stream Error:', error);
        return 'Oops, an error occurred during the stream!';
      },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('An error occurred while processing your request!', {
      status: 500,
    });
  }
} 