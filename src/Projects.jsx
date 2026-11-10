import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Cpu, 
  Bot, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Embedded & IoT', 'Software & AI', 'VLSI & Hardware'];

  const projectsData = [
    {
      id: 'iot-monitor',
      title: 'Smart IoT Environmental & Health Telemetry Node',
      category: 'Embedded & IoT',
      description: 'An ESP32-based multi-sensor device measuring ambient air quality, particulate index, temperature, and humidity with low-latency MQTT streaming to a live dashboard.',
      detailedDescription: 'Engineered an end-to-end hardware-to-cloud telemetry solution for monitoring indoor lab environments. Interfaces BME280 and MQ-135 sensors via I2C/analog pins on an ESP32 microcontroller running lightweight FreeRTOS tasks. Telemetry data is broadcast via MQTT to a local Python daemon and displayed on a reactive dashboard with real-time alerts.',
      tags: ['ESP32', 'Embedded C', 'MQTT', 'Python', 'I2C Protocols', 'Hardware'],
      achievement: 'Best Hardware Prototype • KSIT Tech Showcase',
      highlights: [
        'Implemented power-saving deep sleep intervals, reducing average idle consumption by 45%',
        'Developed calibrated curve algorithms for MQ-135 sensor readings in C',
        'Structured modular JSON payload telemetry over MQTT broker'
      ],
      icon: Cpu,
    },
    {
      id: 'ai-defect-vision',
      title: 'AI Vision-Based Surface Defect Inspection System',
      category: 'Software & AI',
      description: 'A computer vision pipeline utilizing OpenCV and Python to automatically detect anomalies, bridge solder faults, and missing SMD components on circuit boards.',
      detailedDescription: 'Developed an automated optical inspection (AOI) prototype designed to assist students and lab technicians in verifying hand-soldered PCBs. The system captures high-resolution camera feeds, applies adaptive thresholding, contour extraction, and template comparison to flag manufacturing imperfections in real time.',
      tags: ['Python', 'OpenCV', 'NumPy', 'Scikit-Learn', 'Image Processing', 'GUI'],
      achievement: 'Presented at College Technical Symposium',
      highlights: [
        'Achieved 92% accurate detection of solder bridges under controlled lighting',
        'Constructed custom image augmentation pipeline for synthetic training samples',
        'Created an intuitive Python Tkinter desktop GUI for instant batch reports'
      ],
      icon: Bot,
    },
    {
      id: 'vlsi-alu',
      title: '4-Bit Synthesizable Arithmetic Logic Unit (ALU)',
      category: 'VLSI & Hardware',
      description: 'A digital circuit design in Verilog HDL featuring 16 arithmetic and logical operations, carry-lookahead adder, and zero/overflow detection testbenches.',
      detailedDescription: 'Designed a high-throughput 4-bit ALU core from structural and behavioral register-transfer level (RTL) specifications. Verified timing characteristics, propagation delays, and gate logic using ModelSim simulation suites with comprehensive self-checking testbenches.',
      tags: ['Verilog HDL', 'RTL Design', 'ModelSim', 'Digital Logic', 'FPGA Concepts'],
      achievement: '100% Comprehensive Testbench Coverage',
      highlights: [
        'Implemented 4-bit Carry Lookahead Adder (CLA) minimizing propagation delay',
        'Built automated self-checking Verilog testbench covering all 16 opcode combinations',
        'Analyzed gate count and logic utilization for low-power silicon synthesis'
      ],
      icon: Layers,
    },
    {
      id: 'student-portal',
      title: 'Responsive Engineering Knowledge Hub & Portal',
      category: 'Software & AI',
      description: 'A modern, accessible web portal designed for engineering students to easily access VTU syllabus modules, lab manuals, interactive formula calculators, and past papers.',
      detailedDescription: 'Built with React and Tailwind CSS, this platform provides KSIT students with a streamlined, distraction-free study portal. Includes instant search, subject category tagging, and interactive formula calculators for ECE subjects like Signal Processing and Circuit Theory.',
      tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'Netlify'],
      achievement: 'Used by 150+ KSIT Batchmates',
      highlights: [
        'Blazing-fast client-side fuzzy search across 100+ course documents and notes',
        'Fully responsive dark/light friendly design compliant with WCAG accessibility',
        'Integrated interactive calculators for resistor color codes and filter cutoff frequencies'
      ],
      icon: FolderGit2,
    },
    {
      id: 'sensor-rover',
      title: 'Autonomous Multi-Sensor Obstacle Navigating Rover',
      category: 'Embedded & IoT',
      description: 'An Arduino-powered robotic vehicle that maps unknown room perimeters using ultrasonic rangefinders and adaptive trajectory planning algorithms.',
      detailedDescription: 'Constructed a dual-motor robotic platform with an ultrasonic sensor mounted on a micro-servo for 180-degree sweep detection. The firmware calculates clearance angles dynamically to negotiate obstacles without physical collision.',
      tags: ['Arduino', 'C++', 'Robotics', 'Ultrasonic Sensors', 'PWM Motor Control'],
      achievement: 'Robotics Club Showcase Project',
      highlights: [
        'Engineered 180-degree scanning servo sweep algorithm for optimal path selection',
        'Integrated PWM motor driving with smooth acceleration curves',
        'Designed modular chassis wiring and standalone Li-ion battery management'
      ],
      icon: Cpu,
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1426] border border-[#C084FC]/30 text-xs font-semibold text-[#C084FC] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Projects &amp; Prototypes
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C084FC] to-[#FBBF24] rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-sm sm:text-base text-[#A8A0B5]">
            Bridging embedded circuits, intelligent Python algorithms, and polished web interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-[#C084FC] text-[#110D1A] font-semibold shadow-md shadow-[#C084FC]/20'
                  : 'bg-[#1B1426] text-[#A8A0B5] hover:text-[#F8FAFC] border border-[#322647] hover:border-[#C084FC]/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-[#1B1426] border border-[#C084FC]/20 hover:border-[#C084FC]/50 rounded-2xl p-6 transition-all duration-300 shadow-card-subtle flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Category and Achievement */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-[#C084FC] bg-[#251C34] px-2.5 py-0.5 rounded-full border border-[#C084FC]/20">
                      {project.category}
                    </span>
                    {project.achievement && (
                      <span className="text-[11px] font-medium gold-badge px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {project.achievement.split('•')[0]}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F8FAFC] group-hover:text-[#C084FC] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A8A0B5] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#251C34] text-[#A8A0B5] border border-[#322647]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-[#322647] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C084FC] hover:text-[#D8B4FE] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="p-2 rounded-xl bg-[#251C34] hover:bg-[#322647] text-[#A8A0B5] hover:text-[#F8FAFC] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Open details for ${project.title}`}
                      className="p-2 rounded-xl bg-[#251C34] hover:bg-[#322647] text-[#A8A0B5] hover:text-[#C084FC] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep-Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

