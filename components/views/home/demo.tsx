export default function Demo() {
  return (
    <section id="demo" className="container md:w-8/12 mx-auto mt-12">
      <div className="max-w-6xl mx-auto  w-full px-2">
        <div className="text-center mb-12 flex flex-col gap-4 items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try the widget yourself. Submit feedback and see how it appears in
            your dashboard.
          </p>
          <div className="border-2 border-black w-full py-8 rounded-xl border-dotted  flex flex-col gap-4 bg-muted/80 mt-12">
            <p className="text-3xl mb-4">Interactive Demo Area</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This simulates your website. Notice the feedback button on the
              right edge? Click it to leave feedback and see how it appears in
              your dashboard below.
            </p>
            <div className="flex items-center gap-2 mx-auto">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-ping"></div>
              <span className="text-md text-muted-foreground">
                Widget is active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
