'use client';

import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LINKS = [
  {
    label: 'The Problem',
    href: '#problem',
  },
  {
    label: 'How it works',
    href: '#demo',
  },
  {
    label: 'Features',
    href: '#about',
  },
  {
    label: 'Pricing',
    href: '#pricing',
  },
  {
    label: 'Waitlist',
    href: '#wait-list',
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getLinkHref = (href: string) => {
    if (href.startsWith('#') && !isHome) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <header className="w-full flex items-center justify-center h-16 sticky top-0 bg-background z-50 ">
      <div className=" flex items-center justify-between md:w-8/12 w-full px-2 md:px-0">
        <Logo />
        <div className="items-center gap-x-8 hidden md:flex border rounded-full px-12 py-2">
          {LINKS.map(link => (
            <Link
              key={link.label}
              href={getLinkHref(link.href)}
              className="hover:text-primary hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="items-center gap-x-2 flex">
          <div className="md:hidden">
            <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full" size="icon">
                  {open ? <XIcon /> : <MenuIcon />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[calc(100vw-2rem)] mx-[1rem] mt-4"
                align="start"
              >
                {LINKS.map(link => (
                  <DropdownMenuItem
                    key={link.label}
                    asChild
                    className="w-full text-lg"
                  >
                    <Link
                      href={getLinkHref(link.href)}
                      className="flex items-center justify-between w-full"
                    >
                      {link.label} <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link href={getLinkHref('#wait-list')}>
            <Button>Start Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
