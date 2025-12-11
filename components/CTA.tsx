import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mail, Check } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
        setSubmitted(true);
        // Here you would typically send the email to your backend
    }
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-950/20 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-1"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Join the <span className="text-indigo-400">ARCH</span> Waitlist
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    We're currently in private beta. Sign up to get early access and start mastering system design.
                </p>
                
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                        <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-900/80 border border-slate-700 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm transition-all"
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-transform hover:scale-105 hover:bg-indigo-500 focus:outline-none ring-offset-2 ring-indigo-500 whitespace-nowrap shadow-lg shadow-indigo-500/25"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                            <span>Join Waitlist</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                ) : (
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-8 bg-green-500/10 border border-green-500/20 rounded-2xl max-w-md mx-auto"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                            <Check size={24} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                        <p className="text-slate-400">We'll notify you as soon as spots open up.</p>
                    </motion.div>
                )}
                
                {!submitted && <p className="mt-6 text-slate-500 text-sm">Join 2,000+ engineers waiting for access.</p>}
            </motion.div>
        </div>
    </section>
  );
}