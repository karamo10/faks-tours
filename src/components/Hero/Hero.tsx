'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {[
          '/images/hero/hero1.jpg',
          '/images/hero/hero2.jpg',
          '/images/hero/hero3.jpg',
          '/images/hero/hero5.jpg',
        ].map((img) => (
          <SwiperSlide key={img}>
            <Image src={img} alt="Hero" fill className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 capitalize">
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
