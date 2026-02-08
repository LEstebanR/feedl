import { headers } from 'next/headers';

import { auth } from '@/lib/auth';

import { SignOutButton } from './sign-out-button';

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground mt-2">
        Welcome, {session?.user?.name}
      </p>
      <SignOutButton />
    </main>
  );
}
