import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Github, Chrome, Cpu, Eye, EyeOff } from 'lucide-react';

interface AuthPageProps {
  onBack: () => void;
}

export default function AuthPage({ onBack }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background text-slate-200 flex flex-col relative overflow-hidden">
      {/* Background Gradients */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="p-6">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>

            <div className="flex justify-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Cpu size={28} />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-2">
                {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="text-slate-400 text-center mb-8 text-sm">
                {isLogin ? 'Enter your credentials to access your workspace.' : 'Start your journey to senior engineering mastery.'}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300 ml-1">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                            placeholder="John Doe"
                        />
                    </div>
                )}
                
                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input 
                            type="email" 
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                            placeholder="name@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input 
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-10 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                            placeholder="••••••••"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {isLogin && (
                    <div className="flex justify-end">
                        <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                            Forgot password?
                        </button>
                    </div>
                )}

                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] mt-2">
                    {isLogin ? 'Sign In' : 'Create Account'}
                </button>
            </form>

            <div className="my-6 flex items-center gap-4">
                <div className="h-px bg-slate-800 flex-1"></div>
                <span className="text-xs text-slate-500 font-medium">OR</span>
                <div className="h-px bg-slate-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white py-2.5 rounded-lg transition-all text-sm font-medium group">
                    <Github size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    Github
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white py-2.5 rounded-lg transition-all text-sm font-medium group">
                    <Chrome size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    Google
                </button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}