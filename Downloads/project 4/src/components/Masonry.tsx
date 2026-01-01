import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-start items-start">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
              onClick={() => setSelectedImage(item.img)}
            >
              <img
                src={item.img}
                alt={`Testimonial ${item.id}`}
                className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.log('Image failed to load:', item.img);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Masonry;