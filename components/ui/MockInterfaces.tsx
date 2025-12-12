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
