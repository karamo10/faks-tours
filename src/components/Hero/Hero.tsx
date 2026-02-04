import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/gambia.jpg"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Real Gambia with Faks Jarju
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Official Licensed Tourist Guide
        </p>
        <div className="flex gap-4">
          <a
            href="#booking"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold"
          >
            Book a Trip
          </a>
          <a
            href="#contact"
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
