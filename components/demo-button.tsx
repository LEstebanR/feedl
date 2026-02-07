'use client';

import { Bug, Minus, ThumbsDown, ThumbsUp } from 'lucide-react';

import { useEffect, useState } from 'react';

import { useFeedback } from '@/components/feedback-context';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';

type FeedbackType = 'positive' | 'negative' | 'neutral' | 'bug' | null;
export function DemoButton() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('');
  const { addFeedback } = useFeedback();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPage(window.location.href);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackType || !feedback.trim()) return;

    addFeedback(
      {
        type: feedbackType,
        message: feedback.trim(),
        page: currentPage,
        user: 'demo@example.com',
        time: new Date().toLocaleTimeString(),
      },
      () => {
        // Reset form
        setFeedbackType(null);
        setFeedback('');
        setOpen(false);

        // Scroll to demo section after a short delay to allow state update
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            const demoSection = document.getElementById('demo');
            if (demoSection) {
              demoSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }, 100);
        }
      }
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="fixed -right-6 top-1/2 -translate-y-1/2 rotate-[-90deg] z-50 origin-center rounded-b-none px-4 py-2"
          variant="default"
        >
          Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        className="w-[calc(100vw-4rem)] md:w-96 max-w-96  mr-2 md:mr-4 p-0 shadow-2xl border-2"
        sideOffset={8}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 p-4 md:p-6 w-full"
        >
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold tracking-tight">
              Share your feedback
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Help us improve your experience
            </p>
          </div>

          <div className="space-y-2 md:space-y-3">
            <Label className="text-xs md:text-sm font-semibold">
              Feedback type
            </Label>
            <div className="grid grid-cols-4 gap-1.5 md:gap-2">
              <button
                type="button"
                onClick={() => setFeedbackType('positive')}
                className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 md:gap-1.5 hover:scale-105 active:scale-95 ${
                  feedbackType === 'positive'
                    ? 'border-green-500 bg-green-500/15 shadow-sm'
                    : 'border-border hover:border-green-500/60 hover:bg-green-500/5'
                }`}
              >
                <ThumbsUp
                  className={`h-5 w-5 transition-colors ${feedbackType === 'positive' ? 'text-green-600' : 'text-muted-foreground'}`}
                />
                <span className="text-[10px] font-semibold">Positive</span>
              </button>

              <button
                type="button"
                onClick={() => setFeedbackType('negative')}
                className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 md:gap-1.5 hover:scale-105 active:scale-95 ${
                  feedbackType === 'negative'
                    ? 'border-red-500 bg-red-500/15 shadow-sm'
                    : 'border-border hover:border-red-500/60 hover:bg-red-500/5'
                }`}
              >
                <ThumbsDown
                  className={`h-5 w-5 transition-colors ${feedbackType === 'negative' ? 'text-red-600' : 'text-muted-foreground'}`}
                />
                <span className="text-[10px] font-semibold">Negative</span>
              </button>

              <button
                type="button"
                onClick={() => setFeedbackType('neutral')}
                className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 md:gap-1.5 hover:scale-105 active:scale-95 ${
                  feedbackType === 'neutral'
                    ? 'border-blue-500 bg-blue-500/15 shadow-sm'
                    : 'border-border hover:border-blue-500/60 hover:bg-blue-500/5'
                }`}
              >
                <Minus
                  className={`h-5 w-5 transition-colors ${feedbackType === 'neutral' ? 'text-blue-600' : 'text-muted-foreground'}`}
                />
                <span className="text-[10px] font-semibold">Neutral</span>
              </button>

              <button
                type="button"
                onClick={() => setFeedbackType('bug')}
                className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-1 md:gap-1.5 hover:scale-105 active:scale-95 ${
                  feedbackType === 'bug'
                    ? 'border-orange-500 bg-orange-500/15 shadow-sm'
                    : 'border-border hover:border-orange-500/60 hover:bg-orange-500/5'
                }`}
              >
                <Bug
                  className={`h-5 w-5 transition-colors ${feedbackType === 'bug' ? 'text-orange-600' : 'text-muted-foreground'}`}
                />
                <span className="text-[10px] font-semibold">Bug</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="feedback"
              className="text-xs md:text-sm font-semibold"
            >
              Your message
            </Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think..."
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              className="min-h-[100px] md:min-h-[120px] resize-none focus:ring-2 focus:ring-offset-1 text-sm"
              required
            />
          </div>

          <div className="bg-muted/50 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-border/50 space-y-1.5 md:space-y-2">
            <p className="text-[10px] md:text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Auto-captured info
            </p>
            <div className="text-[10px] md:text-xs text-muted-foreground space-y-0.5 md:space-y-1 pl-2 md:pl-3">
              <p className="truncate">📄 Page: {currentPage}</p>
              <p>👤 User: demo@example.com</p>
              <p>🕐 Time: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-10 md:h-11 text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-all"
            disabled={!feedbackType || !feedback.trim()}
          >
            Send feedback
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
