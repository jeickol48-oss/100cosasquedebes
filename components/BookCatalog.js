"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function statusBadge(status) {
  if (status === "disponible") {
    return <span className="status available">Disponible</span>;
  }

  return <span className="status soon">Próximamente</span>;
}

export default function BookCatalog({ books }) {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return books;

    return books.filter((book) => {
      const combined = `${book.titulo} ${book.subtitulo} ${book.descripcion} ${book.categoria}`.toLowerCase();
      return combined.includes(normalized);
    });
  }, [books, query]);

  return (
    <section id="catalogo" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="mini-title">Biblioteca digital</p>
            <h2>Catálogo de libros</h2>
          </div>
          <label className="search">
            <span>Buscar</span>
            <input
              id="bookSearch"
              type="search"
              placeholder="Ej: sol@, pareja, productividad"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="grid">
          {filteredBooks.length ? (
            filteredBooks.map((book) => (
              <article key={book.slug} className="book-card">
                <div className="book-cover-wrap">
                  <Image
                    src={book.coverImage}
                    alt={`Portada de ${book.titulo}`}
                    width={240}
                    height={360}
                    className="book-cover"
                  />
                </div>
                {statusBadge(book.estado)}
                <h3>{book.titulo}</h3>
                <p>{book.descripcion}</p>
                <ul className="book-meta">
                  <li>{book.categoria}</li>
                  <li>{book.paginas} páginas</li>
                  <li>{book.formato}</li>
                </ul>
                <a className="btn btn-secondary" href={book.ctaUrl}>
                  {book.ctaLabel}
                </a>
              </article>
            ))
          ) : (
            <p>No encontramos libros con esa búsqueda.</p>
          )}
        </div>
      </div>
    </section>
  );
}
