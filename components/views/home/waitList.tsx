import { ArrowRight } from 'lucide-react';

export default function WaitList() {
  return (
    <section
      id="wait-list"
      className="container mx-auto px-4 py-20 bg-muted/30 min-h-[calc(100dvh-4rem)] justify-center flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl ">
            All of your user&apos;s Feedback
          </h2>
          <p className="text-3xl text-primary font-bold max-w-2xl mx-auto md:text-5xl">
            Is just a click away.
          </p>
        </div>
      </div>
      <form>
        <input type="email" placeholder="Email" />
        <button type="submit">
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
}
