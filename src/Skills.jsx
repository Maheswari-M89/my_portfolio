import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Globe, 
  Terminal, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  Boxes,
  Binary
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'code', label: 'Languages & Core' },
    { id: 'web', label: 'Web Development' },
    { id: 'embedded', label: 'Embedded & Hardware' },
    { id: 'vlsi-ai', label: 'VLSI & AI Tools' },
  ];

  const skillGroups = [
    {
      id: 'code',
      category: 'Languages & Core',
      icon: Terminal,
      description: 'Foundational programming, data structures, and system scripting.',
      skills: [
        { name: 'Python', level: 'Advanced', highlight: 'Primary language for algorithms & automation', isGold: true },
        { name: 'C / C++', level: 'Proficient', highlight: 'Microcontroller programming & memory awareness' },
        { name: 'JavaScript (ES6+)', level: 'Proficient', highlight: 'Modern asynchronous web logic' },
        { name: 'Data Structures & Algorithms', level: 'Intermediate', highlight: 'Problem solving & logic optimization' },
      ],
    },
    {
      id: 'web',
      category: 'Web Development',
      icon: Globe,
      description: 'Designing elegant, accessible, and responsive client experiences.',
      skills: [
        { name: 'React.js', level: 'Proficient', highlight: 'Hooks, component lifecycles, and state management', isGold: false },
        { name: 'Tailwind CSS', level: 'Advanced', highlight: 'Custom dark themes, responsive layouts, UI craft', isGold: true },
        { name: 'HTML5 & CSS3', level: 'Advanced', highlight: 'Semantic markup, flexbox/grid, animations' },
        { name: 'REST APIs & Fetch', level: 'Proficient', highlight: 'JSON parsing and async integration' },
      ],
    },
    {
      id: 'embedded',
      category: 'Embedded Systems & IoT',
      icon: Cpu,
      description: 'Interfacing physical sensors, actuators, and communication buses.',
      skills: [
        { name: 'Arduino & ESP32', level: 'Advanced', highlight: 'Sensor calibration, PWM, Wi-Fi IoT telemetry', isGold: true },
        { name: 'Communication Protocols', level: 'Proficient', highlight: 'UART, I2C, SPI serial communication' },
        { name: 'Sensor Integration', level: 'Advanced', highlight: 'Ultrasonic, DHT, IR, Gas, Accelerometers' },
        { name: 'Embedded C Firmware', level: 'Proficient', highlight: 'Hardware timers, interrupts, and registers' },
      ],
    },
    {
      id: 'vlsi-ai',
      category: 'VLSI & Emerging Tech',
      icon: Layers,
      description: 'Digital logic synthesis, Verilog design, and AI/ML experiments.',
      skills: [
        { name: 'Verilog HDL & RTL', level: 'Intermediate', highlight: 'Combinational & sequential circuit modeling', isGold: true },
        { name: 'Digital Logic & IC Design', level: 'Proficient', highlight: 'Boolean algebra, ALU architecture, flip-flops' },
        { name: 'Computer Vision (OpenCV)', level: 'Intermediate', highlight: 'Edge detection, contours, camera streaming' },
        { name: 'Git & GitHub Workflow', level: 'Proficient', highlight: 'Version control, branching, open-source' },
      ],
    },
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1426] border border-[#C084FC]/30 text-xs font-semibold text-[#C084FC] mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C084FC] to-[#FBBF24] rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-sm sm:text-base text-[#A8A0B5]">
            A balance of low-level hardware fluency and modern software stack expertise.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#C084FC] text-[#110D1A] font-semibold shadow-md shadow-[#C084FC]/20'
                  : 'bg-[#1B1426] text-[#A8A0B5] hover:text-[#F8FAFC] border border-[#322647] hover:border-[#C084FC]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="bg-[#1B1426] border border-[#C084FC]/20 hover:border-[#C084FC]/40 rounded-2xl p-6 transition-all duration-300 shadow-card-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#251C34] border border-[#C084FC]/30 flex items-center justify-center text-[#C084FC]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#F8FAFC]">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[#A8A0B5]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List in this group */}
                  <div className="mt-5 space-y-3.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#251C34]/60 border border-[#322647] hover:border-[#C084FC]/40 rounded-xl p-3.5 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-sm text-[#F8FAFC] flex items-center gap-1.5">
                            {skill.name}
                            {skill.isGold && (
                              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-mono gold-badge">
                                <Sparkles className="w-2.5 h-2.5" /> High Affinity
                              </span>
                            )}
                          </span>
                          <span className="text-[11px] font-mono text-[#C084FC] font-medium bg-[#1B1426] px-2 py-0.5 rounded-md border border-[#C084FC]/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#A8A0B5] leading-relaxed">
                          {skill.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Curiosity callout */}
        <div className="mt-10 p-4 rounded-xl bg-[#1B1426]/70 border border-[#FBBF24]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#251C34] flex items-center justify-center text-[#FBBF24] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                Currently Exploring: RISC-V Architecture &amp; TinyML
              </p>
              <p className="text-xs text-[#A8A0B5]">
                Experimenting with deploying lightweight neural models onto low-power microcontrollers.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium gold-badge shrink-0">
            Self-Directed R&amp;D
          </span>
        </div>
      </div>
    </section>
  );
}

