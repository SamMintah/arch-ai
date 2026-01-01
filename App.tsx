import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<'landing' | 'auth'>('landing');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (view === 'auth') {
    return <AuthPage onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-indigo-500/30">
      <Navbar onSignIn={() => setView('auth')} />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}