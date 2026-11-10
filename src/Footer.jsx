import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0811] border-t border-[#322647] py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Mini Bio */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-display font-bold text-lg text-[#F8FAFC]">
              Maheshwari<span className="text-[#FBBF24]">.M</span>
            </span>
            <span className="text-xs font-mono text-[#C084FC] bg-[#1B1426] px-2 py-0.5 rounded-md border border-[#C084FC]/25">
              ECE &bull; KSIT
            </span>
          </div>
          <p className="text-xs text-[#A8A0B5] max-w-sm">
            Bridging electronic circuits, Python intelligence, and human-centered web experiences.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#A8A0B5]">
          <a href="#about" className="hover:text-[#F8FAFC] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#F8FAFC] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#F8FAFC] transition-colors">Skills</a>
          <a href="#journey" className="hover:text-[#F8FAFC] transition-colors">Campus Journey</a>
          <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1B1426] border border-[#C084FC]/30 text-xs font-medium text-[#A8A0B5] hover:text-[#F8FAFC] hover:border-[#C084FC] hover:bg-[#251C34] transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C084FC]" />
          </button>
        </div>
      </div>

      {/* Bottom Copyright and Location */}
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#1B1426] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A8A0B5]/70 gap-2">
        <p>
          &copy; {new Date().getFullYear()} Maheshwari.M. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Crafted with curiosity in <span className="text-[#FBBF24]">Bengaluru</span>, Karnataka
        </p>
      </div>
    </footer>
  );
}

