import "./globals.css";

export const metadata = {
  title: "مساجك | مساج احترافي",
  description: "خدمات مساج احترافية في المنزل أو الفندق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}