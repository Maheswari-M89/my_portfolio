import React from 'react';
import { Sparkles, ArrowRight, FolderGit2, Compass, Cpu, Code2, Bot, Layers, GraduationCap, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const domainPills = [
    { label: 'Python & AI', icon: Bot, color: 'border-[#C084FC]/30 text-[#C084FC]' },
    { label: 'Web Development', icon: Code2, color: 'border-[#C084FC]/30 text-[#C084FC]' },
    { label: 'Embedded Systems', icon: Cpu, color: 'border-[#FBBF24]/30 text-[#FBBF24]' },
    { label: 'VLSI & Digital Logic', icon: Layers, color: 'border-[#C084FC]/30 text-[#C084FC]' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6">
      {/* Subtle organic decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="w-[500px] h-[500px] bg-[#C084FC]/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B1426]/90 border border-[#C084FC]/30 backdrop-blur-md shadow-sm mb-6 sm:mb-8 group hover:border-[#C084FC]/60 transition-all duration-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBBF24] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FBBF24]"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#F8FAFC]/90">
            Student Developer &bull; Learning, Building & Growing
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FBBF24] group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F8FAFC] tracking-tight leading-[1.18] sm:leading-[1.15] mb-6">
          Hey, I'm <span className="text-[#C084FC] relative inline-block">
            Maheshwari.M
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-60"></span>
          </span>
          <br className="hidden sm:inline" />
          <span className="text-[#F8FAFC]/95 font-medium"> — Turning Curiosity Into Creations.</span>
        </h1>

        {/* Short Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A8A0B5] leading-relaxed mb-8 sm:mb-10 font-normal">
          Electronics &amp; Communication Engineering student at{' '}
          <span className="text-[#F8FAFC] font-medium inline-flex items-center gap-1">
            <GraduationCap className="w-4 h-4 text-[#FBBF24] inline" />
            K.S. Institute of Technology, Bengaluru
          </span>
          . Passionate about crafting software and hardware that connects real people to real technology — exploring{' '}
          <span className="text-[#C084FC] font-medium">Python</span>,{' '}
          <span className="text-[#C084FC] font-medium">Web Development</span>,{' '}
          <span className="text-[#C084FC] font-medium">AI</span>,{' '}
          <span className="text-[#FBBF24] font-medium">Embedded Systems</span>, and{' '}
          <span className="text-[#C084FC] font-medium">VLSI</span> through hands-on, real-world projects.
        </p>

        {/* Two Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={() => scrollTo('journey')}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] shadow-lg shadow-[#C084FC]/20 hover:shadow-[#C084FC]/30 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
          >
            <Compass className="w-4 h-4 text-[#110D1A] group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore My Journey</span>
            <ArrowRight className="w-4 h-4 text-[#110D1A] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#F8FAFC] bg-[#1B1426] hover:bg-[#251C34] border border-[#C084FC]/30 hover:border-[#C084FC]/70 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
          >
            <FolderGit2 className="w-4 h-4 text-[#C084FC] group-hover:scale-110 transition-transform" />
            <span>View My Projects</span>
          </button>
        </div>

        {/* Tech Focus Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4 border-t border-[#322647]/50 max-w-xl w-full">
          <span className="text-xs uppercase font-mono tracking-wider text-[#A8A0B5]/80 mr-1">
            Focus Areas:
          </span>
          {domainPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <span
                key={pill.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#1B1426]/70 border ${pill.color} backdrop-blur-sm transition-all duration-200 hover:bg-[#251C34]`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{pill.label}</span>
              </span>
            );
          })}
        </div>

        {/* Quick Location & Institution Card */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#A8A0B5]/80">
          <MapPin className="w-3.5 h-3.5 text-[#FBBF24]" />
          <span>Bengaluru, Karnataka &bull; Department of ECE</span>
        </div>
      </div>
    </section>
  );
}

