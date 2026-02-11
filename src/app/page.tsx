import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import StatsSection from '../components/Stats/StatsSection';
import ExploreDestinations from '../components/ExploreDestinations/ExploreDestinations';
import Testimonial from '../components/Testimonials/Testimonials';
import TourSlider from '../components/TourSlider/TourSlider';
import Cities from '../components/Cities/Cities';
import Booking from '../components/Booking/Booking';
// import Cities from '../components/City/City';
// import CitiesGrid from '../components/Cities/CitiesGrid';
import { cities } from '../data/cities';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <StatsSection />
      <ExploreDestinations />
      <Cities />
      {/* <section className="explore-cities section">
        <div className="text-center mb-14">
          <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
            Explore Cities & Local Life
          </span>
          <h2 className="text-4xl font-bold mt-4 capitalize">Experience daily life, markets, history, and culture across The
            Gambia.</h2>
        </div>
        
        <CitiesGrid cities={cities} />
      </section>    */}
      {/* cities */}
      <Testimonial />
      <TourSlider />
    </div>
  );
}
