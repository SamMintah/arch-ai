import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "For exploring system design basics.",
    features: ["1 Project limit", "Basic PRD templates", "Standard architecture patterns", "Community support"],
    cta: "Join Waitlist",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For serious engineers growing their career.",
    features: ["Unlimited projects", "Advanced trade-off analysis", "Export to PDF & Markdown", "Priority generation speed", "Diagram editing"],
    cta: "Join Waitlist",
    popular: true
  },
  {
    name: "Team",
    price: "Custom",
    desc: "For engineering teams aligned on design.",
    features: ["Shared project workspaces", "Team review comments", "Custom architecture templates", "SSO & Security"],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Invest in your career</h2>
          <p className="text-slate-400 text-lg">
            Simple pricing for engineers at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-slate-900/80 border-indigo-500 ring-2 ring-indigo-500/20' : 'bg-slate-950/50 border-slate-800'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-slate-500">{plan.period}</span>}
                </div>
                <p className="text-slate-400 mt-4 text-sm">{plan.desc}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-indigo-400 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-sm">{feat}</span>
                    </div>
                ))}
              </div>

              <button 
                onClick={scrollToWaitlist}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}