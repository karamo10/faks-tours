import Image from "next/image";

export default function FathalaPage() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Fathala Safari Park
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Image src="/images/fathala.jpg" alt="" width={400} height={300} />
        <Image src="/images/fathala.jpg" alt="" width={400} height={300} />
        <Image src="/images/fathala.jpg" alt="" width={400} height={300} />
      </div>

      <p className="text-gray-700 leading-relaxed">
        Fathala Wildlife Reserve is home to lions, white rhinos,
        giraffes, zebras, and more. A true African safari experience.
      </p>
    </section>
  );
}
