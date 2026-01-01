import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">BrandFlow</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping professionals build powerful personal brands that attract consistent, high-quality clients.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#bf1b2c] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#bf1b2c] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#bf1b2c] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-[#bf1b2c] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                    className="hover:text-[#bf1b2c] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-[#bf1b2c] transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('results')}
                  className="hover:text-[#bf1b2c] transition-colors"
                >
                  Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#bf1b2c] transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#bf1b2c] flex-shrink-0 mt-1" />
                <a href="mailto:hello@brandflow.com" className="hover:text-[#bf1b2c] transition-colors">
                  hello@brandflow.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#bf1b2c] flex-shrink-0 mt-1" />
                <a href="tel:+1234567890" className="hover:text-[#bf1b2c] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#bf1b2c] flex-shrink-0 mt-1" />
                <span>123 Brand Street, Marketing City, MC 12345</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Book a Call</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Ready to transform your personal brand? Schedule a free strategy call today.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group bg-[#bf1b2c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#981219] transition-all hover:shadow-lg w-full relative overflow-hidden"
            >
              <span className="inline-block relative z-20 translate-x-1 transition-all duration-200 group-hover:translate-x-8 group-hover:opacity-0">
                Schedule Now
              </span>
              <div className="absolute inset-0 z-30 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
                <span className="text-white">Schedule Now</span>
                <ArrowRight className="text-white" size={16} />
              </div>
            </motion.button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 BrandFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#bf1b2c] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#bf1b2c] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#bf1b2c] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
