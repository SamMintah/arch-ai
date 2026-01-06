import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, FileText, Layers, ListTodo, MousePointer2 } from 'lucide-react';
import { ChatMock, PRDMock, ArchMock, DiagramMock, SprintMock } from './ui/MockInterfaces';

const steps = [
    {
        id: 1,
        title: "The Interviewer",
        desc: "Before drawing boxes,ARCH asks the right questions to clarify your vision and uncover edge cases before you write a single line of code.",
        icon: <MessageSquare size={20} />,
        mock: <ChatMock />,
        colorClass: "text-emerald-400",
        glowClass: "bg-emerald-500/20"
    },
    {
        id: 2,
        title: "PRD Builder",
        desc: "Get a production-ready PRD in minutes, not days. ARCH explains each section so you understand what you're building and why it matters.",
        icon: <FileText size={20} />,
        mock: <PRDMock />,
        colorClass: "text-emerald-400",
        glowClass: "bg-emerald-500/20"
    },
    {
        id: 3,
        title: "Architecture Workshop",
        desc: "Compare monolith, serverless, and microservices side-by-side with real cost estimates, complexity ratings, and timeline projections. Make informed decisions.",
        icon: <Layers size={20} />,
        mock: <ArchMock />,
        colorClass: "text-emerald-400",
        glowClass: "bg-emerald-500/20"
    },
    {
        id: 4,
        title: "Interactive Diagrams",
        desc: "Click any component to see why PostgreSQL beats MongoDB for YOUR use case. Watch data flow in real-time. Every component is a mini-lesson.",
        icon: <MousePointer2 size={20} />,
        mock: <DiagramMock />,
        colorClass: "text-emerald-400",
        glowClass: "bg-emerald-500/20"
    },
    {
        id: 5,
        title: "Sprint Breakdown",
        desc: "Get a step-by-step implementation plan with learning-focused tasks. Know exactly what to build, why it matters, and what you'll learn from each sprint.",
        icon: <ListTodo size={20} />,
        mock: <SprintMock />,
        colorClass: "text-emerald-400",
        glowClass: "bg-emerald-500/20"
    }
];

interface CardProps {
    i: number;
    id: number;
    title: string;
    desc: string;
    icon: React.ReactNode;
    mock: React.ReactNode;
    colorClass: string;
    glowClass: string;
    progress: any;
    range: number[];
    targetScale: number;
}

const Card = ({ i, title, desc, icon, mock, colorClass, glowClass, progress, range, targetScale }: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="mb-8 md:mb-0 md:h-[75vh] lg:h-[90vh] flex items-center justify-center md:sticky md:top-0 px-4 md:px-6">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5% + ${i * 25}px)`
                }}
                className="flex flex-col relative h-[500px] sm:h-[550px] md:h-[650px] w-full max-w-6xl rounded-2xl md:rounded-3xl bg-[#111114] border border-[#1F1F23] p-4 sm:p-5 md:p-10 origin-top shadow-2xl overflow-hidden"
            >
                {/* Header Section inside Card */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">
                    <div className="flex items-start gap-4 max-w-2xl">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center ${colorClass} shrink-0 shadow-lg`}>
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{title}</h3>
                            <p className="text-slate-400 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{desc}</p>
                        </div>
                    </div>
                    <div className="text-6xl md:text-8xl font-bold text-slate-800/20 absolute right-0 top-0 -z-10 pointer-events-none select-none">
                        0{i + 1}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 rounded-2xl overflow-hidden bg-[#030303] border border-[#1F1F23] relative group">
                    <div className={`absolute -inset-1 ${glowClass} opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-2xl`}></div>
                    <div className="relative h-full w-full">
                        {mock}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function HowItWorks() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="how-it-works" className="bg-[#030303] relative pt-20">
            <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-14 lg:mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                        The ARCH Workflow
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                        Guided by Intelligence
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A structured workflow designed to mimic a senior engineer mentoring session.
                    </p>
                </motion.div>
            </div>

            <div ref={container} className="relative pb-24">
                {steps.map((step, i) => {
                    const targetScale = 1 - ((steps.length - 1 - i) * 0.05);
                    return <Card key={i} i={i} {...step} progress={scrollYProgress} range={[i * (1 / steps.length), 1]} targetScale={targetScale} />
                })}
            </div>
        </section>
    )
}