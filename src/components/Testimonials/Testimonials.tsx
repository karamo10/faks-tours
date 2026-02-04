'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/src/data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const totalSlides = testimonials.length;

  // Detect screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto slide
  useEffect(() => {
    const maxIndex = totalSlides - visibleCards;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards, totalSlides]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mt-4">What Travelers Say</h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 items-stretch transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} style={{ minWidth: `${100 / visibleCards}%` }}>
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({
            length: totalSlides - visibleCards + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? 'bg-orange-500' : 'border border-orange-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
