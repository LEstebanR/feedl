import { Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="flex flex-col gap-2 items-center md:w-8/12 px-2 md:px-0 min-h-[calc(100dvh-4rem)] justify-center">
      <Badge className="px-4 py-2 text-md mb-6">
        <Zap className="!h-4 !w-4 text-primary" />
        <p className="text-md text-primary font-bold">
          Real-time feedback collection
        </p>
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center md:w-8/12">
        Collect user feedback
      </h1>
      <p className="text-4xl md:text-6xl font-bold tracking-tight text-center md:w-8/12 mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        without the friction
      </p>
      <p className="text-xl text-muted-foreground mb-8 text-justify max-w-2xl mx-auto leading-relaxed">
        A simple, non-intrusive widget that lets your users share feedback
        instantly. No forms to fill out, no pages to navigate—just click and
        share.
      </p>
      <div className="flex gap-2">
        <a href="#wait-list">
          <Button>Join Waitlist</Button>
        </a>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-muted-foreground">
            No credit card required
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm text-muted-foreground">
            Free forever plan
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-sm text-muted-foreground">Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
