import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  BookMarked,
  Microchip,
  Cpu
} from 'lucide-react';

export default function CampusJourney() {
  const milestones = [
    {
      year: 'Year 1 • Genesis',
      title: 'Foundational Physics, Circuits & First Python Scripts',
      role: 'First Year ECE Student',
      institution: 'K.S. Institute of Technology, Bengaluru',
      description: 'Discovered the physics behind semiconductor devices and electrical networks. Simultaneously picked up Python to automate calculations and explore basic data handling.',
      goldHighlight: 'Distinction in Basic Electronics & Circuit Analysis',
      takeaways: [
        'Mastered breadboard circuit analysis & oscilloscope measurement',
        'Built simple terminal-based calculation tools in Python',
        'Developed keen interest in digital logic and truth tables'
      ],
    },
    {
      year: 'Year 2 • Deepening',
      title: 'Microcontroller Prototyping & Web Development Discovery',
      role: 'Core Explorer',
      institution: 'K.S. Institute of Technology, Bengaluru',
      description: 'Shifted from theory to tangible prototypes. Programmed Arduino microcontrollers, interfaced various analog and digital sensors, and started building modern web interfaces with JavaScript and Tailwind CSS.',
      goldHighlight: 'Best Embedded Mini-Project Entry in Semester Expo',
      takeaways: [
        'Interfaced I2C, SPI, and UART sensor arrays with microcontrollers',
        'Developed responsive student-friendly web dashboards',
        'Participated in campus 24-hour hackathon build sprints'
      ],
    },
    {
      year: 'Year 3 • Synthesis',
      title: 'IoT Telemetry, VLSI Digital Architecture & Edge AI',
      role: 'Junior Engineer & Innovator',
      institution: 'K.S. Institute of Technology, Bengaluru',
      description: 'Bridging silicon design with high-level software. Writing synthesizable Verilog for arithmetic logic units while deploying ESP32 MQTT nodes and OpenCV computer vision scripts.',
      goldHighlight: 'Active ECE Technical Club & Lab Peer Mentor',
      takeaways: [
        'Designed synthesizable 4-bit ALU with comprehensive Verilog testbenches',
        'Constructed end-to-end IoT environmental telemetry system',
        'Assisted junior batchmates in microcontroller programming basics'
      ],
    },
    {
      year: 'Year 4 • Forward',
      title: 'Real-World Capstone & Industry Readiness',
      role: 'Graduating Engineer',
      institution: 'K.S. Institute of Technology, Bengaluru',
      description: 'Consolidating knowledge across embedded systems, VLSI logic, and full-stack software development into robust capstone projects and looking forward to impactful engineering challenges.',
      goldHighlight: 'Final Year Capstone Development in Progress',
      takeaways: [
        'Aiming to publish project research in engineering symposiums',
        'Refining production-ready code in Python and React',
        'Ready to contribute to innovative tech teams'
      ],
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1426] border border-[#C084FC]/30 text-xs font-semibold text-[#C084FC] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Path</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            My Campus Journey at KSIT
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C084FC] to-[#FBBF24] rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-sm sm:text-base text-[#A8A0B5]">
            Milestones, hands-on lab breakthroughs, and personal growth in Bengaluru's Silicon Hub.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#322647] space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker with soft gold/violet accent */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#110D1A] border-2 border-[#C084FC] group-hover:border-[#FBBF24] group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] group-hover:bg-[#FBBF24] transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-[#1B1426] border border-[#C084FC]/20 hover:border-[#C084FC]/40 rounded-2xl p-6 sm:p-7 shadow-card-subtle transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-[#C084FC] bg-[#251C34] px-3 py-1 rounded-full border border-[#C084FC]/25">
                    {item.year}
                  </span>

                  {item.goldHighlight && (
                    <span className="text-[11px] font-medium gold-badge px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#FBBF24]" />
                      <span>{item.goldHighlight}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F8FAFC] mb-1">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#A8A0B5] mb-3">
                  <span className="font-medium text-[#F8FAFC]/90">{item.role}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-[#C084FC]">
                    <MapPin className="w-3 h-3" />
                    {item.institution}
                  </span>
                </div>

                <p className="text-sm text-[#A8A0B5] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Takeaways */}
                <div className="pt-3 border-t border-[#322647] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {item.takeaways.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

