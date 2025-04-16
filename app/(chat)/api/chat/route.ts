import {
  UIMessage,
  createDataStreamResponse,
  smoothStream,
  streamText,
} from 'ai';
import { generateUUID } from '@/lib/utils';
import { isProductionEnvironment } from '@/lib/constants';
import { myProvider } from '@/lib/ai/providers';
import fs from 'fs'; // Import Node.js file system module
import path from 'path'; // Import Node.js path module

export const maxDuration = 60;

// Function to read context from the .md file
function getNivarsContext(): string {
  try {
    // Construct the absolute path to the context file
    const contextFilePath = path.join(process.cwd(), 'lib/ai/nivars-context.md');
    // Read the file content synchronously
    return fs.readFileSync(contextFilePath, 'utf-8');
  } catch (error) {
    console.error('Error reading Nivars context file:', error);
    return 'Error: Could not load context information.'; // Return an error message if file reading fails
  }
}

// Nivars-specific system prompt instruction part
// Using single quotes to avoid potential issues with backticks in the instruction text
const nivarsSystemPromptInstruction = 'Sen Nivars Yapay Zeka Asistanısın. Senin görevin, Nivars projeleri (Nivars Oksijen, Nivars Topraktan, Nivars Project) ve hizmetleri hakkında kullanıcılara bilgi vermektir. Cevaplarını SADECE aşağıdaki bilgilere ve www.nivars.com web sitesindeki bilgilere dayandır. Bu bilgilerin dışına KESİNLİKLE çıkma. Eğer bir soru bu bilgilerle cevaplanamıyorsa, "Bu konuda bilgim yok, ancak daha fazla bilgi için www.nivars.com adresini ziyaret edebilir veya 0850 305 33 69 numaralı telefonu arayabilirsiniz." şeklinde cevap ver. Tahminde bulunma veya genel cevaplar verme.';

export async function POST(request: Request) {
  try {
    const {
      messages,
      selectedChatModel,
    }: {
      id: string; // id is no longer used for DB operations but kept for potential future use
      messages: Array<UIMessage>;
      selectedChatModel: string;
    } = await request.json();

    // Read context from file
    const nivarsContextContent = getNivarsContext();

    // Combine instruction and context for the final system prompt using string concatenation
    const finalSystemPrompt =
      nivarsSystemPromptInstruction +
      '\n\nİşte sana sağlanan bilgiler:\n---\n' +
      nivarsContextContent +
      '\n---\n';

    // Authentication and database checks removed

    return createDataStreamResponse({
      execute: (dataStream) => {
        const result = streamText({
          model: myProvider.languageModel(selectedChatModel),
          system: finalSystemPrompt, // Use combined system prompt
          messages,
          // Tools and related options removed
          experimental_transform: smoothStream({ chunking: 'word' }),
          experimental_generateMessageId: generateUUID,
          // onFinish callback removed (no need to save messages)
          experimental_telemetry: {
            isEnabled: isProductionEnvironment,
            functionId: 'stream-text', // Keep telemetry if needed
          },
        });

        result.consumeStream();

        result.mergeIntoDataStream(dataStream, {
          // sendReasoning can be kept or removed based on preference
          sendReasoning: false, // Disabled reasoning for simplicity
        });
      },
      onError: (error) => {
        console.error('Stream Error:', error); // Log stream errors
        return 'Oops, an error occurred during the stream!';
      },
    });
  } catch (error) {
    console.error('Chat API Error:', error); // Log the error for debugging
    return new Response('An error occurred while processing your request!', {
      status: 500, // Return 500 for server errors
    });
  }
}

// DELETE function removed as chat history is not stored
