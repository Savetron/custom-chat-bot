import type { UIMessage } from 'ai'; // Removed unused AI types
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Removed DB types (DBMessage, Document)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Removed ApplicationError interface and fetcher function

// Removed getLocalStorage function

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Removed addToolMessageToChat function
// Removed ResponseMessage types
// Removed sanitizeResponseMessages function

export function getMostRecentUserMessage(messages: Array<UIMessage>) {
  const userMessages = messages.filter((message) => message.role === 'user');
  return userMessages.at(-1);
}

// Removed getDocumentTimestampByIndex function
// Removed getTrailingMessageId function (was likely used for DB saving)
