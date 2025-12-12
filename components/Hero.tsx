import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Loader2 } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!email) return;
    
    setLoading(true);
    setError('');

    try {
      // Replace with your Google Apps Script Web App URL
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
      
      if (!SCRIPT_URL) {
        console.warn('Google Script URL not configured');
        // For demo purposes, still show success
        setSubmitted(true);
        setLoading(false);
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'landing-page'
        })
      });

      // no-cors mode doesn't allow reading response, so we assume success
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-xs font-medium text-indigo-200">Coming Soon: Early Access Beta</span>
            <ChevronRight size={12} className="text-slate-400" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Think like a senior engineer.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Build with confidence.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            ARCH guides you through system design, tradeoffs, and architecture so you can step into real engineering, not just code.
          </p>

          {!submitted ? (
            <form id="waitlist" onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 max-w-lg mx-auto w-full scroll-mt-24">
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full sm:w-auto flex-1 px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm transition-all disabled:opacity-50"
                    required
                />
                <button 
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={18} />
                  </>
                )}
                </button>
            </form>
          ) : (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 mb-20 text-green-400 bg-green-500/10 px-8 py-4 rounded-full border border-green-500/20 w-fit mx-auto"
            >
                <Check size={20} />
                <span className="font-semibold">You've been added to the waitlist!</span>
            </motion.div>
          )}

          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}
        </motion.div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto mt-8"
        >
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img 
                src="https://res.cloudinary.com/kaytech2/image/upload/v1765497725/dashboard-preview_dwsmsx.png" 
                alt="ARCH Dashboard Preview" 
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
              {/* Optional: Add a subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Glow effect under the image */}
            <div className="absolute -inset-4 bg-gradient-to-t from-indigo-500/20 to-transparent blur-2xl -z-10 rounded-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
