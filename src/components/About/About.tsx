import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/faks.jpg"
          alt="Faks Jarju"
          className="w-full md:w-1/3 rounded shadow"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">About Faks Jarju</h2>
          <p className="text-gray-700 mb-4">
            I am an official licensed tourist guide with over 20 years of
            experience. I guide groups from all over the world and specialize in
            personalized trips around Gambia, Senegal, and Guinea Bissau.
          </p>
          <p className="text-gray-700 font-semibold">
            Your satisfaction is my pride.
          </p>
        </div>
      </div>
    </section>
  );
}
