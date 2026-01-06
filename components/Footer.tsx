import React from 'react';
import { Github, Linkedin, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-[#1F1F23] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                        <Cpu size={20} />
                    </div>
                    <span className="font-bold text-xl text-white">arch</span>
                </div>
                <p className="text-slate-400 max-w-sm mb-6">
                    The AI mentor that helps you bridge the gap between coding and architecture. Built for ambitious engineers.
                </p>
                <div className="flex gap-4">
                    <a href="https://x.com/kweku__mintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111114] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1F1F23] transition-colors" aria-label="X (Twitter)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/sammintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111114] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1F1F23] transition-colors" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/samuel-mintah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111114] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1F1F23] transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Product</h4>
                <ul className="space-y-4">
                    <li><a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">Features</a></li>
                    <li><a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Changelog</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Documentation</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Company</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Careers</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-[#1F1F23] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">© 2024 ARCH AI. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="text-slate-600 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-slate-600 hover:text-white text-sm">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}