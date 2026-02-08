import { MessageSquare } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <MessageSquare className="h-16 w-16 text-primary mb-6" />
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </main>
  );
}
