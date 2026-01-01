import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-background/80 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            <Cpu size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">arch</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">The Problem</a>
          <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How it Works</a>
          <a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
          <button 
            onClick={() => scrollToId('waitlist')}
            className="px-5 py-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-semibold transition-all shadow-lg shadow-indigo-500/25"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')} className="text-base font-medium text-slate-400 hover:text-white">The Problem</a>
              <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="text-base font-medium text-slate-400 hover:text-white">How it Works</a>
              <a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="text-base font-medium text-slate-400 hover:text-white">Features</a>
              <div className="h-px bg-slate-800 my-2"></div>
              <button 
                onClick={() => scrollToId('waitlist')}
                className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}