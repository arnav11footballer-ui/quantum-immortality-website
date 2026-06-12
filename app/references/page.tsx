import { references } from "../../data/references";

export default function ReferencesPage() {
  return (
    <main className="page-container">
      <h1>Research References</h1>

      <p>
        Books, papers, and scientific works used
        throughout the Quantum Immortality Research
        Institute.
      </p>

      <div className="grid">
        {references.map((reference) => (
          <div
            key={reference.title}
            className="card"
          >
            <h2>{reference.title}</h2>

            <p>
              <strong>Author:</strong>{" "}
              {reference.author}
            </p>

            <p>
              <strong>Year:</strong>{" "}
              {reference.year}
            </p>

            <p>
              <strong>Type:</strong>{" "}
              {reference.type}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}