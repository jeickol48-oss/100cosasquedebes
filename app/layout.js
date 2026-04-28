import "./globals.css";

export const metadata = {
  title: "100 cosas que debes...",
  description:
    "Descubre la colección de libros en PDF 100 cosas que debes... y encuentra guías prácticas para transformar tu vida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
