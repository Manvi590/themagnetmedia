import { useState } from 'react';
import ScrollFloat from './ScrollFloat';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see noticeable engagement increases within the first 2-3 weeks. Significant lead generation typically kicks in around week 5-6 as we optimize based on real data. Full momentum usually hits by day 60-75.',
    },
    {
      question: 'Do I need to be active on social media daily?',
      answer: 'Not at all. We handle the content creation, scheduling, and posting. You\'ll spend about 30-60 minutes per week reviewing content and engaging with key comments. We make it easy to stay consistent without the daily time commitment.',
    },
    {
      question: 'What platforms do you support?',
      answer: 'We primarily focus on LinkedIn and Twitter/X as they deliver the highest ROI for B2B personal brands. We can also extend to Instagram and other platforms based on your audience and goals.',
    },
    {
      question: 'What if I already have some content or a following?',
      answer: 'Perfect! We\'ll audit what\'s working, amplify your best content, and fill the gaps. Many of our most successful clients come to us with an existing foundation that we help them scale strategically.',
    },
    {
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'We offer a 90-day initial engagement to ensure you get results. After that, you can continue month-to-month with no long-term commitment. We\'re confident you\'ll want to stay once you see the impact.',
    },
    {
      question: 'How much involvement do you need from me?',
      answer: 'Minimal but strategic. Initial onboarding takes 2-3 hours. After that, expect 30-60 minutes per week for content review and key engagement. We want you focused on your business, not on content creation.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="mb-4" textClassName="text-4xl sm:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </ScrollFloat>
          <p className="text-xl text-gray-600">
            Everything you need to know before booking your call
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
