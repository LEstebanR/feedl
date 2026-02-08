'use client';

import {
  ArrowRightIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from 'lucide-react';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authClient } from '@/lib/auth-client';

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
  const router = useRouter();
  const isHome = pathname === '/';
  const { data: session, isPending } = authClient.useSession();

  const getLinkHref = (href: string) => {
    if (href.startsWith('#') && !isHome) {
      return `/${href}`;
    }
    return href;
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push('/'),
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center bg-background">
      <div className="flex w-full items-center justify-between px-2 md:w-8/12 md:px-0">
        <Logo />
        <div className="hidden items-center gap-x-8 rounded-full border px-12 py-2 md:flex">
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

        <div className="flex items-center gap-x-2">
          <div className="md:hidden">
            <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full" size="icon">
                  {open ? <XIcon /> : <MenuIcon />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="mx-[1rem] mt-4 w-[calc(100vw-2rem)]"
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
                      className="flex w-full items-center justify-between"
                    >
                      {link.label} <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {isPending ? null : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <UserIcon className="size-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <p className="font-medium">{session.user.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {session.user.email}
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOutIcon className="size-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
