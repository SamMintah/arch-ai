import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Github, Chrome, Cpu, Eye, EyeOff } from 'lucide-react';

interface AuthPageProps {
  onBack: () => void;
}

export default function AuthPage({ onBack }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-ink-muted flex flex-col relative">
      <div className="p-6">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-ink-muted hover:text-ink transition-colors group"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-surface border border-line rounded-xl p-8 shadow-[var(--shadow-soft)]">
            <div className="flex justify-center mb-8">
                <div className="w-12 h-12 rounded-[10px] bg-surface-alt border border-line flex items-center justify-center text-accent">
                    <Cpu size={26} />
                </div>
            </div>

            <h2 className="font-display text-3xl font-medium text-ink text-center mb-2">
                {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="text-ink-muted text-center mb-8 text-[15px]">
                {isLogin ? 'Enter your credentials to access your workspace.' : 'Start your journey to senior engineering mastery.'}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink ml-1">Full name</label>
                        <input 
                            type="text" 
                            className="w-full bg-surface border border-line rounded-[10px] px-4 py-3 text-ink placeholder:text-ink-muted focus:border-accent transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                )}
                
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-ink ml-1">Email address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                        <input 
                            type="email" 
                            className="w-full bg-surface border border-line rounded-[10px] pl-10 pr-4 py-3 text-ink placeholder:text-ink-muted focus:border-accent transition-colors"
                            placeholder="name@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-ink ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                        <input 
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-surface border border-line rounded-[10px] pl-10 pr-10 py-3 text-ink placeholder:text-ink-muted focus:border-accent transition-colors"
                            placeholder="••••••••"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-colors"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {isLogin && (
                    <div className="flex justify-end">
                        <button type="button" className="text-sm text-accent-ink hover:text-ink transition-colors">
                            Forgot password?
                        </button>
                    </div>
                )}

                <button className="w-full bg-accent-hover hover:bg-accent-ink text-white font-semibold py-3 rounded-[10px] transition-colors mt-2">
                    {isLogin ? 'Sign in' : 'Create account'}
                </button>
            </form>

            <div className="my-6 flex items-center gap-4">
                <div className="h-px bg-line flex-1"></div>
                <span className="text-sm text-ink-muted font-medium">or</span>
                <div className="h-px bg-line flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-surface-alt border border-line hover:border-ink-muted text-ink py-2.5 rounded-[10px] transition-colors text-sm font-medium group">
                    <Github size={18} className="text-ink-muted group-hover:text-ink transition-colors" />
                    Github
                </button>
                <button className="flex items-center justify-center gap-2 bg-surface-alt border border-line hover:border-ink-muted text-ink py-2.5 rounded-[10px] transition-colors text-sm font-medium group">
                    <Chrome size={18} className="text-ink-muted group-hover:text-ink transition-colors" />
                    Google
                </button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-ink-muted text-sm">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-accent-ink hover:text-ink font-medium transition-colors"
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
