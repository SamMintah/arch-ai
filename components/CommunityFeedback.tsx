import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, MessageSquare, Clock, CheckCircle2, CircleDashed } from 'lucide-react';

const feedbackItems = [
  {
    title: "VS Code Extension",
    desc: "Direct integration to generate PRDs and Mermaid diagrams alongside your code in real-time.",
    votes: 1245,
    comments: 84,
    status: "In Progress",
    statusIcon: <Clock size={14} />,
    statusStyle: "text-amber-400 bg-amber-400/10 border-amber-400/20"
  },
  {
    title: "System Design Interview Mode",
    desc: "A specialized mode with time limits and mock interviewer persona to practice for FAANG interviews.",
    votes: 932,
    comments: 156,
    status: "Planned",
    statusIcon: <CircleDashed size={14} />,
    statusStyle: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20"
  },
  {
    title: "AWS/Azure Infrastructure Export",
    desc: "Export architectural diagrams directly to Terraform or CloudFormation templates.",
    votes: 856,
    comments: 42,
    status: "Under Review",
    statusIcon: <MessageSquare size={14} />,
    statusStyle: "text-slate-400 bg-slate-400/10 border-slate-400/20"
  }
];

export default function CommunityFeedback() {
  return (
    <section className="py-24 bg-surface border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Community Roadmap</h2>
                <p className="text-slate-400 text-lg max-w-xl">
                    ARCH is built for engineers, by engineers. Vote on the features you want to see next.
                </p>
            </div>
            <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all flex items-center gap-2">
                <MessageSquare size={18} />
                Submit Request
            </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
            {feedbackItems.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/30 group transition-all"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${item.statusStyle}`}>
                            {item.statusIcon}
                            {item.status}
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                            <MessageSquare size={14} />
                            {item.comments}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {item.desc}
                    </p>

                    <button className="w-full py-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2 group/btn">
                        <ArrowUp size={16} className="text-slate-500 group-hover/btn:text-indigo-400 transition-colors" />
                        <span className="text-slate-300 font-medium text-sm group-hover/btn:text-white">{item.votes} Votes</span>
                    </button>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}