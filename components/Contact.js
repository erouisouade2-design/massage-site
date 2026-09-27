export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
          احجز الآن
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          جاهز للاسترخاء؟
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-300">
          تواصل معنا عبر واتساب واحجز موعدك بسهولة.
        </p>

        <a
          href="https://wa.me/966590385488"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
        >
          احجز عبر واتساب
        </a>

      </div>
    </section>
  );
}