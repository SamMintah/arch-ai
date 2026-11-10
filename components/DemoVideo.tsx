const steps = [
  {
    number: "01",
    title: "Answer a few questions",
    desc: "Clarify scope, constraints, and edge cases before any code."
  },
  {
    number: "02",
    title: "Compare architecture proposals",
    desc: "See monolith, serverless, and microservices side by side."
  },
  {
    number: "03",
    title: "Get your sprint plan",
    desc: "Leave with an ordered plan and the reasoning behind it."
  }
];

export default function DemoVideo() {
  return (
    <section id="demo" className="border-t border-line py-24 md:py-28 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-ink">
            Guided by intelligence
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-ink-muted max-w-[54ch]">
            A structured workflow designed to mimic a senior engineer mentoring session.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-line pt-8">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-4">
              <span className="font-display text-2xl font-medium text-accent tabular-nums leading-none">{step.number}</span>
              <div>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-[1.65] text-ink-muted">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
