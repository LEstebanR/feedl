import { About } from '@/components/views/home/about';
import Demo from '@/components/views/home/demo';
import { Hero } from '@/components/views/home/hero';
import Pricing from '@/components/views/home/pricing';
import WaitList from '@/components/views/home/waitList';

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Hero />
      <About />
      <Demo />
      <Pricing />
      <WaitList />
    </div>
  );
}
