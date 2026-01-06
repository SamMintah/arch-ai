import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileQuestion, Shuffle, GitPullRequest } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <FileQuestion className="text-red-400" size={24} />,
      title: "Asking the right questions",
      desc: "Struggling to define requirements before writing code leads to rewrites."
    },
    {
      icon: <Shuffle className="text-orange-400" size={24} />,
      title: "Making Tradeoffs",
      desc: "Choosing technologies without understanding the long-term implications."
    },
    {
      icon: <GitPullRequest className="text-yellow-400" size={24} />,
      title: "Messy PRDs",
      desc: "Incomplete documentation that leaves the team confused."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#0A0A0B] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text on the right (but first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:order-2"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-500/10 rounded-full">
            The Problem
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The gap between <br/>
            <span className="text-slate-400">"I can code"</span> and <br/>
            <span className="text-emerald-400">"I can architect"</span>.
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Most engineers get stuck in the implementation details. Moving to senior levels requires a shift in thinking from functions and classes to systems, scalability, and reliability.
          </p>

          <div className="space-y-6">
            {problems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-[#111114] border border-[#1F1F23]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual on the left (but second on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:order-1"
        >
          {/* Abstract Messy Architecture Visual */}
          <div className="aspect-square relative bg-[#030303] rounded-2xl border border-[#1F1F23] p-8 flex items-center justify-center overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
             
             {/* Chaos Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <path d="M100,100 C150,200 300,50 400,300" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M400,100 C300,300 150,50 100,400" stroke="#f97316" strokeWidth="2" fill="none" />
                <path d="M50,250 C200,250 200,400 350,200" stroke="#eab308" strokeWidth="2" fill="none" strokeDasharray="2,2" />
             </svg>

             {/* Confused Engineer Card */}
             <div className="relative z-10 bg-[#0A0A0B] border border-[#1F1F23] rounded-xl p-6 shadow-2xl max-w-xs w-full text-center">
                <div className="w-16 h-16 bg-[#111114] rounded-full mx-auto mb-4 flex items-center justify-center border border-[#1F1F23]">
                    <span className="text-3xl">🤔</span>
                </div>
                <h4 className="text-white font-bold mb-2">Analysis Paralysis</h4>
                <p className="text-slate-400 text-sm">
                  "Should I use NoSQL? Is Microservices overkill? How do I handle race conditions?"
                </p>
                <div className="mt-4 flex gap-2 justify-center">
                    <div className="h-2 w-12 bg-[#1F1F23] rounded-full"></div>
                    <div className="h-2 w-8 bg-[#1F1F23] rounded-full"></div>
                </div>
             </div>
             
             {/* Floating Error Badges */}
             <div className="absolute top-10 right-10 bg-red-500/20 border border-red-500/50 text-red-200 px-3 py-1 rounded-full text-xs font-mono animate-bounce delay-700">
                ! Scalability Bottleneck
             </div>
             <div className="absolute bottom-10 left-10 bg-orange-500/20 border border-orange-500/50 text-orange-200 px-3 py-1 rounded-full text-xs font-mono animate-bounce delay-1000">
                ? Single Point of Failure
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}