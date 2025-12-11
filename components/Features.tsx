import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, FileJson, GitBranch, Layout, GraduationCap, Save } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit size={24} />,
    title: "Socratic Questioning",
    desc: "ARCH doesn't just give answers. It challenges your assumptions to deepen your understanding."
  },
  {
    icon: <FileJson size={24} />,
    title: "PRD Generation",
    desc: "Automatically format your thoughts into industry-standard Product Requirement Documents."
  },
  {
    icon: <GitBranch size={24} />,
    title: "Architecture Options",
    desc: "Compare Monolith vs. Microservices vs. Serverless for your specific use case."
  },
  {
    icon: <Layout size={24} />,
    title: "System Diagrams",
    desc: "Export editable diagrams for your presentations and documentation."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Learning Roadmap",
    desc: "Tasks are broken down by learning objectives, not just delivery milestones."
  },
  {
    icon: <Save size={24} />,
    title: "Project Persistence",
    desc: "Save your progress, revisit past decisions, and iterate on your designs over time."
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to grow</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete toolkit for mastering system design and software architecture.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] group"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}