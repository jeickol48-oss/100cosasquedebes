import BookCatalog from "@/components/BookCatalog";
import { books } from "@/data/books";

function statusBadge(status) {
  if (status === "disponible") {
    return <span className="status available">Disponible</span>;
  }

  return <span className="status soon">Próximamente</span>;
}

export default function Home() {
  const featuredBook = books[0];

  return (
    <>
      <header className="hero">
        <nav className="topbar container">
          <a className="brand" href="#">
            100 cosas que debes...
          </a>
          <a className="btn btn-secondary" href="#catalogo">
            Ver libros
          </a>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">Colección de libros digitales</p>
          <h1>Libros PDF que te inspiran a pasar a la acción</h1>
          <p>
            Empieza con el primer título de la saga: <strong>{featuredBook.titulo}</strong>.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#libro-destacado">
              Explorar libro
            </a>
            <a className="btn btn-secondary" href="#newsletter">
              Quiero novedades
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="libro-destacado" className="section container">
          <h2>Libro destacado</h2>
          <article className="featured-card">
            <div className="featured-layout">
              <div className="cover">{featuredBook.titulo}</div>
              <div>
                {statusBadge(featuredBook.estado)}
                <h3>{featuredBook.titulo}</h3>
                <p>
                  <strong>{featuredBook.subtitulo}</strong>
                </p>
                <p>{featuredBook.descripcion}</p>
                <a className="btn" href={featuredBook.ctaUrl}>
                  {featuredBook.ctaLabel}
                </a>
              </div>
            </div>
          </article>
        </section>

        <BookCatalog books={books} />

        <section id="newsletter" className="section container">
          <h2>Únete para recibir nuevos lanzamientos</h2>
          <p>
            Cada vez que publiquemos un nuevo “100 cosas que debes...”, te avisamos por correo.
          </p>
          <form className="newsletter-form">
            <input type="email" required placeholder="Tu correo electrónico" />
            <button className="btn" type="submit">
              Unirme
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} 100 cosas que debes... Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
