import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep plum gradient base overlay */}
      <div className="absolute inset-0 bg-[#110D1A]" />

      {/* Gentle ambient plum/violet glows */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[130px] opacity-25"
        style={{ background: 'radial-gradient(circle, #7E22CE 0%, #3B0764 70%, transparent 100%)' }}
      />
      
      <div 
        className="absolute top-[35%] -right-[10%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full blur-[140px] opacity-20"
        style={{ background: 'radial-gradient(circle, #A855F7 0%, #2E1065 70%, transparent 100%)' }}
      />

      <div 
        className="absolute top-[65%] -left-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[140px] opacity-15"
        style={{ background: 'radial-gradient(circle, #9333EA 0%, #1E0E3E 75%, transparent 100%)' }}
      />

      {/* Soft warm gold subtle glow near bottom/achievements */}
      <div 
        className="absolute bottom-[5%] right-[15%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[160px] opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #FBBF24 0%, #78350F 60%, transparent 100%)' }}
      />

      {/* Subtle organic floating shapes */}
      <div className="absolute top-[18%] left-[8%] w-64 h-64 border border-[#C084FC]/10 rounded-full animate-float-slow opacity-30" />
      <div className="absolute top-[48%] right-[12%] w-48 h-48 border border-[#FBBF24]/10 rounded-full animate-float-delayed opacity-25" />
      <div className="absolute bottom-[20%] left-[20%] w-80 h-80 border border-[#C084FC]/5 rounded-full animate-float-slow opacity-20" />

      {/* Delicate stardust highlights */}
      <div className="absolute top-[12%] right-[28%] w-1.5 h-1.5 rounded-full bg-[#FBBF24]/40 animate-pulse" />
      <div className="absolute top-[38%] left-[22%] w-1 h-1 rounded-full bg-[#C084FC]/50 animate-pulse" />
      <div className="absolute top-[70%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#FBBF24]/30 animate-pulse" />
      <div className="absolute top-[85%] left-[15%] w-1 h-1 rounded-full bg-[#C084FC]/40 animate-pulse" />
    </div>
  );
}

