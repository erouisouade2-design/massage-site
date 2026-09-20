export default function MassageTypes() {
  const massages = [
    {
      name: "المساج السويدي",
      description: "حركات ناعمة ومتدرجة تساعد على الاسترخاء.",
    },
    {
      name: "المساج التايلندي",
      description: "تقنيات تقليدية تجمع بين الضغط والحركات المرنة.",
    },
    {
      name: "المساج الاسترخائي",
      description: "جلسة هادئة تساعدك على التخلص من ضغط اليوم.",
    },
    {
      name: "مساج الحجارة الساخنة",
      description: "استخدام الحجارة الدافئة ضمن تجربة استرخاء مريحة.",
    },
    {
      name: "الحجامة",
      description: "خدمة متخصصة تُقدّم وفق إجراءات مناسبة وآمنة.",
    },
    {
      name: "الحمام المغربي",
      description: "تجربة عناية واسترخاء مستوحاة من التقاليد المغربية.",
    },
  ];

  return (
    <section
      id="massage"
      className="bg-gray-900 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            أنواع المساج
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            اختر تجربتك
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {massages.map((massage) => (
            <div
              key={massage.name}
              className="rounded-2xl border border-gray-700 bg-gray-800 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400"
            >
              <h3 className="mb-3 text-xl font-bold text-yellow-400">
                {massage.name}
              </h3>

              <p className="leading-7 text-gray-300">
                {massage.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}