import Hero from '../components/Hero/Hero';
import Tours from '../components/Tours/Tours';
import About from '../components/About/About';
import Booking from '../components/Booking/Booking';
import Testimonial from '../components/Testimonial/Testimonial';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import TourSlider from '../components/TourSlider/TourSlider';
export default function Home() {
  return (
    <div>
      <Hero />
      <TourSlider />
      <Tours />
      <About />
      <Booking />
      <Testimonial />
      <Gallery />
      <Contact />
    </div>
  );
}
