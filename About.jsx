import React from 'react';
import { User, Cpu, Code2, Sparkles, BookOpen, Heart, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "Silicon to Software",
      desc: "Bridging the gap between low-level registers, microcontrollers, and modern interactive web interfaces.",
      icon: Cpu,
    },
    {
      title: "Hands-On Tinkering",
      desc: "Active learner who believes the best way to understand a protocol or an algorithm is to build it from scratch.",
      icon: Code2,
    },
    {
      title: "Real-World Focus",
      desc: "Designing applications and IoT prototypes that solve practical student and community challenges.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1426] border border-[#C084FC]/30 text-xs font-semibold text-[#C084FC] mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Curious Mind, Engineering Heart
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C084FC] to-[#FBBF24] rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-sm sm:text-base text-[#A8A0B5]">
            A blend of circuit schematics and modern codebases — driven by the passion to build purposeful technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#1B1426] border border-[#C084FC]/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-card-subtle">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C084FC]/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2.5">
              <span>Bridging the Physical &amp; Digital</span>
              <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#A8A0B5] leading-relaxed">
              <p>
                I am an <strong className="text-[#F8FAFC] font-semibold">Electronics and Communication Engineering</strong> student at{' '}
                <strong className="text-[#C084FC] font-semibold">K.S. Institute of Technology, Bengaluru</strong>. 
                My journey began with a natural fascination for how simple electrical signals transform into responsive, intelligent software systems.
              </p>

              <p>
                Rather than confining myself strictly to hardware or solely to high-level code, I thrive at their intersection. 
                Whether it's writing clean <strong className="text-[#F8FAFC] font-semibold">Python</strong> scripts for automated data handling, 
                crafting slick reactive frontends with <strong className="text-[#C084FC] font-semibold">React &amp; Tailwind</strong>, 
                or designing embedded sensor logic for microcontrollers and exploring <strong className="text-[#FBBF24] font-semibold">VLSI</strong> architectures, 
                I treat every project as a canvas for problem-solving.
              </p>

              <p>
                I actively participate in campus hackathons, collaborative lab builds, and tech communities. When I am not debugging code 
                or prototyping circuits, you will find me reading about emerging edge-AI trends and mentoring junior peers in foundational programming.
              </p>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="mt-8 pt-6 border-t border-[#322647] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F8FAFC]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>Analytical &amp; Algorithmic Thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>ECE Hardware &amp; Sensor Interfacing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>Modern Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>Collaborative Team Player</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* KSIT Student Card */}
            <div className="bg-[#1B1426] border border-[#FBBF24]/30 rounded-2xl p-6 relative overflow-hidden shadow-card-subtle group hover:border-[#FBBF24]/60 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#251C34] border border-[#FBBF24]/30 flex items-center justify-center text-[#FBBF24]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold gold-badge">
                  Academic Base
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-[#F8FAFC] mb-1">
                K.S. Institute of Technology (KSIT)
              </h4>
              <p className="text-xs text-[#C084FC] font-medium mb-2">
                B.E. in Electronics &amp; Communication Engineering
              </p>
              <p className="text-xs text-[#A8A0B5] leading-normal">
                Bengaluru, Karnataka &bull; Affiliated to VTU. Deepening foundations in Signals, Embedded Microcontrollers, and VLSI circuit principles.
              </p>
            </div>

            {/* Trait Cards */}
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1B1426] border border-[#C084FC]/15 hover:border-[#C084FC]/40 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#251C34] flex items-center justify-center text-[#C084FC]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-[#F8FAFC]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#A8A0B5] leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

