import { DemoButton } from '@/components/demo-button';
import { About } from '@/components/views/home/about';
import Demo from '@/components/views/home/demo';
import { Hero } from '@/components/views/home/hero';
import { Problem } from '@/components/views/home/problem';
import WaitList from '@/components/views/home/waitList';

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Hero />
      <Problem />
      <Demo />
      <About />
      <WaitList />
      <DemoButton />
    </div>
  );
}
