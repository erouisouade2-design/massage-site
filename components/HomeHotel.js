export default function HomeHotel() {
  const options = [
    {
      title: "مساج في المنزل",
      image: "/images/home-hotel/home-massage.jpg",
      description:
        "استمتع بجلسة مساج مريحة في منزلك، بكل راحة وخصوصية.",
    },
    {
      title: "مساج في الفندق",
      image: "/images/home-hotel/hotel-massage.jpg",
      description:
        "نصل إليك في الفندق لتستمتع بتجربة مساج احترافية ومريحة.",
    },
  ];

  return (
    <section className="bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-600">
            أين نقدم خدماتنا؟
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            راحتك أينما كنت
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <img
                src={option.image}
                alt={option.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {option.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}