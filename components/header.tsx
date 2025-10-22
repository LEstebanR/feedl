import Link from 'next/link';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

const LINKS = [
  {
    label: 'About',
    href: '#about',
  },
];

export function Header() {
  return (
    <header className="w-full flex items-center justify-center h-16 sticky top-0 bg-background z-50 ">
      <div className=" flex items-center justify-between md:w-8/12 w-full px-2 md:px-0">
        <Logo />
        <div className="items-center gap-x-2 hidden md:flex">
          {LINKS.map(link => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="items-center gap-x-2 flex">
          <Link href="/docs">
            <Button variant="ghost">Get Started</Button>
          </Link>
          <Button>Log in</Button>
        </div>
      </div>
    </header>
  );
}
