export default function Tours() {
  return (
    <section id="tours" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tours & Experiences
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Tour Card */}
          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <img
              src="/images/fathala-safari.jpg"
              alt="Fathala Safari"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fathala Safari Park</h3>
            <p className="text-gray-600 mb-4">
              See Lions, White Rhino, Buffalo, Giraffe, Zebra, WaterBuck.
            </p>
            <a
              href="#booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Book Now
            </a>
          </div>
          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <img
              src="/images/makasutu.jpg"
              alt="Makasutu"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Makasutu Forest</h3>
            <p className="text-gray-600 mb-4">
              Cultural entertainment, Forest doctor, Nature exploration,
              Complementary drinks.
            </p>
            <a
              href="#booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Book Now
            </a>
          </div>
          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <img
              src="/images/river-excursion.jpg"
              alt="River Excursion"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">River Excursion</h3>
            <p className="text-gray-600 mb-4">
              Fishing trips, Dolphins sighting, Boat trips, Lazy day.
            </p>
            <a
              href="#booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
