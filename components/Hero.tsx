import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

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
        console.error('VITE_GOOGLE_SCRIPT_URL is not configured');
        setError('The waitlist is temporarily unavailable. Please try again later.');
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

  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Architectural grid paper, hero only */}
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="hero-fade lg:col-span-5">
            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-medium tracking-[-0.02em] leading-[1.1] text-ink">
              From idea to architecture <br className="hidden lg:block" /> in one conversation.
            </h1>

            <p className="mt-6 max-w-[54ch] text-[17px] md:text-lg leading-[1.7] text-ink-muted">
              <span className="font-semibold text-ink">ARCH</span> is your AI architecture partner. Answer a few questions, get multiple architecture proposals with pros and cons, select the best fit, and receive a complete sprint plan. Architecture decisions made easy.
            </p>

            <div className="mt-9 max-w-lg">
              {!submitted ? (
                <>
                  <p className="mb-3 text-sm text-ink-muted">Join the waitlist for early access.</p>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                    <label htmlFor="hero-email" className="sr-only">Email address</label>
                    <input
                      id="hero-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="w-full sm:flex-1 h-14 px-4 rounded-[10px] bg-surface border border-line text-ink placeholder:text-ink-muted focus:border-accent transition-colors disabled:opacity-60"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto h-14 px-6 rounded-[10px] bg-accent text-white text-[19px] leading-none font-bold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join waitlist
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div role="status" aria-live="polite" className="flex items-center gap-2 text-ink bg-surface border border-line px-5 py-3.5 rounded-[10px] w-fit">
                  <Check size={18} className="text-accent" />
                  <span className="font-medium">You've been added to the waitlist.</span>
                </div>
              )}

              {error && (
                <p role="alert" className="text-[15px] mt-3 text-accent-ink">{error}</p>
              )}
            </div>
          </div>

          {/* Right Column - Full product screenshot */}
          <div className="hero-fade lg:col-span-7" style={{ animationDelay: '100ms' }}>
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-frame)]">
              <div className="aspect-[1712/987] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/kaytech2/image/upload/v1794316102/arch-demo-poster_pzu0r9.png"
                  alt="ARCH comparing architecture proposals side by side"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
