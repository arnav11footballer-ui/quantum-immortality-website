import Link from "next/link";
import { researchAreas } from "../../data/researchAreas";

export default function ResearchPage() {
  return (
    <main className="page-container">
      <h1>Research Areas</h1>

      <div className="grid">
        {researchAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/research/${area.slug}`}
            className="card"
          >
            <h2>{area.title}</h2>

            <p>{area.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}