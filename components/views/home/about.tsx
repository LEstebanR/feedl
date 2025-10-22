import {
  BarChart3,
  Check,
  Code,
  MessageSquare,
  Shield,
  Zap,
} from 'lucide-react';

import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-16 md:w-8/12 w-full px-2 md:px-0 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to understand your users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple integration, powerful insights, and zero friction for your
            users
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Non-intrusive Widget</h3>
          <p className="text-muted-foreground leading-relaxed">
            A small, elegant widget that sits quietly in the corner. Users click
            when they want to share feedback.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant Capture</h3>
          <p className="text-muted-foreground leading-relaxed">
            Automatically captures the current URL and user session data. No
            manual input required.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">User Context</h3>
          <p className="text-muted-foreground leading-relaxed">
            Captures user name, email, and ID from their session for better
            context and follow-up.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Centralized Dashboard</h3>
          <p className="text-muted-foreground leading-relaxed">
            View all feedback in one place. Filter by page, user, or date to
            find insights quickly.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
          <p className="text-muted-foreground leading-relaxed">
            Add one script tag to your site. That's it. Works with any framework
            or platform.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
          <p className="text-muted-foreground leading-relaxed">
            See feedback as it comes in. No refresh needed. Stay connected to
            your users.
          </p>
        </Card>
      </div>
    </section>
  );
}
