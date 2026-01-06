import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DemoVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Try to play when video is in view
                        video.play().catch((error) => {
                            console.log('Autoplay prevented:', error);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="demo" className="py-24 bg-[#030303] relative overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
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

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 blur-3xl opacity-50"></div>

                    {/* Video container */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#1F1F23] shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-[#111114]">
                        <div className="aspect-video bg-[#0A0A0B]">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                preload="metadata"
                            >
                                <source src="https://res.cloudinary.com/kaytech2/video/upload/v1767713259/arch_online-video-cutter.com_hiaswd.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
