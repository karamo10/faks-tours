'use client';

import Image from 'next/image';

const tours = [
  {
    name: 'Makasutu Cultural Forest',
    image: '/images/galleries/makasutu/1.jpg',
  },
  {
    name: 'River Gambia',
    image: '/images/galleries/river-gambia/1.jpg',
  },
  {
    name: 'Fathala Wildlife Reserve',
    image: '/images/galleries/fathala/1.jpg',
  },
  {
    name: 'Roots (James Island / Jufureh)',
    image: '/images/galleries/roots/1.jpg',
  },
];

export default function TourSlider() {
  return (
    <section className="py-1 overflow-hidden overflow-x-auto custom-scrollbar bg-red-00">

      <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused] px-6 auto-s">
        {tours.concat(tours).map((tour, i) => (
          <div
            key={i}
            className="group relative min-w-[300px] h-[380px] md:min-w-[420px] rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <div className="flex justify-between items-center w-full text-white">
                <h3 className="text-sm font-semibold">{tour.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
