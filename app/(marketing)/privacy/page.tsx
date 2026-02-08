import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Feedl Privacy Policy - How we handle your data.',
};

export default function PrivacyPage() {
  return (
    <main className="w-full py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            LESFeedback (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            operates the LESFeedback website and service. This page informs you
            of our policies regarding the collection, use, and disclosure of
            personal data when you use our Service and the choices you have
            associated with that data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Email Address
              </h3>
              <p className="leading-relaxed">
                When you join our waitlist or create an account, we collect your
                email address. This is the primary way we communicate with you
                about product updates and features.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Feedback & Usage Data
              </h3>
              <p className="leading-relaxed">
                When you submit feedback through Feedl, we collect the feedback
                content, type (positive/negative/neutral/bug), page URL,
                timestamp, and browser information for analytics purposes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Server & Log Data
              </h3>
              <p className="leading-relaxed">
                We may collect information such as your IP address, browser
                type, and access times automatically when you use our service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We use the collected data for various purposes:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To provide, maintain, and improve the Feedl service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To notify you about changes to our service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                To allow you to participate in interactive features of our
                service
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To provide customer support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                To gather analysis or valuable information for improving our
                service
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To monitor the usage of our service</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            Feedl will retain your Personal Data only for as long as necessary
            for the purposes set out in this Privacy Policy. We will retain and
            use your Personal Data to the extent necessary to comply with our
            legal obligations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Rights (GDPR)</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If you are a resident of the European Union, you have the following
            rights:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Right to Access:</strong> You have the right to access
                your personal data
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Right to Rectification:</strong> You have the right to
                correct inaccurate data
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Right to Erasure:</strong> You have the right to request
                deletion of your data
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Right to Data Portability:</strong> You have the right
                to receive your data in a structured format
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Right to Object:</strong> You have the right to object
                to processing of your data
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Feedl uses third-party services that may collect information used to
            identify you:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>Vercel:</strong> Our application is hosted on Vercel
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>PostgreSQL Database:</strong> We use PostgreSQL to store
                your data
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            The security of your data is important to us but remember that no
            method of transmission over the internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a
              href="mailto:support@feedl.app"
              className="text-primary hover:underline"
            >
              support@feedl.app
            </a>
            .
          </p>
        </section>

        <section className="text-sm text-muted-foreground pt-8 border-t border-border">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </article>
    </main>
  );
}
