import React from 'react';
import { BrainCircuit, FileJson, GitBranch, Layout, GraduationCap, Save } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit size={22} />,
    title: "Socratic questioning",
    desc: "ARCH doesn't just give answers. It challenges your assumptions to deepen your understanding."
  },
  {
    icon: <FileJson size={22} />,
    title: "PRD generation",
    desc: "Automatically format your thoughts into industry-standard Product Requirement Documents."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Architecture options",
    desc: "Compare monolith vs. microservices vs. serverless for your specific use case."
  },
  {
    icon: <Layout size={22} />,
    title: "System diagrams",
    desc: "Export editable diagrams for your presentations and documentation."
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Learning roadmap",
    desc: "Tasks are broken down by learning objectives, not just delivery milestones."
  },
  {
    icon: <Save size={22} />,
    title: "Project persistence",
    desc: "Save your progress, revisit past decisions, and iterate on your designs over time."
  }
];

const spans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4"
];

export default function Features() {
  return (
    <section id="features" className="border-t border-line bg-surface-alt py-24 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-ink">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-ink-muted max-w-[54ch]">
            A complete toolkit for mastering system design and software architecture.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-12 gap-5">
          {features.map((feature, idx) => {
            const featured = idx < 3;
            return (
              <article
                key={idx}
                className={`flex h-full flex-col rounded-xl border border-line bg-surface transition-colors hover:border-ink-muted ${
                  featured ? 'p-7 sm:p-8' : 'p-6'
                } ${spans[idx]}`}
              >
                <div
                  className={`flex items-center justify-center rounded-[10px] bg-surface-alt border border-line mb-5 ${
                    featured ? 'w-11 h-11' : 'w-10 h-10'
                  } ${featured ? 'text-accent' : 'text-ink-muted'}`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-2">{feature.title}</h3>
                <p className={`leading-[1.65] text-ink-muted ${featured ? 'text-base' : 'text-[15px]'}`}>
                  {feature.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
