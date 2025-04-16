// cookies import removed as it's no longer needed for model selection
import { Chat } from '@/components/chat';
// DEFAULT_CHAT_MODEL import removed
import { generateUUID } from '@/lib/utils';
// DataStreamHandler import removed

export default function Page() { // Changed to sync function as await cookies() is removed
  const id = generateUUID();

  // Removed logic for reading model from cookie

  // Always use the default chat model defined in providers
  const selectedChatModel = 'chat-model';

  return (
    // Fragment removed as DataStreamHandler is gone
    <Chat
      key={id}
      id={id}
      initialMessages={[]}
      selectedChatModel={selectedChatModel}
      // selectedVisibilityType prop removed
      isReadonly={false} // Assuming chat should not be readonly
    />
  );
}
