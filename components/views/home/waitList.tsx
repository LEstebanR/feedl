'use client';

import { ArrowRight } from 'lucide-react';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function WaitList() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Email: {email}
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
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
        >
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Button type="submit" size="lg" className="h-11 px-6 shrink-0">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
