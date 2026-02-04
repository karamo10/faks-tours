export default function Testimonial() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p>"The best guide in Kololi – Marcin & Iwona"</p>
            <span className="block mt-2 font-semibold">– Marcin & Iwona</span>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p>"Faks guided us perfectly. Highly recommend!"</p>
            <span className="block mt-2 font-semibold">– Jo</span>
          </div>
          {/* Add more testimonials */}
          <div className="bg-gray-100 p-6 rounded shadow">
            <p>"The best guide in Kololi – Marcin & Iwona"</p>
            <span className="block mt-2 font-semibold">– Marcin & Iwona</span>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p>"Faks guided us perfectly. Highly recommend!"</p>
            <span className="block mt-2 font-semibold">– Jo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
