'use client';

import Image from 'next/image';
import Link from 'next/link';


const destinations = [
  {
    name: 'Kachikally Crocodile Pool',
    slug: 'kachikally-crocodile-pool',
    description: 'Sacred crocodile pool rich in Gambian culture and history.',
    image: '/images/destinations/kathically.jpeg',
  },
  {
    name: 'Roots - James-Island / Juffureh',
    slug: 'roots',
    description: 'Historic island symbolizing freedom and resilience.',
    image: '/images/destinations/roots.jpg',
  }
  ,
  {
    name: 'Makasutu Culture Forest',
    slug: 'makasutu-cultural-forest',
    description: 'Lush forest reserve with diverse wildlife and cultural experiences.',
    image: '/images/destinations/makasutu.jpg',
  },
  {
    name: 'Fathala Wildlife Reserve',
    slug: 'fathala-wildlife-reserve',
    description: 'Home to reptiles showcasing West African wildlife.',
    image: '/images/destinations/fathala.jpg',
  },
  {
    name: 'Abuko Nature Reserve',
    slug: 'abuko-nature-reserve',
    description: 'Protected forest reserve with diverse flora and fauna.',
    image: '/images/destinations/abuko.jpg',
  },
  {
    name: 'River Gambia',
    slug: 'river-gambia',
    description: 'The lifeline of the nation with breathtaking river views.',
    image: '/images/destinations/river-gambia.jpg',
  },
  {
    name: 'The Gambia Reptile Farm',
    slug: 'reptile-farm',
    description: 'Home to reptiles showcasing West African wildlife.',
    image: '/images/destinations/reptile-farm.jpg',
  }
];

const destination = destinations.slice(0, 6);

export default function ExploreDestinations() {
  return (
    <section className="py-20 px-6 section">
      <div className=" mb-14">
        <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
          Destinations
        </span>
        <h2 className="text-4xl font-bold mt-4">Explore Top Destinations</h2>
      </div>
      {/* <h2 className="text-3xl font-bold mb-10">Explore Top Destinations</h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destination.map((place) => (
          <Link
            href={`/destinations/${place.slug}`}
            key={place.name}
            className="group relative h-[380px] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay opacity-0 group-hover:opacity-100 transition-opacity duration-400 */}
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-sm leading-relaxed">{place.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
