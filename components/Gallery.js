export default function Gallery() {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ];

  return (
    <section id="gallery" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-600">
            معرض الصور
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            أجواء وتجارب مميزة
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`صورة من معرض المساج ${index + 1}`}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}