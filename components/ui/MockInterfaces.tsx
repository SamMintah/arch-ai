import React from 'react';
import { User, Bot, FileText, Database, Server, Smartphone, Globe, Settings, MoreHorizontal, Plus, ArrowRight, Layers, Box, Cpu, Zap, Shield, CheckCircle2, Mic, Play, CornerDownLeft, Cloud, ZoomIn, ZoomOut, MousePointer2, X, Info, Lightbulb, Code } from 'lucide-react';

export const MockWindow = ({ children, title }: { children?: React.ReactNode, title: string }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl shadow-black/50 w-full h-full min-h-[300px] flex flex-col">
    <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 justify-between shrink-0">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
      </div>
      <div className="text-xs text-slate-500 font-mono">{title}</div>
      <div className="w-8"></div>
    </div>
    <div className="flex-1 overflow-hidden relative bg-[#0B0F19]">
      {children}
    </div>
  </div>
);

export const HeroMock = () => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl flex flex-col h-[750px] md:h-auto md:aspect-video">

    {/* Header - Workspace Feel */}
    <div className="h-14 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
        <div className="flex items-center gap-2 text-slate-200 font-medium whitespace-nowrap overflow-hidden">
          <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">P</div>
          <span className="text-sm md:text-base truncate">Ride Sharing App</span>
        </div>
        <span className="h-4 w-px bg-slate-700 hidden sm:block shrink-0"></span>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 whitespace-nowrap">
           <span className="w-2 h-2 rounded-full bg-green-500"></span>
           Active Session
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
         <div className="hidden sm:flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-slate-400">MJ</div>
            <div className="w-8 h-8 rounded-full bg-indigo-900 border-2 border-slate-950 flex items-center justify-center text-xs text-indigo-200">AI</div>
         </div>
         <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors whitespace-nowrap">
            Share
         </button>
      </div>
    </div>

    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
      
      {/* LEFT PANEL: Context & Options */}
      <div className="w-full md:w-[40%] md:min-w-[300px] border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/30 flex flex-col h-[55%] md:h-auto">
        
        {/* AI Guidance Message */}
        <div className="p-4 md:p-6 border-b border-slate-800/50 shrink-0">
           <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                <Bot size={16} className="text-white" />
              </div>
              <div className="space-y-1">
                 <h3 className="text-sm font-semibold text-white">Analysis Complete</h3>
                 <p className="text-xs text-slate-400 leading-relaxed">
                   I analyzed your project's scale (1M+ DAU), constraints (low latency), and goals. Here are the architecture options that best fit what you're building. Choose one to explore.
                 </p>
              </div>
           </div>
        </div>

        {/* Options List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            
            {/* Option A */}
            <div className="group p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                     <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400">
                        <Box size={14} />
                     </div>
                     <span className="font-semibold text-slate-200 text-sm">Monolith MVP</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Speed</span>
               </div>
               <ul className="space-y-1 ml-1 mb-3">
                  <li className="text-xs text-slate-400 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-slate-600"></span> Fastest time to market
                  </li>
                  <li className="text-xs text-slate-400 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-slate-600"></span> Simple deployment pipeline
                  </li>
               </ul>
               <div className="text-xs text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View full breakdown <ArrowRight size={12} />
               </div>
            </div>

            {/* Option B */}
            <div className="group p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                     <div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                        <Zap size={14} />
                     </div>
                     <span className="font-semibold text-slate-200 text-sm">Serverless Modular</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Cost</span>
               </div>
               <ul className="space-y-1 ml-1 mb-3">
                  <li className="text-xs text-slate-400 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-slate-600"></span> Scales to zero automatically
                  </li>
                  <li className="text-xs text-slate-400 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-slate-600"></span> Event-driven architecture
                  </li>
               </ul>
               <div className="text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View full breakdown <ArrowRight size={12} />
               </div>
            </div>

            {/* Option C */}
            <div className="group p-4 rounded-xl border border-indigo-500/30 bg-indigo-900/10 hover:bg-indigo-900/20 transition-all cursor-pointer relative overflow-hidden shadow-inner">
               <div className="absolute right-2 top-2">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
               </div>
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                     <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                        <Layers size={14} />
                     </div>
                     <span className="font-semibold text-white text-sm">Microservices Distributed</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">Scale</span>
               </div>
               <ul className="space-y-1 ml-1 mb-3">
                  <li className="text-xs text-slate-300 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-indigo-400"></span> Independent scaling of services
                  </li>
                  <li className="text-xs text-slate-300 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-indigo-400"></span> Fault isolation for high availability
                  </li>
               </ul>
               <div className="text-xs text-indigo-300 font-medium flex items-center gap-1">
                  Explore this option <ArrowRight size={12} />
               </div>
            </div>

        </div>
      </div>

      {/* RIGHT PANEL: Diagram Preview */}
      <div className="flex-1 relative bg-[#0B0F19] flex items-center justify-center p-4 md:p-8 overflow-hidden border-t md:border-t-0 border-slate-800">
         {/* Blueprint Grid Background */}
         <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:120px_120px]"></div>

         {/* Diagram Visual */}
         <div className="relative z-10 w-full max-w-md aspect-[4/3] rounded-lg border-2 border-dashed border-slate-700/50 flex items-center justify-center p-6 scale-90 md:scale-100">
            
            {/* Diagram Nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-600 px-3 py-1.5 rounded text-[10px] text-slate-400 font-mono flex items-center gap-2 shadow-xl">
               <Globe size={12} /> Load Balancer
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 w-full">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-10 md:w-16 md:h-12 bg-indigo-900/20 border border-indigo-500/50 rounded flex items-center justify-center">
                     <Server size={18} className="text-indigo-400" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Order Svc</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-10 md:w-16 md:h-12 bg-indigo-900/20 border border-indigo-500/50 rounded flex items-center justify-center">
                     <Server size={18} className="text-indigo-400" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Driver Svc</span>
               </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-slate-900 border border-green-900/50 rounded flex items-center justify-center gap-2 shadow-xl">
                <Database size={16} className="text-green-500" />
                <span className="text-[10px] text-slate-300 font-mono">Primary DB Cluster</span>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
               <path d="M150,20 L100,60" stroke="#94a3b8" strokeWidth="1" fill="none" />
               <path d="M150,20 L220,60" stroke="#94a3b8" strokeWidth="1" fill="none" />
               <path d="M100,110 L150,160" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="4,4" />
               <path d="M220,110 L150,160" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="4,4" />
            </svg>
         </div>

         {/* Floating Action Button */}
         <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-semibold text-xs md:text-sm shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-1">
               <Shield size={14} className="md:w-4 md:h-4" />
               See full architecture
            </button>
         </div>
      </div>
    </div>
  </div>
);

export const ChatMock = () => (
  <MockWindow title="ARCH Interview Interface">
    <div className="flex h-full font-sans">
      {/* Main Content Area */}
      <div className="flex-1 p-3 md:p-8 flex flex-col items-center justify-center relative bg-[#0B0F19]">
         {/* Question Container */}
         <div className="w-full max-w-2xl relative z-10">
             
             {/* Header Badge */}
             <div className="flex items-center justify-between mb-4 md:mb-8">
                <span className="bg-slate-800/80 backdrop-blur text-indigo-400 text-[9px] md:text-xs px-2 md:px-3 py-1 rounded-full font-medium border border-slate-700 shadow-sm">
                   Question 3 of 4
                </span>
                <span className="text-[9px] md:text-xs font-bold text-slate-500 tracking-widest uppercase">
                   Payment Security
                </span>
             </div>
             
             {/* Main Question */}
             <h3 className="text-base md:text-3xl font-bold text-white mb-3 md:mb-6 leading-tight">
               How should we handle payment processing failures during a ride completion?
             </h3>
             
             {/* Hint/Context */}
             <div className="flex gap-2 md:gap-3 mb-4 md:mb-8 pl-1">
                <div className="w-0.5 bg-indigo-500 rounded-full h-full min-h-[1.5em]"></div>
                <p className="text-slate-400 text-[10px] md:text-sm italic">
                   Consider idempotency keys and eventual consistency reconciliation loops.
                </p>
             </div>

             {/* Input Area */}
             <div className="bg-slate-900 border border-slate-700 rounded-xl p-1 shadow-2xl relative group focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
                 <div className="p-2 md:p-4 min-h-[80px] md:min-h-[120px]">
                    <p className="text-slate-200 text-[10px] md:text-sm leading-relaxed font-mono">
                        We must implement idempotency keys for all payment transactions. If a failure occurs, the system should retry with exponential backoff and flag for manual review if it fails 3 times.
                        <span className="animate-pulse inline-block w-1.5 h-3 md:w-2 md:h-4 bg-indigo-500 align-middle ml-1"></span>
                    </p>
                 </div>
                 
                 {/* Input Actions */}
                 <div className="flex justify-between items-center p-1.5 md:p-2 bg-slate-950/30 rounded-b-lg border-t border-slate-800">
                    <div className="flex gap-2">
                       <button className="p-1.5 md:p-2 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                          <Mic size={12} className="md:w-3.5 md:h-3.5" />
                       </button>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="text-[10px] md:text-xs text-slate-500 hover:text-white transition-colors font-medium">
                            Back
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-1 md:gap-2 transition-all shadow-lg shadow-green-500/10">
                           Confirm & Next 
                           <ArrowRight size={10} className="md:w-3.5 md:h-3.5" />
                        </button>
                    </div>
                 </div>
             </div>
         </div>

         {/* Background Decoration */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      </div>
      
      {/* Right Sidebar - Topic Coverage */}
      <div className="w-64 bg-[#080c14] border-l border-slate-800 p-6 hidden lg:block">
         <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">Topic Coverage</h4>
         <div className="space-y-6 relative">
             {/* Timeline Line */}
             <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-800"></div>

             <div className="flex items-start gap-4 text-sm text-slate-400 relative">
                <div className="w-5 h-5 rounded-full bg-green-900/30 text-green-500 flex items-center justify-center border border-green-500/30 shrink-0 relative z-10">
                   <CheckCircle2 size={12} />
                </div>
                <div className="pt-0.5">
                   <span className="block font-medium text-slate-300">Consistency</span>
                   <span className="text-xs text-slate-600">Completed</span>
                </div>
             </div>
             
             <div className="flex items-start gap-4 text-sm text-slate-400 relative">
                <div className="w-5 h-5 rounded-full bg-green-900/30 text-green-500 flex items-center justify-center border border-green-500/30 shrink-0 relative z-10">
                   <CheckCircle2 size={12} />
                </div>
                 <div className="pt-0.5">
                   <span className="block font-medium text-slate-300">Notifications</span>
                   <span className="text-xs text-slate-600">Completed</span>
                </div>
             </div>
             
             <div className="flex items-start gap-4 text-sm text-white font-medium relative">
                <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)] border border-indigo-400 shrink-0 relative z-10">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </div>
                 <div className="pt-0.5">
                   <span className="block text-indigo-200">Payment Security</span>
                   <span className="text-xs text-indigo-400/70">Current Topic</span>
                </div>
             </div>
             
             <div className="flex items-start gap-4 text-sm text-slate-600 relative">
                <div className="w-5 h-5 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center shrink-0 relative z-10">
                   <span className="text-[10px]">4</span>
                </div>
                <div className="pt-0.5">
                   <span className="block">Fraud Detection</span>
                   <span className="text-xs text-slate-700">Next</span>
                </div>
             </div>
         </div>
      </div>
    </div>
  </MockWindow>
);

export const PRDMock = () => (
  <MockWindow title="PRD Generator">
    <div className="p-4 md:p-6 bg-[#0B0F19] h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6 font-mono text-sm">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                    <h1 className="text-lg font-bold text-white mb-1">Ride Sharing Dispatch System</h1>
                    <div className="flex gap-2 text-xs text-slate-500">
                        <span>v1.0.2</span>
                        <span>•</span>
                        <span>Generated by ARCH</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded text-xs transition-colors">Edit</button>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded text-xs transition-colors">Export PDF</button>
                </div>
            </div>

            <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                    <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                        <span className="bg-indigo-500/10 px-1.5 rounded">1</span> Overview
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        The dispatch system matches riders with drivers in real-time. It must handle high concurrency (1M+ DAU) and ensure data consistency during the matching process to prevent double-booking.
                    </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                    <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                         <span className="bg-indigo-500/10 px-1.5 rounded">2</span> Functional Requirements
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3">
                            <span className="text-slate-600 shrink-0 font-bold">FR-01</span>
                            <span className="text-slate-300">System must support 10k concurrent websocket connections for driver location updates.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-slate-600 shrink-0 font-bold">FR-02</span>
                            <span className="text-slate-300">Users must receive push notifications within 200ms of a successful match.</span>
                        </li>
                         <li className="flex gap-3">
                            <span className="text-slate-600 shrink-0 font-bold">FR-03</span>
                            <span className="text-slate-300">Payment processing must be idempotent to prevent double charges during network partitions.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                    <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                         <span className="bg-indigo-500/10 px-1.5 rounded">3</span> Non-Functional Requirements
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3">
                            <span className="text-slate-600 shrink-0 font-bold">NFR-01</span>
                            <span className="text-slate-300">Latency: 99th percentile for match requests under 500ms.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-slate-600 shrink-0 font-bold">NFR-02</span>
                            <span className="text-slate-300">Availability: 99.99% uptime during peak hours.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </MockWindow>
);

export const ArchMock = () => (
  <MockWindow title="Architecture Selection">
    <div className="flex flex-col md:flex-row h-full bg-[#0B0F19]">
      {/* Left Panel - Options */}
      <div className="w-full md:w-1/3 md:min-w-[300px] border-b md:border-b-0 md:border-r border-slate-800 flex flex-col p-4 gap-4 overflow-y-auto h-[40%] md:h-full bg-[#0B0F19]">
        {/* Analysis Card */}
        <div className="bg-slate-900/50 border border-indigo-500/30 rounded-xl p-4 relative overflow-hidden shrink-0">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50"></div>
             <div className="flex gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                     <Bot size={18} className="text-white" />
                 </div>
                 <h3 className="font-bold text-white text-sm pt-1">Analysis Complete</h3>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed pl-11">
                 I analyzed your project's scale (1M+ DAU), constraints (low latency), and goals. Here are the architecture options.
             </p>
        </div>

        {/* Option 1 */}
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-colors cursor-pointer group shrink-0">
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-300 text-sm group-hover:text-white">Monolithic MVP</h4>
                <span className="text-[10px] font-bold bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-700">SPEED</span>
            </div>
            <ul className="space-y-1.5 pl-1">
                <li className="text-[11px] text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div> Easy to debug and test initially
                </li>
                <li className="text-[11px] text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div> Single deployment pipeline
                </li>
            </ul>
        </div>

        {/* Option 2 - Selected */}
        <div className="p-4 rounded-xl border border-indigo-500 bg-indigo-950/10 cursor-pointer relative shadow-[0_0_20px_rgba(79,70,229,0.1)] shrink-0">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
             <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-white text-sm">Event-Driven Microservices</h4>
                <span className="text-[10px] font-bold bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30">SCALE</span>
            </div>
             <ul className="space-y-1.5 pl-1">
                <li className="text-[11px] text-indigo-200/70 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400"></div> Independent scaling of Location Service
                </li>
                <li className="text-[11px] text-indigo-200/70 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400"></div> Fault isolation
                </li>
            </ul>
        </div>

        {/* Option 3 */}
         <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-colors cursor-pointer group shrink-0">
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-300 text-sm group-hover:text-white">Serverless Functions</h4>
                <span className="text-[10px] font-bold bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-700">COST</span>
            </div>
            <ul className="space-y-1.5 pl-1">
                <li className="text-[11px] text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div> Zero infrastructure management
                </li>
                <li className="text-[11px] text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div> Cost scales to zero
                </li>
            </ul>
        </div>
      </div>

      {/* Right Panel - Diagram */}
      <div className="flex-1 relative overflow-hidden bg-[#050912] flex items-center justify-center h-[60%] md:h-full">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         {/* Nodes Container */}
         <div className="relative w-full max-w-2xl h-[400px] scale-90 md:scale-100 origin-center">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#4f46e5', stopOpacity:0.2}} />
                        <stop offset="100%" style={{stopColor:'#4f46e5', stopOpacity:1}} />
                    </linearGradient>
                     <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                    </marker>
                    <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
                    </marker>
                </defs>
                {/* Mobile to LB */}
                <path d="M120,200 L200,200" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow)" />
                
                {/* LB to Trip Service */}
                <path d="M320,200 L360,200 L360,120 L400,120" stroke="#475569" strokeWidth="1" />
                
                {/* LB to Location Service */}
                <path d="M320,200 L360,200 L360,280 L400,280" stroke="#475569" strokeWidth="1" />
                
                {/* Trip Service to Postgres */}
                <path d="M510,120 L550,120" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow)" />
                
                {/* Location Service to Redis */}
                <path d="M510,280 L550,280" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow)" />

                {/* Location Service to Kafka */}
                <path d="M455,300 L455,340" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow-purple)" />

            </svg>

            {/* Mobile App */}
            <div className="absolute top-[180px] left-[10px] w-28 h-10 border border-slate-700 bg-slate-900 rounded flex items-center justify-center gap-2 z-10">
                <Smartphone size={14} className="text-slate-400" />
                <span className="text-[10px] text-slate-300">Mobile App</span>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border border-slate-600 rounded-full"></div>
            </div>

            {/* Load Balancer */}
            <div className="absolute top-[180px] left-[200px] w-32 h-10 border border-indigo-500/50 bg-indigo-900/20 rounded flex items-center justify-center gap-2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-900 border border-indigo-500 rounded-full"></div>
                <Globe size={14} className="text-indigo-400" />
                <span className="text-[10px] text-indigo-100">Load Balancer</span>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-900 border border-indigo-500 rounded-full"></div>
            </div>

            {/* Trip Service */}
            <div className="absolute top-[100px] left-[400px] w-28 h-10 border border-indigo-500/30 bg-slate-900/50 rounded flex items-center justify-center gap-2 z-10">
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border border-slate-600 rounded-full"></div>
                 <Server size={14} className="text-slate-400" />
                 <span className="text-[10px] text-slate-300">Trip Service</span>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border border-slate-600 rounded-full"></div>
            </div>

            {/* Location Service */}
            <div className="absolute top-[260px] left-[400px] w-28 h-10 border border-indigo-500 bg-indigo-900/20 rounded flex items-center justify-center gap-2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-900 border border-indigo-500 rounded-full"></div>
                 <Server size={14} className="text-indigo-400" />
                 <span className="text-[10px] text-indigo-100">Location Svc</span>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-900 border border-indigo-500 rounded-full"></div>
                 <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-900 border border-indigo-500 rounded-full"></div>
            </div>

            {/* Postgres DB */}
            <div className="absolute top-[100px] left-[550px] w-28 h-10 border border-green-900/50 bg-slate-900/80 rounded flex items-center justify-center gap-2 z-10">
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border border-green-900/50 rounded-full"></div>
                 <Database size={14} className="text-green-500" />
                 <span className="text-[10px] text-green-100">Postgres DB</span>
            </div>

             {/* Redis Geo */}
            <div className="absolute top-[260px] left-[550px] w-28 h-10 border border-green-900/50 bg-slate-900/80 rounded flex items-center justify-center gap-2 z-10">
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border border-green-900/50 rounded-full"></div>
                 <Database size={14} className="text-green-500" />
                 <span className="text-[10px] text-green-100">Redis (Geo)</span>
            </div>

            {/* Kafka Stream */}
             <div className="absolute top-[340px] left-[400px] w-28 h-10 border border-orange-500/50 bg-orange-900/10 rounded-full flex items-center justify-center gap-2 z-10 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border border-orange-500/50 rounded-full"></div>
                 <Cloud size={14} className="text-orange-400" />
                 <span className="text-[10px] text-orange-200">Kafka Stream</span>
            </div>

         </div>
      </div>
    </div>
  </MockWindow>
);

export const DiagramMock = () => (
  <MockWindow title="System Diagram">
    <div className="flex flex-col md:flex-row h-full bg-[#0B0F19]">
      {/* Diagram Area */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center h-[60%] md:h-full border-b md:border-b-0 md:border-r border-slate-800 bg-[#0B0F19]">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>

         {/* Diagram Content */}
         <div className="relative w-full max-w-2xl h-[400px] scale-90 md:scale-100 origin-center">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                     <marker id="arrow-diagram" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                    </marker>
                    <marker id="arrow-purple-diagram" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
                    </marker>
                    <marker id="arrow-green-diagram" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                    </marker>
                </defs>
                {/* Paths */}
                {/* Mobile to LB */}
                <path d="M80,200 L160,200" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow-diagram)" />
                {/* LB to Trip Service */}
                <path d="M280,200 L320,200 L320,120 L360,120" stroke="#475569" strokeWidth="1" />
                {/* LB to Location Service */}
                <path d="M280,200 L320,200 L320,280 L360,280" stroke="#475569" strokeWidth="1" />
                {/* Trip Service to Postgres - Highlighted */}
                <path d="M470,120 L510,120" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-green-diagram)" />
                {/* Location Service to Redis */}
                <path d="M470,280 L510,280" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow-diagram)" />
                {/* Location Service to Kafka */}
                <path d="M415,300 L415,340" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrow-purple-diagram)" />
            </svg>

            {/* Nodes */}
            {/* Mobile App */}
            <div className="absolute top-[180px] left-[-20px] w-28 h-10 border border-slate-700 bg-slate-900 rounded flex items-center justify-center gap-2 z-10">
                <Smartphone size={14} className="text-slate-400" />
                <span className="text-[10px] text-slate-300">Mobile App</span>
                {/* Dots */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
            </div>

            {/* Load Balancer */}
            <div className="absolute top-[180px] left-[160px] w-32 h-10 border border-indigo-500/50 bg-indigo-900/20 rounded flex items-center justify-center gap-2 z-10">
                <Globe size={14} className="text-indigo-400" />
                <span className="text-[10px] text-indigo-100">Load Balancer</span>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Trip Service */}
            <div className="absolute top-[100px] left-[360px] w-28 h-10 border border-indigo-500/30 bg-slate-900/50 rounded flex items-center justify-center gap-2 z-10">
                 <Server size={14} className="text-slate-400" />
                 <span className="text-[10px] text-slate-300">Trip Service</span>
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
            </div>

            {/* Location Service */}
            <div className="absolute top-[260px] left-[360px] w-28 h-10 border border-indigo-500/30 bg-indigo-900/10 rounded flex items-center justify-center gap-2 z-10">
                 <Server size={14} className="text-indigo-400" />
                 <span className="text-[10px] text-indigo-100">Location Svc</span>
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Postgres DB - SELECTED */}
            <div className="absolute top-[100px] left-[510px] w-28 h-10 border border-green-500 bg-green-900/20 rounded flex items-center justify-center gap-2 z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                 <Database size={14} className="text-green-400" />
                 <span className="text-[10px] text-green-100 font-bold">Postgres DB</span>
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            </div>

             {/* Redis Geo */}
            <div className="absolute top-[260px] left-[510px] w-28 h-10 border border-green-900/50 bg-slate-900/80 rounded flex items-center justify-center gap-2 z-10">
                 <Database size={14} className="text-green-500" />
                 <span className="text-[10px] text-green-100">Redis (Geo)</span>
                 <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                 <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
            </div>

            {/* Kafka Stream */}
             <div className="absolute top-[340px] left-[360px] w-28 h-10 border border-orange-500/50 bg-orange-900/10 rounded-full flex items-center justify-center gap-2 z-10">
                 <Cloud size={14} className="text-orange-400" />
                 <span className="text-[10px] text-orange-200">Kafka Stream</span>
                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            </div>

         </div>
      </div>

      {/* Right Details Panel */}
      <div className="w-full md:w-[320px] bg-[#0B0F19] border-l-0 md:border-l border-slate-800 flex flex-col h-[40%] md:h-full">
        {/* Header */}
        <div className="p-3 md:p-4 border-b border-slate-800 flex items-start justify-between bg-[#0B0F19]">
            <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-900/30 border border-green-500/30 flex items-center justify-center">
                    <Database size={16} className="text-green-500 md:w-5 md:h-5" />
                </div>
                <div>
                    <h3 className="text-xs md:text-sm font-bold text-white">Postgres DB</h3>
                    <p className="text-[9px] md:text-[10px] text-slate-500 font-bold tracking-wider">DATABASE</p>
                </div>
            </div>
            <button className="text-slate-500 hover:text-white"><X size={14} className="md:w-4 md:h-4" /></button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4 md:space-y-6">
            
            {/* Role */}
            <div>
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-slate-600 flex items-center justify-center">
                      <span className="text-[7px] md:text-[8px] text-slate-400">i</span>
                   </div>
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-500 tracking-wider">ROLE & RESPONSIBILITY</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 md:p-3">
                    <p className="text-[10px] md:text-xs text-slate-300 leading-relaxed">
                        Primary source of truth for durable, relational data.
                    </p>
                </div>
            </div>

            {/* Decision */}
            <div>
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-500">
                      <Lightbulb size={10} className="md:w-3 md:h-3" />
                   </div>
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-500 tracking-wider">ARCHITECTURAL DECISION</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 md:p-3">
                    <p className="text-[10px] md:text-xs text-slate-300 leading-relaxed">
                        ACID compliance is strictly required for financial transactions (Payments) and user identities to prevent data corruption or lost rides.
                    </p>
                </div>
            </div>

             {/* Stack */}
            <div>
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 text-indigo-500">
                      <Code size={10} className="md:w-3 md:h-3" />
                   </div>
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-500 tracking-wider">SUGGESTED TECH STACK</span>
                </div>
                <span className="inline-block bg-slate-800 text-indigo-300 border border-slate-700 rounded px-2 py-1 text-[10px] md:text-xs font-mono">PostgreSQL 15</span>
            </div>

            {/* Schema */}
             <div>
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <Database size={10} className="text-slate-500 md:w-3 md:h-3" />
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-500 tracking-wider">SCHEMA</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 md:p-3 space-y-2 md:space-y-3">
                    {/* Users Table */}
                    <div>
                        <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-slate-200 mb-1 md:mb-1.5 font-medium">
                            <Layers size={8} className="text-slate-500 md:w-2.5 md:h-2.5" /> users
                        </div>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-slate-800 text-slate-400 border border-slate-700 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">id (UUID)</span>
                            <span className="bg-slate-800 text-slate-400 border border-slate-700 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">email (VARCHAR)</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">phone</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">created_at</span>
                        </div>
                    </div>
                    {/* Trips Table */}
                    <div>
                        <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-slate-200 mb-1 md:mb-1.5 font-medium">
                             <Layers size={8} className="text-slate-500 md:w-2.5 md:h-2.5" /> trips
                        </div>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-slate-800 text-slate-400 border border-slate-700 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">id (UUID)</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">rider_id (FK)</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">driver_id (FK)</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">status</span>
                             <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">fare_amount</span>
                        </div>
                    </div>
                     {/* Payments Table */}
                    <div>
                        <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-slate-200 mb-1 md:mb-1.5 font-medium">
                             <Layers size={8} className="text-slate-500 md:w-2.5 md:h-2.5" /> payments
                        </div>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-slate-800 text-slate-400 border border-slate-700 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">id</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">trip_id</span>
                            <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">amount</span>
                             <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">currency</span>
                             <span className="bg-slate-800 text-slate-500 border border-slate-800 px-1 md:px-1.5 py-0.5 rounded-[4px] text-[8px] md:text-[10px] font-mono">status</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  </MockWindow>
);

export const SprintMock = () => (
  <MockWindow title="Learning Sprint Plan">
      <div className="flex flex-col h-full bg-[#0B0F19] p-4 md:p-6 overflow-y-auto">
          <div className="mb-6 flex justify-between items-end">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Sprint 1: Core Communication</h2>
                <p className="text-slate-400 text-sm">Focus: Implementing high-throughput websocket connections.</p>
              </div>
              <div className="text-xs text-slate-500">
                  Oct 12 - Oct 26
              </div>
          </div>

          <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group">
                  <div className="w-6 h-6 rounded-full border-2 border-indigo-500 mt-1 shrink-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-slate-200 font-medium mb-1 group-hover:text-indigo-400 transition-colors">Setup WebSocket Server</h3>
                      <p className="text-slate-500 text-xs mb-3">Initialize Node.js socket.io server with cluster mode for scaling across multiple cores.</p>
                      <div className="flex gap-2">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] border border-indigo-500/20">Backend</span>
                          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20">Networking</span>
                      </div>
                  </div>
              </div>

              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group">
                   <div className="w-6 h-6 rounded-full border-2 border-indigo-500 mt-1 shrink-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-slate-200 font-medium mb-1 group-hover:text-indigo-400 transition-colors">Redis Pub/Sub Layer</h3>
                      <p className="text-slate-500 text-xs mb-3">Implement message broker for cross-server communication to handle socket events.</p>
                       <div className="flex gap-2">
                          <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[10px] border border-orange-500/20">Infrastructure</span>
                      </div>
                  </div>
              </div>

               <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-4 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-slate-700 mt-1 shrink-0"></div>
                  <div className="flex-1">
                      <h3 className="text-slate-200 font-medium mb-1">Load Testing</h3>
                      <p className="text-slate-500 text-xs mb-3">Simulate 10k concurrent connections using artillery.io.</p>
                      <div className="flex gap-2">
                          <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] border border-red-500/20">QA</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </MockWindow>
);