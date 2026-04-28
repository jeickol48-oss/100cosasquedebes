"use client";

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
      const combined = `${book.titulo} ${book.subtitulo} ${book.descripcion}`.toLowerCase();
      return combined.includes(normalized);
    });
  }, [books, query]);

  return (
    <section id="catalogo" className="section section-soft">
      <div className="container">
        <div className="section-header">
          <h2>Catálogo de libros</h2>
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
                <div className="cover small">{book.titulo}</div>
                {statusBadge(book.estado)}
                <h3>{book.titulo}</h3>
                <p>{book.descripcion}</p>
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
