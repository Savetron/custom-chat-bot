import { customProvider } from 'ai';
import { xai } from '@ai-sdk/xai';
// Removed unused imports: extractReasoningMiddleware, wrapLanguageModel, isTestEnvironment, test models

// Simplified provider setup, removed test environment logic
export const myProvider = customProvider({
  languageModels: {
    // Kept only the main chat model, using the Grok model specified earlier
    // Removed chat-model-reasoning, title-model, artifact-model
    'chat-model': xai('grok-2-1212'), // Assuming grok-2-1212 is the desired model based on previous usage
  },
  // Removed imageModels
});
