import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-5xl rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#1B1426]/90 backdrop-blur-xl border-[#C084FC]/25 shadow-xl shadow-black/40'
            : 'bg-[#1B1426]/60 backdrop-blur-md border-[#C084FC]/15'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#251C34] border border-[#C084FC]/30 group-hover:border-[#C084FC] transition-colors duration-200">
            <span className="font-display font-bold text-base text-[#C084FC] group-hover:scale-105 transition-transform duration-200">
              M
            </span>
            {/* Soft gold accent dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FBBF24] ring-2 ring-[#1B1426]" />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-semibold text-[#F8FAFC] tracking-tight text-sm sm:text-base group-hover:text-[#C084FC] transition-colors">
              Maheshwari<span className="text-[#FBBF24]">.M</span>
            </span>
            <span className="text-[10px] text-[#A8A0B5] font-mono tracking-wider uppercase -mt-0.5">
              ECE Student
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#F8FAFC] bg-[#251C34] shadow-sm'
                    : 'text-[#A8A0B5] hover:text-[#F8FAFC] hover:bg-[#251C34]/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#C084FC]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] shadow-sm hover:shadow-[#C084FC]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl text-[#A8A0B5] hover:text-[#F8FAFC] hover:bg-[#251C34] focus:outline-none focus:ring-2 focus:ring-[#C084FC]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#C084FC]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[74px] left-4 right-4 bg-[#1B1426]/95 backdrop-blur-2xl border border-[#C084FC]/25 rounded-2xl p-4 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#251C34] text-[#C084FC] font-semibold'
                    : 'text-[#A8A0B5] hover:text-[#F8FAFC] hover:bg-[#251C34]/50'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />}
              </a>
            );
          })}
          
          <div className="pt-2 mt-2 border-t border-[#322647]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-[#110D1A] bg-[#C084FC] hover:bg-[#D8B4FE] transition-colors"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

