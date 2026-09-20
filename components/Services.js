export default function Services() {
  const services = [
    {
      name: "المساج السويدي",
      image: "/images/services/swedish.jpg",
      description: "مساج مريح يساعد على الاسترخاء وتخفيف التوتر.",
    },
    {
      name: "المساج التايلندي",
      image: "/images/services/thai.jpg",
      description: "تقنيات تقليدية تساعد على تحسين المرونة والاسترخاء.",
    },
    {
      name: "المساج الاسترخائي",
      image: "/images/services/relaxing.jpg",
      description: "جلسة هادئة ومريحة للتخلص من ضغط اليوم.",
    },
    {
      name: "مساج الحجارة الساخنة",
      image: "/images/services/hot-stone.jpg",
      description: "تجربة دافئة تجمع بين الاسترخاء وتقنيات المساج.",
    },
    {
      name: "الحجامة",
      image: "/images/services/cupping.jpg",
      description: "خدمة متخصصة تُقدّم وفق إجراءات مناسبة وآمنة.",
    },
    {
      name: "الحمام المغربي",
      image: "/images/services/moroccan-bath.jpg",
      description: "جلسة عناية واسترخاء مستوحاة من الحمام المغربي التقليدي.",
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-600">
            خدماتنا
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            خدمات المساج والعناية
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            اختر الخدمة المناسبة لك واستمتع بتجربة مريحة واحترافية.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="overflow-hidden rounded-2xl bg-gray-50 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.name}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}