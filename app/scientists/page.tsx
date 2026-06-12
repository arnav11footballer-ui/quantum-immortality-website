import ScientistCard from "../../components/ScientistCard";
import { scientists } from "../../data/scientists";

export default function ScientistsPage() {
  return (
    <main className="page-container">
      <h1>Scientists & Researchers</h1>

      <p>
        Explore the pioneering scientists who
        shaped quantum physics, consciousness
        studies, mathematics, information theory,
        and modern theoretical science.
      </p>

      <section className="featured-banner">
        <h2>Scientific Legacy</h2>

        <p>
          The development of quantum mechanics
          has involved some of the greatest
          scientific minds in history.
        </p>
      </section>

      <h2>Featured Scientists</h2>

      <div className="scientist-grid">
        {scientists.map((scientist) => (
          <ScientistCard
            key={scientist.slug}
            slug={scientist.slug}
            name={scientist.name}
            field={scientist.field}
            description={scientist.description}
            image={scientist.image}
          />
        ))}
      </div>

      <section className="featured-banner">
        <h2>Research Areas</h2>

        <div className="grid">
          <div className="card">
            <h3>Quantum Mechanics</h3>

            <p>
              Foundations of modern quantum
              theory, superposition and
              measurement.
            </p>
          </div>

          <div className="card">
            <h3>Quantum Information</h3>

            <p>
              Entanglement, communication,
              cryptography and computation.
            </p>
          </div>

          <div className="card">
            <h3>Consciousness Studies</h3>

            <p>
              Scientific research into
              awareness, cognition and
              neural processing.
            </p>
          </div>

          <div className="card">
            <h3>Quantum Biology</h3>

            <p>
              Quantum effects within
              biological systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}