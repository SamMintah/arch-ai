import React from 'react';
import { User, Bot, FileText, Database, Server, Smartphone, Globe, Settings, MoreHorizontal, Plus, ArrowRight, Layers, Box, Cpu, Zap, Shield } from 'lucide-react';

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
    <div className="p-4 overflow-hidden relative flex-1">
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
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0"><Bot size={12} className="text-white"/></div>
        <div className="text-sm text-slate-300 bg-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-700">
          To design this notification system, do we need to guarantee delivery (at-least-once) or is at-most-once acceptable?
        </div>
      </div>
      <div className="flex gap-3 flex-row-reverse">
         <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center shrink-0"><User size={12} className="text-white"/></div>
         <div className="text-sm text-white bg-indigo-600 p-3 rounded-lg rounded-tr-none">
           It's for OTPs, so delivery must be guaranteed. Latency should be under 2s.
         </div>
      </div>
      <div className="flex gap-3">
        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0"><Bot size={12} className="text-white"/></div>
        <div className="text-sm text-slate-300 bg-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-700">
          Noted. This implies we need a persistent queue with retry logic. Redis Stream or SQS would work.
        </div>
      </div>
    </div>
  </MockWindow>
);

export const PRDMock = () => (
  <MockWindow title="PRD Generator">
    <div className="space-y-4 font-mono text-sm">
      <div className="border-l-2 border-indigo-500 pl-4">
        <h3 className="text-indigo-400 font-bold mb-1">2. Functional Requirements</h3>
        <ul className="space-y-2 text-slate-300">
          <li className="flex gap-2">
            <span className="text-slate-600">FR-01</span>
            System must support 10k concurrent websocket connections.
          </li>
          <li className="flex gap-2">
            <span className="text-slate-600">FR-02</span>
            Users must receive push notifications within 200ms of event.
          </li>
        </ul>
      </div>
      <div className="border-l-2 border-slate-700 pl-4 opacity-50">
        <h3 className="text-slate-500 font-bold mb-1">3. Non-Functional Requirements</h3>
        <p className="text-slate-600">Generating...</p>
      </div>
    </div>
  </MockWindow>
);

export const ArchMock = () => (
  <MockWindow title="Architecture Selection">
    <div className="grid grid-cols-2 gap-3 h-full">
        <div className="bg-slate-800/50 border border-indigo-500/50 p-3 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-500 text-[10px] text-white px-2 py-0.5 rounded-bl">Recommended</div>
            <h4 className="text-white font-bold text-sm mb-1">Event-Driven</h4>
            <div className="space-y-1 mb-2">
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[90%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Scalability</span>
                    <span>High</span>
                </div>
            </div>
            <p className="text-[11px] text-slate-400">Decoupled services communicating via Kafka.</p>
        </div>
        <div className="bg-slate-800/20 border border-slate-800 p-3 rounded-lg opacity-60">
            <h4 className="text-slate-300 font-bold text-sm mb-1">Monolith</h4>
             <div className="space-y-1 mb-2">
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[40%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Scalability</span>
                    <span>Low</span>
                </div>
            </div>
             <p className="text-[11px] text-slate-500">Simple to deploy, hard to scale independently.</p>
        </div>
    </div>
  </MockWindow>
);

export const DiagramMock = () => (
  <MockWindow title="System Diagram View">
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Simplified React Flow / Mermaid Visual */}
        <div className="relative w-full h-40">
            {/* Nodes */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-16 h-16 bg-slate-800 border border-indigo-500 rounded-lg flex flex-col items-center justify-center z-10">
                <Smartphone size={16} className="text-indigo-400 mb-1" />
                <span className="text-[9px] text-slate-300">Client</span>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-800 border border-slate-600 rounded-lg flex flex-col items-center justify-center z-10 shadow-xl">
                <Server size={20} className="text-blue-400 mb-1" />
                <span className="text-[10px] text-slate-200">API Gateway</span>
            </div>

            <div className="absolute top-4 right-8 w-16 h-16 bg-slate-800 border border-slate-600 rounded-lg flex flex-col items-center justify-center z-10">
                <Database size={16} className="text-green-400 mb-1" />
                <span className="text-[9px] text-slate-300">User DB</span>
            </div>
            
            <div className="absolute bottom-4 right-8 w-16 h-16 bg-slate-800 border border-slate-600 rounded-lg flex flex-col items-center justify-center z-10">
                <Database size={16} className="text-green-400 mb-1" />
                <span className="text-[9px] text-slate-300">Cache</span>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="80" y1="50%" x2="45%" y2="50%" stroke="#475569" strokeWidth="2" />
                <line x1="55%" y1="50%" x2="80%" y2="25%" stroke="#475569" strokeWidth="2" />
                <line x1="55%" y1="50%" x2="80%" y2="75%" stroke="#475569" strokeWidth="2" />
            </svg>
        </div>
    </div>
  </MockWindow>
);

export const SprintMock = () => (
  <MockWindow title="Sprint Planner">
     <div className="space-y-3">
        <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white">Sprint 1: Core Foundation</h4>
            <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Learning Goal: Scaling</span>
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded border border-slate-800">
                <div className="w-4 h-4 rounded border border-slate-600"></div>
                <span className="text-xs text-slate-300 line-through decoration-slate-500 decoration-1 opacity-50">Setup VPC and Security Groups</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded border border-indigo-500 bg-indigo-500"></div>
            <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded border border-slate-800">
                <div className="w-4 h-4 rounded border border-indigo-500 bg-indigo-500"></div>
                <span className="text-xs text-white">Implement Idempotency Key in API</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded border border-slate-800">
                <div className="w-4 h-4 rounded border border-slate-600"></div>
                <span className="text-xs text-slate-300">Configure Redis Cluster for session store</span>
            </div>
        </div>
     </div>
  </MockWindow>
);
