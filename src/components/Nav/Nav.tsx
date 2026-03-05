import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-end pr-5 md:pr-18 py-7 
      ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
      >
        {/* <Image
          src={'/images/faks.jpg'}
          alt="logo"
          width={100}
          height={100}
          className="object-cover w-10 h-10 rounded-full shadow"
        /> */}
        <div className="flex gap-4">
          <Link
            href="/booking"
            className="text-white font-semibold border border-white px-3 py-1 rounded hover:border-orange-500 transition-colors duration-300 shadow-lg"
          >
            Book a Trip
          </Link>
          <Link
            href="/contact"
            className="text-white font-semibold border border-white px-3 py-1 rounded hover:border-orange-500 transition-colors duration-300 shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
