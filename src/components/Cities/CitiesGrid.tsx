import { City } from '@/src/types/cities';
import Link from 'next/link';
import Image from 'next/image';

export default function CityGrid({ cities }: { cities: City[] }) {
  return (
    <section className="grid grid-cols-4 gap-8">
      {cities.map((c) => (
        <Link
          href={`/experience/${c.slug}`}
          className={`group relative min-h-[380px] city-item ${c.area} rounded-xl overflow-hidden`}
        >
          <Image
            src={c.image}
            alt={c.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 flex items-end rounded-xl">
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{c.name}</h3>
              <p className="text-sm leading-relaxed">{c.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
