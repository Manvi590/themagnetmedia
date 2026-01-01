"use client";
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImage from '../Assests/image.png';

// Animation variants for menu items
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="BrandFlow Logo" 
                className="h-12 w-auto object-contain"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('hero')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                Home
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('hero')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                Home
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                Services
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                Services
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('process')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                Process
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('process')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                Process
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('results')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                Results
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('results')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                Results
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                FAQs
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                FAQs
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: "radial-gradient(circle, rgba(191,27,44,0.15) 0%, rgba(191,27,44,0.06) 50%, rgba(10,61,98,0) 100%)",
                  opacity: 0,
                }}
              />
              <motion.button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium relative z-10 px-4 py-2 rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom"
                }}
              >
                Contact
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-[#bf1b2c] transition-colors font-medium absolute inset-0 z-10 px-4 py-2 rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)"
                }}
              >
                Contact
              </motion.button>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <motion.div
              className="relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                variants={glowVariants}
                style={{
                  // removed colored glow for Book a Call to prevent background color showing on hover
                  background: 'transparent',
                  opacity: 0,
                }}
              />
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group bg-[#bf1b2c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#981219] transition-all hover:shadow-lg hover:-translate-y-0.5 relative z-10 overflow-hidden"
              >
                <span className="inline-block translate-x-1 transition-all duration-200 group-hover:translate-x-8 group-hover:opacity-0">
                  Book a Call
                </span>
                <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
                  <span>Book a Call</span>
                  <ArrowRight className="text-white" size={16} />
                </div>
              </motion.button>
            </motion.div>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              Process
            </button>
            <button onClick={() => scrollToSection('results')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              Results
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              FAQs
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#bf1b2c] font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#bf1b2c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#981219] transition-all"
            >
              Book a Call
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
