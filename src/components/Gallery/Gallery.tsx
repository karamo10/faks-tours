export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/images/gallery4.jpeg"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src="/images/gallery3.jpeg"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src="/images/gallery2.jpeg"
            className="w-full h-48 object-cover rounded"
          />
          {/* More images */}
        </div>
      </div>
    </section>
  );
}
