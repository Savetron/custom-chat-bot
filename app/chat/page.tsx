"use client";
import { Chat } from '@/components/chat';
import { generateUUID } from '@/lib/utils';

export default function Page() {
  const id = generateUUID();
  const selectedChatModel = 'chat-model';

  return (
    <Chat
      key={id}
      id={id}
      initialMessages={[]}
      selectedChatModel={selectedChatModel}
      isReadonly={false}
    />
  );
} 