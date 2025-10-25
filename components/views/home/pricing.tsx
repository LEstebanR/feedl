import { Check } from 'lucide-react';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include unlimited
            team members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <Card className="p-8 hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex-grow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground">
                  Perfect for small projects
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 1,000 feedback/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 project</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
            </div>
            <Link href="/login">
              <Button variant="outline" className="w-full bg-transparent">
                Get Started
              </Button>
            </Link>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 border-2 border-primary hover:shadow-xl transition-shadow relative flex flex-col">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-foreground text-primary">
              Most Popular
            </Badge>
            <div className="flex-grow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-muted-foreground">For growing businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 10,000 feedback/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom branding</span>
                </li>
              </ul>
            </div>
            <Link href="/login">
              <Button className="w-full">Get Started</Button>
            </Link>
          </Card>

          {/* Enterprise Plan */}
          <Card className="p-8 hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex-grow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground">For large organizations</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
