import { books } from "../../data/books";

export default function BooksPage() {
  return (
    <main className="page-container">
      <h1>Research Library</h1>

      <p>
        Essential books covering quantum physics,
        consciousness studies, quantum computing,
        cosmology, and theoretical science.
      </p>

      <div className="grid">
        {books.map((book) => (
          <div
            key={book.slug}
            className="card"
          >
            <h2>{book.title}</h2>

            <p>
              <strong>Author:</strong>{" "}
              {book.author}
            </p>

            <p>
              <strong>Year:</strong>{" "}
              {book.year}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {book.category}
            </p>

            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}