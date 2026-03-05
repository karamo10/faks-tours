import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white section">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Blob */}
        <div className="relative flex justify-center">
          {/* Blob background */}
          <div className="absolute w-[300px] h-[360px] md:w-[360px] bg-orange-100 rounded-full -top-6 -left-6"></div>
          <div className="absolute w-[245px] h-[300px] md:w-[300px] bg-orange-200 rounded-full top-10 left-10"></div>

          {/* Image */}
          <div className="relative w-[280px] h-[380px] rounded-[140px] overflow-hidden shadow-xl">
            <img
              src="/images/faks.jpg"
              alt="Faks Jarju"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
            About
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
            Your Local Guide
            <br />
            In The Gambia
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I’m Faks Jarju, an officially licensed tourist guide with over
            <strong> 20 years of experience</strong> guiding travelers across
            The Gambia, Senegal, and Guinea-Bissau.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I focus on authentic local experiences - culture, wildlife, history,
            and everyday life always tailored to your interests.
          </p>

          <div className="flex justify-start flex-col space-y-4">
            <div className="flex items-center gap-3 text-orange-500 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Kololi</span>
            </div>
            <div className="flex items-center gap-3 text-orange-500 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <span>+220 982 5108</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
