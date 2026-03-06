import { MessageSquare } from 'lucide-react';

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2">
        <MessageSquare className="h-4 w-4 text-primary" />
        <span className="text-2xl font-bold flex items-center">
          <p className="text-primary">LES</p>{' '}
          <p className="italic">Feedback</p>{' '}
        </span>
      </div>
    </Link>
  );
}
