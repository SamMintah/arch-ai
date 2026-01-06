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
    if (!email) return;

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
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-emerald-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              From idea to architecture<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                in one conversation.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">ARCH</span> is your AI architecture partner. Answer a few questions, get multiple architecture proposals with pros/cons, select the best fit, and receive a complete sprint plan. Architecture decisions made easy.
            </p>

            {!submitted ? (
              <>
                <p className="text-sm text-slate-500 mb-4">Join 100+ engineers on the waitlist</p>
                <form id="waitlist" onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start gap-3 scroll-mt-24">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full sm:flex-1 px-6 py-4 rounded-full bg-[#111114] border border-[#1F1F23] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm transition-all disabled:opacity-50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25"
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
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-8 py-4 rounded-full border border-emerald-500/20 w-fit"
              >
                <Check size={20} />
                <span className="font-semibold">You've been added to the waitlist!</span>
              </motion.div>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-4">{error}</p>
            )}
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 blur-3xl opacity-50"></div>
            
            <div className="relative rounded-xl overflow-hidden border border-[#1F1F23] shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-[#111114]">
              <img
                src="https://res.cloudinary.com/kaytech2/image/upload/v1767697274/Screenshot_2026-01-06_at_10.59.34_AM_ro8qqj.png"
                alt="ARCH Dashboard Preview"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
