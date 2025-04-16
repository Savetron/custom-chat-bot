import type { Message } from 'ai';
import { useCopyToClipboard } from 'usehooks-ts';

// Vote type removed
import { CopyIcon } from './icons'; // Thumb icons removed
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { memo } from 'react';
import equal from 'fast-deep-equal';
import { toast } from 'sonner';

export function PureMessageActions({
  message,
}: {
  chatId: string; // chatId might be unused now, consider removing later if needed
  message: Message;
  // vote prop removed
  // isLoading prop removed
}) {
  // mutate removed
  const [_, copyToClipboard] = useCopyToClipboard();

  // isLoading check removed
  if (message.role === 'user') return null;

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-row gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="py-1 px-2 h-fit text-muted-foreground"
              variant="outline"
              onClick={async () => {
                const textFromParts = message.parts
                  ?.filter((part) => part.type === 'text')
                  .map((part) => part.text)
                  .join('\n')
                  .trim();

                if (!textFromParts) {
                  toast.error("There's no text to copy!");
                  return;
                }

                await copyToClipboard(textFromParts);
                toast.success('Copied to clipboard!');
              }}
            >
              <CopyIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy</TooltipContent>
        </Tooltip>

        {/* Upvote and Downvote Tooltips removed */}
      </div>
    </TooltipProvider>
  );
}

export const MessageActions = memo(PureMessageActions); // Removed comparison function as props are simpler now
