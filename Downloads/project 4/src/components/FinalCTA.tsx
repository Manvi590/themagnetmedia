import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-black/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#bf1b2c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#bf1b2c] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#bf1b2c] rounded-2xl mb-8">
          <Calendar size={40} />
        </div>

        <SectionHeading tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Transform Your Personal Brand?
        </SectionHeading>

        <p className="text-xl sm:text-2xl text-gray-100 mb-12 leading-relaxed">
          Book a free 30-minute strategy call and discover exactly how we'll grow your authority, reach, and client pipeline in the next 90 days.
        </p>

        <button
          onClick={scrollToContact}
          className="group bg-[#bf1b2c] text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-[#981219] transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3 mb-8"
        >
          Book Your Free Strategy Call
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#bf1b2c]" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#bf1b2c]" />
            <span>Free strategy session</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#bf1b2c]" />
            <span>Custom growth plan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
