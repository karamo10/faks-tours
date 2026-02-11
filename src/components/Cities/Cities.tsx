import CityGrid from './CitiesGrid';
import { cities } from '@/src/data/cities';

export default function Cities() {
  return (
    <section className="py-20 px-6 section">
      <div className="mb-14">
        <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
          Authentic Cultural Experiences
        </span>
        <h2 className="text-4xl font-bold mt-4 capitalize">Explore Gambian city, coastal towns, food, and markets through real local experiences.</h2>
      </div>
      <CityGrid cities={cities} />
    </section>
  );
}
