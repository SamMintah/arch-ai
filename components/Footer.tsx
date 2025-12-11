import React from 'react';
import { Cpu, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                        <Cpu size={20} />
                    </div>
                    <span className="font-bold text-xl text-white">ARCH</span>
                </div>
                <p className="text-slate-400 max-w-sm mb-6">
                    The AI mentor that helps you bridge the gap between coding and architecture. Built for ambitious engineers.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Product</h4>
                <ul className="space-y-4">
                    <li><a href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors">Features</a></li>
                    <li><a href="#pricing" className="text-slate-400 hover:text-indigo-400 transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Changelog</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Documentation</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Company</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">About</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Careers</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
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