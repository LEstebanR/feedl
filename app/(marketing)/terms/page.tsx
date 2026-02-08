import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'LESFeedback Terms of Service - Terms and conditions for using our platform.',
};

export default function TermsPage() {
  return (
    <main className="w-full py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using the LESFeedback website and service, you
            accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on LESFeedback for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Modifying or copying the materials</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Using the materials for any commercial purpose or for any public
                display
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Attempting to decompile or reverse engineer any software
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Removing any copyright or other proprietary notations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Transferring the materials to another person or
                &quot;mirroring&quot; the materials on any other server
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials on LESFeedback are provided on an &apos;as is&apos;
            basis. LESFeedback makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall LESFeedback or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on LESFeedback, even if LESFeedback
            or an authorized representative has been notified orally or in
            writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on LESFeedback could include technical,
            typographical, or photographic errors. LESFeedback does not warrant
            that any of the materials on LESFeedback are accurate, complete, or
            current. LESFeedback may make changes to the materials contained on
            LESFeedback at any time without notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            LESFeedback has not reviewed all of the sites linked to its website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by LESFeedback of
            the site. Use of any such linked website is at the user&apos;s own
            risk.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            LESFeedback may revise these terms of service for its website at any
            time without notice. By using this website, you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in
            accordance with the laws of the United States, and you irrevocably
            submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. User Responsibilities</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            As a user of LESFeedback, you agree to:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Provide accurate and truthful information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Not use the service for any illegal or unauthorized purpose
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Not violate any laws in your jurisdiction as well as
                international law
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Not harass or cause distress or inconvenience to any person
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>
                Not transmit any harmful or malicious code to LESFeedback
                systems
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please
            contact us at{' '}
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
