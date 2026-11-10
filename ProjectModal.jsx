import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Cpu, Code2, Award, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0811]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#1B1426] border border-[#C084FC]/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-xl text-[#A8A0B5] hover:text-[#F8FAFC] hover:bg-[#251C34] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Achievement Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-8">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#251C34] text-[#C084FC] border border-[#C084FC]/30">
            {project.category}
          </span>
          {project.achievement && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium gold-badge flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              {project.achievement}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC] mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#A8A0B5] leading-relaxed mb-6">
          {project.detailedDescription || project.description}
        </p>

        {/* Architectural Pillars / Highlights */}
        {project.highlights && (
          <div className="mb-6 bg-[#251C34]/60 border border-[#322647] rounded-xl p-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC] mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FBBF24]" />
              Key Technical Milestones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8A0B5]">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C084FC] font-bold">&rsaquo;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A8A0B5]/80 block mb-2">
            Technologies &amp; Frameworks
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#251C34] text-[#F8FAFC] border border-[#322647]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions / Links */}
        <div className="pt-4 border-t border-[#322647] flex items-center justify-between gap-3">
          <div className="text-xs text-[#A8A0B5]">
            Built as part of ECE academic &amp; personal innovation
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8A0B5] hover:text-[#F8FAFC] hover:bg-[#251C34] transition-colors"
            >
              Close
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Explore Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

