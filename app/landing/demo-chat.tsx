"use client";
import { Chat } from '@/components/chat';
import { generateUUID } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DemoChat() {
  // Her renderda sabit bir demo ID kullanıyoruz, demo için yeterli.
  const id = 'demo-chat';
  const selectedChatModel = 'chat-model';

  return (
    <SidebarProvider>
      <div className="border rounded-xl bg-background p-4 shadow-md">
        <Chat
          key={id}
          id={id}
          initialMessages={[]}
          selectedChatModel={selectedChatModel}
          isReadonly={false}
        />
      </div>
    </SidebarProvider>
  );
} 