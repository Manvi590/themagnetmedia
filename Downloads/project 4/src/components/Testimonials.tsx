import ScrollFloat from './ScrollFloat';
import CountUp from './CountUp';
import Masonry from './Masonry';

export default function Testimonials() {

  // Testimonial images for masonry layout
  const testimonialImages = [
    {
      id: '1',
      img: '/testimonials/image.png',
      url: '#',
      height: 200,
    },
    {
      id: '2',
      img: '/testimonials/image%20copy.png',
      url: '#',
      height: 180,
    },
    {
      id: '3',
      img: '/testimonials/image%20copy%202.png',
      url: '#',
      height: 220,
    },
    {
      id: '4',
      img: '/testimonials/image%20copy%203.png',
      url: '#',
      height: 190,
    },
    {
      id: '5',
      img: '/testimonials/image%20copy%204.png',
      url: '#',
      height: 210,
    },
    {
      id: '6',
      img: '/testimonials/image%20copy%205.png',
      url: '#',
      height: 185,
    },
    {
      id: '7',
      img: '/testimonials/image%20copy%206.png',
      url: '#',
      height: 205,
    },
    {
      id: '8',
      img: '/testimonials/image%20copy%207.png',
      url: '#',
      height: 195,
    },
  ];

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="mb-4" textClassName="text-4xl sm:text-5xl font-bold text-gray-900">
            Real Results from Real Clients
          </ScrollFloat>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of professionals who transformed their personal brand and income
          </p>
        </div>

        <div className="mb-20">
          <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-auto">
            <Masonry
              items={testimonialImages}
              animateFrom="random"
              stagger={0.05}
              scaleOnHover={true}
              hoverScale={1.01}
              blurToFocus={false}
              colorShiftOnHover={false}
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-black/10 to-[#bf1b2c]/10 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:justify-center gap-6 sm:gap-12">
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-5xl font-bold text-[#bf1b2c] mb-1 sm:mb-2"><CountUp to={4.9} duration={1.4} className="inline-block" />/5</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Average Rating</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-300" aria-hidden />

            <div className="text-center flex-1">
              <div className="text-3xl sm:text-5xl font-bold text-[#bf1b2c] mb-1 sm:mb-2"><CountUp to={500} duration={1.6} className="inline-block" />+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Happy Clients</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-300" aria-hidden />

            <div className="text-center flex-1">
              <div className="text-3xl sm:text-5xl font-bold text-[#bf1b2c] mb-1 sm:mb-2"><CountUp to={98} duration={1.6} className="inline-block" />%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
