import Link from "next/link";
import { papers } from "../../data/papers";

export default function PublicationsPage() {
  return (
    <main className="page-container">
      <h1>Research Publications</h1>

      <p>
        Scientific papers and foundational works
        in quantum physics, consciousness studies,
        and theoretical science.
      </p>

      <div className="grid">
        {papers.map((paper) => (
          <Link
            key={paper.slug}
            href={`/publications/${paper.slug}`}
            className="card"
          >
            <h2>{paper.title}</h2>

            <p>
              <strong>Author:</strong> {paper.author}
            </p>

            <p>
              <strong>Year:</strong> {paper.year}
            </p>

            <p>
              <strong>Category:</strong> {paper.category}
            </p>

            <p>{paper.abstract}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}