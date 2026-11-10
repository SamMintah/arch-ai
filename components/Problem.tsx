import React from 'react';
import { AlertCircle, FileQuestion, Shuffle, GitPullRequest } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <FileQuestion size={22} />,
      title: "Asking the right questions",
      desc: "Struggling to define requirements before writing code leads to rewrites."
    },
    {
      icon: <Shuffle size={22} />,
      title: "Making tradeoffs",
      desc: "Choosing technologies without understanding the long-term implications."
    },
    {
      icon: <GitPullRequest size={22} />,
      title: "Messy PRDs",
      desc: "Incomplete documentation that leaves the team confused."
    }
  ];

  return (
    <section id="problem" className="border-t border-line py-24 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <div className="lg:order-2">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-ink max-w-[18ch]">
            The gap between &ldquo;I can code&rdquo; and &ldquo;I can architect&rdquo;.
          </h2>
          <p className="mt-6 text-lg leading-[1.7] text-ink-muted max-w-[54ch]">
            Most engineers get stuck in the implementation details. Moving to senior levels requires a shift in thinking from functions and classes to systems, scalability, and reliability.
          </p>

          <div className="mt-10 space-y-7">
            {problems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="mt-0.5 p-2.5 rounded-[10px] bg-surface-alt border border-line text-ink shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-ink">{item.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-ink-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Light paper visual */}
        <div className="lg:order-1">
          <div className="rounded-xl border border-line bg-surface-alt p-6 sm:p-10">
            <div className="mx-auto max-w-sm rounded-xl border border-line bg-surface p-6 sm:p-7 shadow-[var(--shadow-soft)]">
              <div className="w-12 h-12 rounded-full bg-surface-alt border border-line flex items-center justify-center mx-auto mb-5 text-ink-muted">
                <AlertCircle size={24} />
              </div>
              <h3 className="font-display text-2xl font-medium text-ink text-center mb-3">Analysis paralysis</h3>
              <p className="text-[15px] leading-[1.7] text-ink-muted text-center">
                &ldquo;Should I use NoSQL? Is microservices overkill? How do I handle race conditions?&rdquo;
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3 py-1.5 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Scalability bottleneck
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3 py-1.5 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  Single point of failure
                </span>
              </div>

              <div className="mt-7 space-y-2">
                <div className="h-px w-full bg-line"></div>
                <div className="h-px w-2/3 bg-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
