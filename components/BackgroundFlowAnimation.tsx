import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Network, Cpu, HardDrive, Globe, Layers } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  icon: React.ElementType;
  label: string;
}

interface Edge {
  from: string;
  to: string;
  delay: number;
  duration: number;
}

export default function BackgroundFlowAnimation() {
  const nodes: Node[] = useMemo(() => [
    // Top layer - Client/CDN
    { id: 'client1', x: 15, y: 10, icon: Globe, label: 'Client' },
    { id: 'cdn', x: 50, y: 8, icon: Cloud, label: 'CDN' },
    { id: 'client2', x: 85, y: 12, icon: Globe, label: 'Client' },
    
    // Upper-middle - Load balancers
    { id: 'lb1', x: 25, y: 25, icon: Network, label: 'Load Balancer' },
    { id: 'lb2', x: 75, y: 25, icon: Network, label: 'Load Balancer' },
    
    // Middle - API Gateway & Services
    { id: 'gateway', x: 50, y: 35, icon: Layers, label: 'API Gateway' },
    { id: 'service1', x: 20, y: 50, icon: Server, label: 'Auth Service' },
    { id: 'service2', x: 40, y: 55, icon: Server, label: 'API Service' },
    { id: 'service3', x: 60, y: 55, icon: Server, label: 'Worker' },
    { id: 'service4', x: 80, y: 50, icon: Server, label: 'Analytics' },
    
    // Lower-middle - Cache & Queue
    { id: 'cache1', x: 30, y: 70, icon: Cpu, label: 'Redis' },
    { id: 'queue', x: 50, y: 75, icon: Layers, label: 'Message Queue' },
    { id: 'cache2', x: 70, y: 70, icon: Cpu, label: 'Cache' },
    
    // Bottom - Databases
    { id: 'db1', x: 25, y: 88, icon: Database, label: 'Primary DB' },
    { id: 'db2', x: 50, y: 90, icon: Database, label: 'Analytics DB' },
    { id: 'db3', x: 75, y: 88, icon: HardDrive, label: 'Storage' },
  ], []);

  const edges: Edge[] = useMemo(() => [
    // Client to LB
    { from: 'client1', to: 'lb1', delay: 0, duration: 4 },
    { from: 'cdn', to: 'gateway', delay: 1, duration: 3.5 },
    { from: 'client2', to: 'lb2', delay: 0.5, duration: 4 },
    
    // LB to Gateway
    { from: 'lb1', to: 'gateway', delay: 2, duration: 3 },
    { from: 'lb2', to: 'gateway', delay: 2.5, duration: 3 },
    
    // Gateway to Services
    { from: 'gateway', to: 'service1', delay: 1.5, duration: 4 },
    { from: 'gateway', to: 'service2', delay: 2, duration: 3.5 },
    { from: 'gateway', to: 'service3', delay: 2.5, duration: 4 },
    { from: 'gateway', to: 'service4', delay: 3, duration: 3.5 },
    
    // Services to Cache/Queue
    { from: 'service1', to: 'cache1', delay: 0, duration: 5 },
    { from: 'service2', to: 'queue', delay: 1, duration: 4.5 },
    { from: 'service3', to: 'cache2', delay: 1.5, duration: 5 },
    { from: 'service4', to: 'queue', delay: 2, duration: 4 },
    
    // Cache/Queue to DB
    { from: 'cache1', to: 'db1', delay: 0.5, duration: 4.5 },
    { from: 'queue', to: 'db2', delay: 1, duration: 5 },
    { from: 'cache2', to: 'db3', delay: 1.5, duration: 4.5 },
    { from: 'service2', to: 'db1', delay: 2.5, duration: 5 },
    { from: 'service4', to: 'db2', delay: 3, duration: 4.5 },
  ], []);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const generatePath = (fromId: string, toId: string) => {
    const from = getNodePosition(fromId);
    const to = getNodePosition(toId);
    
    const startX = from.x;
    const startY = from.y;
    const endX = to.x;
    const endY = to.y;
    
    // Create curved bezier path
    const midY = (startY + endY) / 2;
    const controlPoint1X = startX;
    const controlPoint1Y = midY;
    const controlPoint2X = endX;
    const controlPoint2Y = midY;
    
    return `M ${startX} ${startY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${endX} ${endY}`;
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]/80" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for paths */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Render edges */}
        {edges.map((edge, idx) => {
          const pathD = generatePath(edge.from, edge.to);
          const pathId = `path-${idx}`;
          
          return (
            <g key={idx}>
              {/* Static dashed path */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="0.15"
                strokeDasharray="1 2"
                opacity="0.4"
                className="animate-dash"
                style={{
                  animationDelay: `${edge.delay}s`,
                  animationDuration: `${edge.duration * 2}s`
                }}
              />
              
              {/* Animated particle */}
              <circle r="0.3" fill="#6366f1" filter="url(#glow)">
                <animateMotion
                  dur={`${edge.duration}s`}
                  repeatCount="indefinite"
                  begin={`${edge.delay}s`}
                  path={pathD}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${edge.duration}s`}
                  repeatCount="indefinite"
                  begin={`${edge.delay}s`}
                />
              </circle>
            </g>
          );
        })}

        {/* Render nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isDatabase = Icon === Database || Icon === HardDrive;
          const isCloud = Icon === Cloud;
          const isLoadBalancer = Icon === Network;
          const isQueue = node.id === 'queue';
          
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.5, delay: Math.random() * 2 }}
            >
              {/* Node glow */}
              <rect
                x={node.x - 2}
                y={node.y - 1.5}
                width="4"
                height="3"
                rx="0.3"
                fill="#6366f1"
                opacity="0.1"
                filter="url(#glow)"
              />
              
              {/* Render different shapes based on node type */}
              {isDatabase ? (
                // Cylinder for databases with detail lines
                <g>
                  {/* Top ellipse */}
                  <ellipse
                    cx={node.x}
                    cy={node.y - 0.6}
                    rx="1.2"
                    ry="0.4"
                    fill="#1e1e1e"
                    stroke="#6366f1"
                    strokeWidth="0.12"
                    opacity="0.7"
                  />
                  {/* Body */}
                  <rect
                    x={node.x - 1.2}
                    y={node.y - 0.6}
                    width="2.4"
                    height="1.2"
                    fill="#1e1e1e"
                    opacity="0.7"
                  />
                  {/* Side lines */}
                  <line
                    x1={node.x - 1.2}
                    y1={node.y - 0.6}
                    x2={node.x - 1.2}
                    y2={node.y + 0.6}
                    stroke="#6366f1"
                    strokeWidth="0.12"
                    opacity="0.7"
                  />
                  <line
                    x1={node.x + 1.2}
                    y1={node.y - 0.6}
                    x2={node.x + 1.2}
                    y2={node.y + 0.6}
                    stroke="#6366f1"
                    strokeWidth="0.12"
                    opacity="0.7"
                  />
                  {/* Bottom ellipse */}
                  <ellipse
                    cx={node.x}
                    cy={node.y + 0.6}
                    rx="1.2"
                    ry="0.4"
                    fill="#1e1e1e"
                    stroke="#6366f1"
                    strokeWidth="0.12"
                    opacity="0.7"
                  />
                  {/* Detail lines on cylinder */}
                  <ellipse
                    cx={node.x}
                    cy={node.y - 0.2}
                    rx="1.2"
                    ry="0.4"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="0.08"
                    opacity="0.3"
                  />
                  <ellipse
                    cx={node.x}
                    cy={node.y + 0.2}
                    rx="1.2"
                    ry="0.4"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="0.08"
                    opacity="0.3"
                  />
                </g>
              ) : isCloud ? (
                // Cloud shape for CDN
                <path
                  d={`M ${node.x - 1.5} ${node.y} 
                      Q ${node.x - 1.5} ${node.y - 0.8} ${node.x - 0.8} ${node.y - 0.8}
                      Q ${node.x - 0.5} ${node.y - 1.2} ${node.x} ${node.y - 1.2}
                      Q ${node.x + 0.5} ${node.y - 1.2} ${node.x + 0.8} ${node.y - 0.8}
                      Q ${node.x + 1.5} ${node.y - 0.8} ${node.x + 1.5} ${node.y}
                      Q ${node.x + 1.5} ${node.y + 0.5} ${node.x + 0.8} ${node.y + 0.5}
                      L ${node.x - 0.8} ${node.y + 0.5}
                      Q ${node.x - 1.5} ${node.y + 0.5} ${node.x - 1.5} ${node.y} Z`}
                  fill="#1e1e1e"
                  stroke="#6366f1"
                  strokeWidth="0.12"
                  opacity="0.7"
                />
              ) : isLoadBalancer ? (
                // Diamond for load balancers
                <path
                  d={`M ${node.x} ${node.y - 1.2} 
                      L ${node.x + 1.2} ${node.y} 
                      L ${node.x} ${node.y + 1.2} 
                      L ${node.x - 1.2} ${node.y} Z`}
                  fill="#1e1e1e"
                  stroke="#6366f1"
                  strokeWidth="0.12"
                  opacity="0.7"
                />
              ) : isQueue ? (
                // Parallelogram for queue
                <path
                  d={`M ${node.x - 1} ${node.y - 0.7} 
                      L ${node.x + 1.2} ${node.y - 0.7} 
                      L ${node.x + 1} ${node.y + 0.7} 
                      L ${node.x - 1.2} ${node.y + 0.7} Z`}
                  fill="#1e1e1e"
                  stroke="#6366f1"
                  strokeWidth="0.12"
                  opacity="0.7"
                />
              ) : (
                // Server rack - rectangle with horizontal lines
                <g>
                  <rect
                    x={node.x - 1.2}
                    y={node.y - 0.8}
                    width="2.4"
                    height="1.6"
                    rx="0.2"
                    fill="#1e1e1e"
                    stroke="#6366f1"
                    strokeWidth="0.12"
                    opacity="0.7"
                  />
                  {/* Server rack lines */}
                  <line
                    x1={node.x - 1.1}
                    y1={node.y - 0.3}
                    x2={node.x + 1.1}
                    y2={node.y - 0.3}
                    stroke="#6366f1"
                    strokeWidth="0.08"
                    opacity="0.4"
                  />
                  <line
                    x1={node.x - 1.1}
                    y1={node.y + 0.2}
                    x2={node.x + 1.1}
                    y2={node.y + 0.2}
                    stroke="#6366f1"
                    strokeWidth="0.08"
                    opacity="0.4"
                  />
                  {/* Small indicator dots */}
                  <circle cx={node.x - 0.8} cy={node.y - 0.5} r="0.08" fill="#6366f1" opacity="0.5" />
                  <circle cx={node.x - 0.5} cy={node.y - 0.5} r="0.08" fill="#6366f1" opacity="0.5" />
                  <circle cx={node.x - 0.8} cy={node.y} r="0.08" fill="#6366f1" opacity="0.5" />
                  <circle cx={node.x - 0.5} cy={node.y} r="0.08" fill="#6366f1" opacity="0.5" />
                  <circle cx={node.x - 0.8} cy={node.y + 0.5} r="0.08" fill="#6366f1" opacity="0.5" />
                  <circle cx={node.x - 0.5} cy={node.y + 0.5} r="0.08" fill="#6366f1" opacity="0.5" />
                </g>
              )}
              
              {/* Pulse animation */}
              <rect
                x={node.x - 1.5}
                y={node.y - 1}
                width="3"
                height="2"
                rx="0.3"
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.1"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 3}s`}
                />
                <animate
                  attributeName="stroke-width"
                  values="0.1;0.2;0.1"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 3}s`}
                />
              </rect>
            </motion.g>
          );
        })}
      </svg>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        .animate-dash {
          animation: dash linear infinite;
        }
      `}</style>
    </div>
  );
}
