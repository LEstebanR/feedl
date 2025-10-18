import { MessageSquare } from 'lucide-react';

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2">
        <MessageSquare className="h-4 w-4" />
        <span className="text-2xl font-bold">Feedl</span>
      </div>
    </Link>
  );
}
