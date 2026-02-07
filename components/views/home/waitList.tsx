'use client';

import { useMutation } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

async function addToWaitlist(email: string) {
  const response = await fetch('/api/waitlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to add to waitlist');
  }

  return data;
}

export default function WaitList() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const mutation = useMutation({
    mutationFn: addToWaitlist,
    onSuccess: () => {
      toast.success('Successfully added to waitlist!', {
        description: "We'll notify you when we launch.",
      });
      setEmail('');
      setConsent(false);
    },
    onError: (error: Error) => {
      toast.error('Failed to add to waitlist', {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Email is required');
      return;
    }
    if (!consent) {
      toast.error('Please accept the Privacy Policy and consent to updates');
      return;
    }
    mutation.mutate(email.trim());
  };

  return (
    <section
      id="wait-list"
      className="relative w-full py-20 min-h-[calc(100dvh-4rem)] justify-center flex flex-col items-center overflow-hidden"
    >
      {/* Gradient Background - Full Width */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/20" />
      <div className="absolute inset-0 w-full bg-gradient-to-t from-background/70 via-background/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            All of your user&apos;s feedback
          </h2>
          <p className="text-3xl text-primary font-bold max-w-2xl mx-auto md:text-5xl mb-6">
            Is just a click away!
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams already collecting valuable user insights.
            Be among the first to transform how you understand your users.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={mutation.isPending}
                className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-11 px-6 shrink-0"
              disabled={mutation.isPending || !consent}
            >
              {mutation.isPending ? 'Adding...' : 'Join Waitlist'}
              {!mutation.isPending && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          {/* GDPR Consent Checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={checked => setConsent(checked === true)}
              disabled={mutation.isPending}
              className="mt-1"
            />
            <label
              htmlFor="consent"
              className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
            >
              I agree to the{' '}
              <Link
                href="/privacy"
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
              </Link>{' '}
              and consent to receiving updates about LESFeedback
            </label>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Early access benefits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
