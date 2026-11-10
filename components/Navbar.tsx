import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  onSignIn?: () => void;
}

export default function Navbar({ onSignIn }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-bg border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
          className="flex items-center gap-2.5"
          aria-label="ARCH home"
        >
          <span className="w-8 h-8 rounded-[10px] bg-surface border border-line flex items-center justify-center text-accent">
            <Cpu size={18} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">arch</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')} className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors">The problem</a>
          <a href="#demo" onClick={(e) => handleLinkClick(e, 'demo')} className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors">Demo</a>
          <a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors">Features</a>
          <button 
            type="button"
            onClick={() => scrollToId('waitlist')}
            className="px-5 py-2.5 rounded-[10px] bg-accent-hover text-white hover:bg-accent-ink text-sm font-semibold transition-colors"
          >
            Join waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="md:hidden text-ink-muted hover:text-ink p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg border-b border-line">
          <div className="flex flex-col p-6 gap-4">
            <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')} className="text-base font-medium text-ink-muted hover:text-ink">The problem</a>
            <a href="#demo" onClick={(e) => handleLinkClick(e, 'demo')} className="text-base font-medium text-ink-muted hover:text-ink">Demo</a>
            <a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="text-base font-medium text-ink-muted hover:text-ink">Features</a>
            <div className="h-px bg-line my-2"></div>
            <button 
              type="button"
              onClick={() => scrollToId('waitlist')}
              className="w-full py-3 rounded-[10px] bg-accent-hover hover:bg-accent-ink text-white text-sm font-semibold"
            >
              Join waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
