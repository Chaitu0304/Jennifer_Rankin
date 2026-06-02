import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? 'bg-[#F9F6F1]/80 backdrop-blur-lg border-[#1E1E1C]/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className={`font-serif text-2xl tracking-wide ${isScrolled ? 'text-[#1E1E1C]' : 'text-[#F9F6F1]'}`}>
              Jennifer Rankin
            </span>
            <span className={`font-sans text-xs tracking-widest uppercase ${isScrolled ? 'text-[#7A9E82]' : 'text-[#F9F6F1]/80'}`}>
              LMFT
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-[#1E1E1C]/70 hover:text-[#7A9E82]'
                    : 'text-[#F9F6F1]/80 hover:text-[#F9F6F1]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`font-sans text-sm tracking-wide px-6 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#1E1E1C] text-[#F9F6F1] hover:bg-[#7A9E82]'
                  : 'bg-[#F9F6F1] text-[#1E1E1C] hover:bg-[#7A9E82] hover:text-[#F9F6F1]'
              }`}
            >
              Book a Consultation
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-[#1E1E1C]' : 'text-[#F9F6F1]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F9F6F1] border-t border-[#1E1E1C]/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 font-sans text-[#1E1E1C] border-b border-[#1E1E1C]/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center mt-6 bg-[#1E1E1C] text-[#F9F6F1] px-6 py-4 rounded-lg font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
