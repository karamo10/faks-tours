import Image from 'next/image';

type DestinationHeroProps = {
  title: string;
  description: string;
  image: string;
};

export default function DestinationHero({
  title,
  description,
  image,
}: DestinationHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[320px] md:m-[20px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover md:rounded-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center md:rounded-2xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
