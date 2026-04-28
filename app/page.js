import Image from "next/image";
import BookCatalog from "@/components/BookCatalog";
import { books } from "@/data/books";

function statusBadge(status) {
  if (status === "disponible") {
    return <span className="status available">Disponible</span>;
  }

  return <span className="status soon">Próximamente</span>;
}

const stats = [
  { value: "3", label: "Libros en catálogo" },
  { value: "100+", label: "Ideas accionables por libro" },
  { value: "PDF", label: "Formato simple y descargable" },
];

export default function Home() {
  const featuredBook = books[0];

  return (
    <>
      <header className="hero">
        <nav className="topbar container">
          <a className="brand" href="#">
            100 cosas que debes...
          </a>
          <div className="topbar-actions">
            <a className="btn btn-secondary" href="#catalogo">
              Ver libros
            </a>
            <a className="btn" href="#newsletter">
              Novedades
            </a>
          </div>
        </nav>

        <div className="hero-content container hero-grid">
          <div>
            <p className="eyebrow">Colección de libros digitales</p>
            <h1>Convierte tus metas en acciones concretas</h1>
            <p className="lead">
              Empieza con <strong>{featuredBook.titulo}</strong> y encuentra propuestas para crecer,
              explorar y construir una vida más intencional.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#libro-destacado">
                Explorar libro
              </a>
              <a className="btn btn-secondary" href="#catalogo">
                Ir al catálogo
              </a>
            </div>
            <div className="stats">
              {stats.map((item) => (
                <article key={item.label} className="stat-card">
                  <p className="stat-value">{item.value}</p>
                  <p className="stat-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero-reading.svg"
              alt="Ilustración de la colección 100 cosas que debes"
              width={900}
              height={620}
              priority
            />
          </div>
        </div>
      </header>

      <main>
        <section id="libro-destacado" className="section container">
          <div className="section-header-left">
            <p className="mini-title">Lanzamiento actual</p>
            <h2>Libro destacado</h2>
          </div>

          <article className="featured-card">
            <div className="featured-layout">
              <div className="book-cover-wrap large">
                <Image
                  src={featuredBook.coverImage}
                  alt={`Portada de ${featuredBook.titulo}`}
                  width={300}
                  height={450}
                  className="book-cover"
                />
              </div>
              <div>
                {statusBadge(featuredBook.estado)}
                <h3>{featuredBook.titulo}</h3>
                <p>
                  <strong>{featuredBook.subtitulo}</strong>
                </p>
                <p>{featuredBook.descripcion}</p>
                <ul className="book-meta">
                  <li>{featuredBook.categoria}</li>
                  <li>{featuredBook.paginas} páginas</li>
                  <li>{featuredBook.formato}</li>
                </ul>
                <div className="hero-actions">
                  <a className="btn" href={featuredBook.ctaUrl}>
                    {featuredBook.ctaLabel}
                  </a>
                  <a className="btn btn-secondary" href="#newsletter">
                    Quiero próximos lanzamientos
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        <BookCatalog books={books} />

        <section id="newsletter" className="section container">
          <div className="newsletter-box">
            <h2>Recibe nuevos “100 cosas que debes...” en tu correo</h2>
            <p>
              Te enviaremos lanzamientos, muestras de capítulos y promociones especiales en cuanto
              salgan.
            </p>
            <form className="newsletter-form">
              <input type="email" required placeholder="Tu correo electrónico" />
              <button className="btn" type="submit">
                Unirme
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <p>© {new Date().getFullYear()} 100 cosas que debes...</p>
          <p>Hecho para lectores que quieren pasar a la acción.</p>
        </div>
      </footer>
    </>
  );
}
