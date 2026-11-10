import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Loader2 } from 'lucide-react';

export default function CTA() {
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
      const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
      
      if (!SCRIPT_URL) {
        console.error('VITE_GOOGLE_SCRIPT_URL is not configured');
        setError('The waitlist is temporarily unavailable. Please try again later.');
        setLoading(false);
        return;
      }

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'cta-section'
        })
      });

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
    <section id="waitlist" className="border-t border-line py-24 md:py-32 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.1] text-ink mb-5">
                Join the ARCH waitlist
            </h2>
            <p className="text-lg leading-[1.7] text-ink-muted mb-9 max-w-2xl mx-auto">
                We're currently in private beta. Sign up to get early access and start mastering system design.
            </p>
            
            {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                        <label htmlFor="cta-email" className="sr-only">Email address</label>
                        <input 
                            id="cta-email"
                            type="email" 
                            placeholder="Enter your email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className="w-full h-14 bg-surface border border-line rounded-[10px] pl-11 pr-4 text-ink placeholder:text-ink-muted focus:border-accent transition-colors disabled:opacity-60"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 h-14 px-6 text-[19px] leading-none font-bold text-white bg-accent rounded-[10px] hover:bg-accent-hover transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                <span>Joining...</span>
                            </>
                        ) : (
                            <>
                                <span>Join waitlist</span>
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>
            ) : (
                <div role="status" aria-live="polite" className="flex flex-col items-center justify-center p-8 bg-surface border border-line rounded-xl max-w-md mx-auto">
                    <div className="w-11 h-11 bg-surface-alt rounded-full flex items-center justify-center mb-4">
                        <Check size={22} className="text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-ink mb-2">You're on the list.</h3>
                    <p className="text-ink-muted">We'll notify you as soon as spots open up.</p>
                </div>
            )}
            
            {error && (
                <p role="alert" className="text-[15px] mt-4 text-accent-ink">{error}</p>
            )}
        </div>
    </section>
  );
}
