import { About } from '@/components/views/home/about';
import { Hero } from '@/components/views/home/hero';

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Hero />
      <About />
    </div>
  );
}
