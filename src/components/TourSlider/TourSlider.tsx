"use client";

import Link from "next/link";
import Image from "next/image";

const tours = [
  {
    name: "Fathala Safari Park",
    slug: "fathala-safari-park",
    image: "/images/fathala/fathala.jpg",
  },
  {
    name: "Makasutu Forest",
    slug: "makasutu-forest",
    image: "/images/makasutu/makasutu4.jpg",
  },
  {
    name: "River Excursion",
    slug: "river-excursion",
    image: "/images/river/river.jpg",
  },
];

export default function TourSlider() {
  return (
    <section className="py-8 overflow-hidden bg-red-200">
      <h2 className="text-3xl font-bold mb-6 px-6">
        Tours & Experiences
      </h2>

      <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused] px-6">
        {tours.concat(tours).map((tour, i) => (
          <Link
            key={i}
            href={`/tours/${tour.slug}`}
            className="group relative min-w-[420px] h-[420px] rounded-xl overflow-hidden bg-red-100"
          >
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <div className="flex justify-between items-center w-full text-white">
                <h3 className="text-xl font-semibold">
                  {tour.name}
                </h3>
                <span className="text-2xl transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
