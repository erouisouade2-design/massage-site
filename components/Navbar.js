"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          مساجك
        </a>

        {/* Menu */}
        <div className="hidden gap-8 md:flex">
          <a href="#home" className="transition hover:text-yellow-400">
            الرئيسية
          </a>

          <a href="#services" className="transition hover:text-yellow-400">
            خدماتنا
          </a>

          <a href="#massage" className="transition hover:text-yellow-400">
            أنواع المساج
          </a>

          <a href="#gallery" className="transition hover:text-yellow-400">
            معرض الصور
          </a>

          <a href="#contact" className="transition hover:text-yellow-400">
            احجز الآن
          </a>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/966502862306"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-600 px-5 py-2 font-semibold transition hover:bg-green-700"
        >
          واتساب
        </a>

      </div>
    </nav>
  );
}