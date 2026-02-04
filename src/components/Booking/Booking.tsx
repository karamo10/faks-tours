export default function Booking() {
  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Trip</h2>
        <form className="bg-white p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border px-4 py-2 rounded"
          />
          <select className="w-full border px-4 py-2 rounded">
            <option>Fathala Safari Park</option>
            <option>Makasutu Forest</option>
            <option>River Excursion</option>
            <option>Senegal Trip</option>
          </select>
          <input type="date" className="w-full border px-4 py-2 rounded" />
          <input
            type="number"
            placeholder="Number of People"
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
