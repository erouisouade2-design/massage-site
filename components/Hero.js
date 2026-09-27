export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="mb-4 text-lg text-yellow-400">
          تجربة استرخاء فاخرة
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          مساج احترافي للرجال
          <br />
          في منزلك أو فندقك
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-200">
          استمتع بجلسة مساج مريحة واحترافية في أجواء هادئة
          وخصوصية تامة.
        </p>

        <a
          href="https://wa.me/966590385488"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
        >
          احجز عبر واتساب
        </a>
      </div>
    </section>
  );
}