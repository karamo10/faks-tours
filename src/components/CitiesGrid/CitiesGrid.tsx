import { City } from "@/src/data/cities";
import Link from "next/link";
interface Props {
  cities: City[];
}

const CitiesGrid = ({ cities }: Props) => {
  return (
    <section className="cities-grid">
      {cities.map((city) => (
        <Link
          href={`/cities/${city.slug}`}
          key={city.id}
          className={`city-item ${city.area}`}
        >
          <img src={city.image} alt={city.name} />
          <div className="overlay">
            <h3>{city.name}</h3>
            <p>{city.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CitiesGrid;
