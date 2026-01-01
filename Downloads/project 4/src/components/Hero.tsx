import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from './AuroraBackground';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground>
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-relaxed">
            Grow Your Personal Brand &
            <span className="text-[#bf1b2c]"> Consistent Clients</span> in 90 Days
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Without guessing what to post, spending hours editing, or chasing leads manually.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <motion.button
              onClick={scrollToContact}
              className="group bg-[#bf1b2c] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#981219] transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
            >
              <span className="inline-block relative z-20 translate-x-1 transition-all duration-200 group-hover:translate-x-8 group-hover:opacity-0">
                Book a Free Call
              </span>
              <div className="absolute inset-0 z-30 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
                <span className="text-white">Book a Free Call</span>
                <ArrowRight className="text-white" size={16} />
              </div>
            </motion.button>

            <motion.button
              onClick={() => window.open('https://youtu.be/gUKuF9awyOw', '_blank')}
              className="group bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg border-2 border-black hover:bg-black hover:text-white transition-all relative overflow-hidden"
            >
              <span className="inline-block relative z-20 translate-x-1 transition-all duration-200 group-hover:translate-x-6 group-hover:opacity-0">
                Watch Video
              </span>
              <div className="absolute inset-0 z-30 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
                <span className="text-white">Watch Video</span>
                <ArrowRight className="text-white" size={16} />
              </div>
            </motion.button>
          </div>

          <div className="mt-10 flex w-fit mx-auto items-center gap-6">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://www.shadcnblocks.com/images/block/avatar-1.webp" alt="a" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://www.shadcnblocks.com/images/block/avatar-2.webp" alt="b" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://www.shadcnblocks.com/images/block/avatar-3.webp" alt="c" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://www.shadcnblocks.com/images/block/avatar-4.webp" alt="d" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://www.shadcnblocks.com/images/block/avatar-5.webp" alt="e" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">from 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
