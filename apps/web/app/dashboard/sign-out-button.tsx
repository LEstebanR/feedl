'use client';

import { useRouter } from 'next/navigation';

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
    <button
      onClick={handleSignOut}
      className="mt-4 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
    >
      Sign out
    </button>
  );
}
