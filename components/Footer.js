export default function Footer() {
  return (
    <footer className="bg-black px-6 py-8 text-center text-white">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-3 text-2xl font-bold">
          مساجك
        </h2>

        <p className="mb-5 text-gray-400">
          تجربة استرخاء وراحة أينما كنت.
        </p>

        <a
          href="https://wa.me/966590385488"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 transition hover:text-green-300"
        >
          تواصل معنا عبر واتساب
        </a>

        <div className="mt-6 border-t border-gray-800 pt-5 text-sm text-gray-500">
          © 2026 مساجك - جميع الحقوق محفوظة
        </div>

      </div>
    </footer>
  );
}