import { Zap, Video, FileText, Users, Target, Settings, BarChart3, TrendingUp } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import InteractiveCard from './InteractiveCard';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Complete Content System',
      description: 'We build your entire content fulfillment system with automated posting and performance tracking.',
    },
    {
      icon: Video,
      title: 'Short-Form Content (Existing)',
      description: '30 short-form videos taken from your existing pieces of content - no scripting, no filming or extra work on your end',
    },
    {
      icon: FileText,
      title: 'Short-Form Content (Scripted)',
      description: '20-30 short-form videos scripted for you - no extra work on your end.',
    },
    {
      icon: Users,
      title: 'Long-form Content',
      description: '2 long-form videos delivered',
    },
    {
      icon: Target,
      title: 'Strategic Content Consulting',
      description: 'Bi-weekly strategy calls to optimize your content for maximum client attraction',
    },
    {
      icon: Settings,
      title: 'Brand Positioning Mastery',
      description: 'Complete brand overhaul to make you stand out as a category of one',
    },
    {
      icon: BarChart3,
      title: 'Full-Service Team Management',
      description: 'Dedicated team handling ideation, scripting, editing, and optimization',
    },
    {
      icon: TrendingUp,
      title: 'Data Analysis & Trends',
      description: 'Systematic testing and doubling down on viral formats that convert',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="mb-4" textClassName="text-4xl sm:text-5xl font-bold text-gray-900">
            What You Get
          </ScrollFloat>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a powerful personal brand that attracts consistent, high-quality clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <InteractiveCard
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              glowColor={'191,27,44'}
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bf1b2c] transition-colors relative z-10">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                {benefit.description}
              </p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
