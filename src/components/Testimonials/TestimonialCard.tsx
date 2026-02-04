import Image from 'next/image';
import { Testimonial } from '@/src/data/testimonials';

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm border h-full flex flex-col">
      
      {/* Quote icon */}
      <span className="absolute top-6 right-6 text-orange-200 text-6xl font-serif">
        “
      </span>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Message */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {testimonial.message}
      </p>

      {/* Google rating */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Google</span>
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-orange-500">★</span>
          ))}
        </div>
      </div>

    </div>
  );
}
