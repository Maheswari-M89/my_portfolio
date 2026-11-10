import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText, 
  CheckCircle, 
  MessageSquare, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Project Collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate friendly submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', interest: 'Project Collaboration', message: '' });
    }, 800);
  };

  const handleDownloadCV = () => {
    // Generates a clean text resume placeholder for immediate download
    const cvContent = `MAHESHWARI.M
Electronics and Communication Engineering Student
K.S. Institute of Technology, Bengaluru
Email: maheshwari.ece.ksit@gmail.com
Location: Bengaluru, Karnataka, India

AREAS OF INTEREST:
- Python & Software Development
- Embedded Systems & Microcontrollers (ESP32, Arduino)
- Web Development (React.js, Tailwind CSS)
- VLSI Design & Digital Logic (Verilog HDL)
- Edge AI & Computer Vision (OpenCV)

EDUCATION:
- B.E. in Electronics and Communication Engineering (ECE)
  K.S. Institute of Technology, Bengaluru (VTU)

NOTABLE PROJECTS:
1. Smart IoT Environmental & Health Telemetry Node (ESP32, MQTT, Python)
2. AI Vision-Based Surface Defect Inspection (OpenCV, Python)
3. 4-Bit Synthesizable Arithmetic Logic Unit (Verilog HDL)
4. Responsive Engineering Study Portal (React, Tailwind CSS)
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Maheshwari_M_Resume_Profile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1426] border border-[#C084FC]/30 text-xs font-semibold text-[#C084FC] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Let's Start a Conversation
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C084FC] to-[#FBBF24] rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-sm sm:text-base text-[#A8A0B5]">
            Whether you have a collaborative project idea, want to talk embedded tech, or simply want to connect — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1B1426] border border-[#C084FC]/20 rounded-2xl p-6 sm:p-7 shadow-card-subtle">
              <h3 className="font-display font-bold text-lg text-[#F8FAFC] mb-2 flex items-center gap-2">
                <span>Direct Contact</span>
                <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A0B5] mb-6">
                Feel free to reach out directly via email or connect through professional networks.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a 
                  href="mailto:maheshwari.ece.ksit@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#251C34]/60 border border-[#322647] hover:border-[#C084FC]/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1B1426] flex items-center justify-center text-[#C084FC] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A8A0B5]">Email</span>
                    <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] truncate block group-hover:text-[#C084FC] transition-colors">
                      maheshwari.ece.ksit@gmail.com
                    </span>
                  </div>
                </a>

                {/* Campus Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#251C34]/60 border border-[#322647]">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1426] flex items-center justify-center text-[#FBBF24]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A8A0B5]">Campus Location</span>
                    <span className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                      KSIT, Kanakapura Road, Bengaluru - 560109
                    </span>
                  </div>
                </div>

                {/* Academic Status */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#251C34]/60 border border-[#322647]">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1426] flex items-center justify-center text-[#C084FC]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A8A0B5]">Affiliation</span>
                    <span className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                      Dept. of ECE &bull; VTU Bengaluru
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume download button */}
              <div className="mt-6 pt-5 border-t border-[#322647]">
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#251C34] hover:bg-[#322647] border border-[#FBBF24]/40 hover:border-[#FBBF24] transition-all duration-200 group"
                >
                  <FileText className="w-4 h-4 text-[#FBBF24] group-hover:scale-110 transition-transform" />
                  <span>Download Resume / Profile</span>
                </button>
              </div>

              {/* Social Icons */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-[#251C34] border border-[#322647] text-[#A8A0B5] hover:text-[#C084FC] hover:border-[#C084FC]/50 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-[#251C34] border border-[#322647] text-[#A8A0B5] hover:text-[#C084FC] hover:border-[#C084FC]/50 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#1B1426] border border-[#C084FC]/20 rounded-2xl p-6 sm:p-8 shadow-card-subtle relative overflow-hidden">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#251C34] border border-[#FBBF24]/50 flex items-center justify-center text-[#FBBF24] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#F8FAFC] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#A8A0B5] max-w-md mb-6">
                  Thank you for reaching out, I've received your note and will get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F8FAFC] mb-1">
                  Send Me a Note
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A0B5] mb-4">
                  Leave a message about student collaborations, tech discussions, or project opportunities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#A8A0B5] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251C34]/70 border border-[#322647] text-sm text-[#F8FAFC] placeholder-[#A8A0B5]/40 focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#A8A0B5] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251C34]/70 border border-[#322647] text-sm text-[#F8FAFC] placeholder-[#A8A0B5]/40 focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#A8A0B5] mb-1.5">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#251C34] border border-[#322647] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all"
                  >
                    <option value="Project Collaboration">Project Collaboration / Hackathon</option>
                    <option value="Embedded Systems / IoT">Embedded Systems &amp; Hardware</option>
                    <option value="Python & AI Discussions">Python &amp; AI Modeling</option>
                    <option value="Web Development">Frontend / Web Development</option>
                    <option value="General Greeting">Just Saying Hello!</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#A8A0B5] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me a bit about what you're building or thinking..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#251C34]/70 border border-[#322647] text-sm text-[#F8FAFC] placeholder-[#A8A0B5]/40 focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] disabled:opacity-50 transition-all duration-200 shadow-md shadow-[#C084FC]/20"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

