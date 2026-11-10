import React, { useRef, useEffect } from 'react';

const steps = [
  {
    number: "01",
    title: "Answer a few questions",
    desc: "Clarify scope, constraints, and edge cases before any code."
  },
  {
    number: "02",
    title: "Compare architecture proposals",
    desc: "See monolith, serverless, and microservices side by side."
  },
  {
    number: "03",
    title: "Get your sprint plan",
    desc: "Leave with an ordered plan and the reasoning behind it."
  }
];

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
        <section id="demo" className="border-t border-line py-24 md:py-28 relative overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-ink">
                        Guided by intelligence
                    </h2>
                    <p className="mt-4 text-lg leading-[1.7] text-ink-muted max-w-[54ch]">
                        A structured workflow designed to mimic a senior engineer mentoring session.
                    </p>
                </div>

                {/* Three-step strip */}
                <ol className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-line pt-8">
                    {steps.map((step) => (
                        <li key={step.number} className="flex gap-4">
                            <span className="font-display text-2xl font-medium text-accent tabular-nums leading-none">{step.number}</span>
                            <div>
                                <h3 className="font-semibold text-ink">{step.title}</h3>
                                <p className="mt-1 text-[15px] leading-[1.65] text-ink-muted">{step.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 max-w-5xl">
                    <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
                        <div className="aspect-video bg-surface-alt">
                            <video
                                ref={videoRef}
                                aria-label="ARCH product demo"
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                preload="metadata"
                                poster="/arch-demo-poster.jpg"
                            >
                                <source src="/arch-demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
