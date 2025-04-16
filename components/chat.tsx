'use client';

import type { UIMessage } from 'ai'; // Attachment removed
import { useChat } from '@ai-sdk/react';
// useState removed (no longer needed for attachments)
// useSWR, useSWRConfig removed
import { ChatHeader } from '@/components/chat-header';
// Vote type removed
import { generateUUID } from '@/lib/utils'; // fetcher removed
// Artifact import removed
import { MultimodalInput } from './multimodal-input';
import { Messages } from './messages';
// VisibilityType import removed
// useArtifactSelector removed
import { toast } from 'sonner';
// unstable_serialize and getChatHistoryPaginationKey removed

export function Chat({
  id,
  initialMessages,
  selectedChatModel,
  // selectedVisibilityType, // Removed
  isReadonly,
}: {
  id: string;
  initialMessages: Array<UIMessage>;
  selectedChatModel: string;
  // selectedVisibilityType prop removed
  isReadonly: boolean;
}) {
  // mutate removed

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    status,
    stop,
    reload,
  } = useChat({
    id,
    body: { id, selectedChatModel: selectedChatModel },
    initialMessages,
    experimental_throttle: 100,
    sendExtraMessageFields: true,
    generateId: generateUUID,
    // onFinish history mutation removed
    onError: () => {
      toast.error('An error occurred, please try again!'); // Keep error handling
    },
  });

  // votes SWR hook removed
  // attachments state removed
  // isArtifactVisible removed

  return (
    // Fragment removed as Artifact is gone
    <div className="flex flex-col min-w-0 h-dvh bg-background">
      <ChatHeader
          chatId={id}
          selectedModelId={selectedChatModel}
          // selectedVisibilityType prop removed from ChatHeader
          isReadonly={isReadonly}
        />

        <Messages
          chatId={id}
          status={status}
          // votes prop removed
          messages={messages}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
          // isArtifactVisible prop removed
        />

        <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
          {!isReadonly && (
            <MultimodalInput
              chatId={id}
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              status={status}
              stop={stop}
              // attachments prop removed
              // setAttachments prop removed
              messages={messages}
              setMessages={setMessages}
              append={append}
            />
          )}
        </form>
      </div>
      // Artifact component removed
  );
}
