'use client';

import { LogOutIcon } from 'lucide-react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push('/'),
      },
    });
  };

  return (
    <Button variant="outline" onClick={handleSignOut} className="mt-4">
      <LogOutIcon className="size-4" />
      Sign out
    </Button>
  );
}
