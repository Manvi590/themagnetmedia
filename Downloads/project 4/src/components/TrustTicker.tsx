import { Users, TrendingUp, Target } from 'lucide-react';
import CountUp from './CountUp';

export default function TrustTicker() {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Users size={32} className="text-[#bf1b2c]" />
            <div className="text-4xl font-bold"><CountUp to={500} className="inline-block" />+</div>
            <div className="text-gray-300 text-lg">Clients Onboarded</div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <TrendingUp size={32} className="text-[#bf1b2c]" />
            <div className="text-4xl font-bold"><CountUp to={287} className="inline-block" />%</div>
            <div className="text-gray-300 text-lg">Avg Growth Rate</div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Target size={32} className="text-[#bf1b2c]" />
            <div className="text-4xl font-bold"><CountUp to={94} className="inline-block" />%</div>
            <div className="text-gray-300 text-lg">Conversion Success</div>
          </div>
        </div>
      </div>
    </section>
  );
}
