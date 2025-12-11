import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Layers, GitMerge, ListTodo } from 'lucide-react';
import { ChatMock, PRDMock, ArchMock, DiagramMock, SprintMock } from './ui/MockInterfaces';

const steps = [
  {
    id: 1,
    title: "The Interviewer",
    desc: "ARCH asks clarifying questions to force product thinking and uncover edge cases before you write a single line of code.",
    icon: <MessageSquare size={20} />,
    mock: <ChatMock />
  },
  {
    id: 2,
    title: "PRD Builder",
    desc: "Generate comprehensive Product Requirement Documents. ARCH explains each section, ensuring you don't miss functional or non-functional requirements.",
    icon: <FileText size={20} />,
    mock: <PRDMock />
  },
  {
    id: 3,
    title: "Architecture Workshop",
    desc: "Explore different approaches. ARCH presents three architecture options with detailed pros, cons, and complexity estimates.",
    icon: <Layers size={20} />,
    mock: <ArchMock />
  },
  {
    id: 4,
    title: "System Design Diagrams",
    desc: "Visualize your system. ARCH generates high-level architecture diagrams, data flow charts, and database schemas automatically.",
    icon: <GitMerge size={20} />,
    mock: <DiagramMock />
  },
  {
    id: 5,
    title: "Sprint Breakdown",
    desc: "Turn your design into a plan. ARCH breaks the project into learning-focused sprints with specific tasks and resources.",
    icon: <ListTodo size={20} />,
    mock: <SprintMock />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Guided by Intelligence</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">
               A structured workflow designed to mimic a senior engineer mentoring session.
             </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-900 to-transparent hidden lg:block -translate-x-1/2"></div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Side */}
                <motion.div 
                  className="flex-1 lg:text-right"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: index % 2 === 1 ? 'left' : (window.innerWidth >= 1024 ? 'right' : 'left') as any }}
                >
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/50">
                      {step.id}
                    </span>
                    <span className="text-indigo-400 font-medium tracking-wide text-sm uppercase">Step {step.id}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  
                  <div className={`flex ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                     <div className="p-3 bg-slate-800 rounded-lg text-white inline-flex">
                        {step.icon}
                     </div>
                  </div>
                </motion.div>

                {/* Visual Side */}
                <motion.div 
                  className="flex-1 w-full"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative group perspective-1000">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    {step.mock}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}