import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Software Engineer",
    company: "FinTech Scale-up",
    initials: "SJ",
    gradient: "from-pink-500 to-rose-500",
    content: "ARCH helped me break out of the 'just a coder' mindset. I used it to design a notification system, and my manager was impressed by the depth of my trade-off analysis. Promoted last month!",
  },
  {
    name: "David Chen",
    role: "Backend Developer",
    company: "Cloud Systems Inc.",
    initials: "DC",
    gradient: "from-blue-500 to-cyan-500",
    content: "I was always intimidated by system design. ARCH's socratic method forced me to think through edge cases I usually ignore. It feels like having a staff engineer sitting next to you 24/7.",
  },
  {
    name: "Elena Rodriguez",
    role: "Tech Lead",
    company: "Enterprise Solutions",
    initials: "ER",
    gradient: "from-purple-500 to-indigo-500",
    content: "The PRD generation feature is a lifesaver. It structures my scattered thoughts into professional documents. Our team now uses ARCH to brainstorm architecture before writing a single line of code.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 border-b border-slate-900 bg-background relative overflow-hidden">
       {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Engineers</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
                See how ARCH is helping developers transition into architectural roles.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full relative group">
                    <Quote className="absolute top-6 right-6 text-slate-800 group-hover:text-indigo-500/20 transition-colors" size={48} />
                    
                    <div className="flex items-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8 flex-1 relative z-10">
                        "{t.content}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto border-t border-slate-800/50 pt-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {t.initials}
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                            <div className="text-slate-500 text-xs flex flex-col">
                                <span>{t.role}</span>
                                <span className="text-indigo-400/80">{t.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}