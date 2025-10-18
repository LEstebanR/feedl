import { Zap } from 'lucide-react';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="flex flex-col gap-2 items-center md:w-8/12 px-2 md:px-0">
      <Badge
        variant="secondary"
        className="px-4 py-2 rounded-full text-md mb-6"
      >
        <Zap className="!h-4 !w-4" />
        Real-time feedback collection
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center md:w-8/12">
        Collect user feedback without the friction
      </h1>
      <p className="text-xl text-muted-foreground mb-8 text-justify max-w-2xl mx-auto leading-relaxed">
        A simple, non-intrusive widget that lets your users share feedback
        instantly. No forms to fill out, no pages to navigate—just click and
        share.
      </p>
      <div className="flex gap-2">
        <Link href="/docs">
          <Button>Get Started</Button>
        </Link>
        <Button variant="outline">View live Demo</Button>
      </div>
    </div>
  );
}
