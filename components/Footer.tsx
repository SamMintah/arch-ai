import React from 'react';
import { Github, Linkedin, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
                <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-8 h-8 rounded-[10px] border border-line flex items-center justify-center text-accent">
                        <Cpu size={18} />
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg">arch</span>
                </div>
                <p className="text-line max-w-sm mb-6 leading-[1.7]">
                    The AI mentor that helps you bridge the gap between coding and architecture. Built for ambitious engineers.
                </p>
                <div className="flex gap-3">
                    <a href="https://x.com/kweku__mintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-line hover:text-bg transition-colors" aria-label="X (Twitter)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/sammintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-line hover:text-bg transition-colors" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/samuel-mintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-line hover:text-bg transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
            
            <div>
                <h2 className="font-sans text-base font-semibold text-bg mb-6">Product</h2>
                <ul className="space-y-4">
                    <li><a href="#problem" className="text-line hover:text-bg transition-colors">The problem</a></li>
                    <li><a href="#demo" className="text-line hover:text-bg transition-colors">Demo</a></li>
                    <li><a href="#features" className="text-line hover:text-bg transition-colors">Features</a></li>
                </ul>
            </div>
            
            <div>
                <h2 className="font-sans text-base font-semibold text-bg mb-6">Company</h2>
                <ul className="space-y-4">
                    <li><a href="mailto:hello@arch-ai.app" className="text-line hover:text-bg transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-line text-sm">© 2026 ARCH AI. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="text-line hover:text-bg text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-line hover:text-bg text-sm transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
