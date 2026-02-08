import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
