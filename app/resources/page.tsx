import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="page-container">
      <h1>Research Resources</h1>

      <p>
        A curated collection of books, research papers,
        lecture notes, simulations, and scientific
        organizations related to quantum physics,
        consciousness studies, and theoretical science.
      </p>

      <div className="grid">

        <div className="card">
          <h2>Books</h2>

          <ul>
            <li>The Road to Reality — Roger Penrose</li>
            <li>Quantum Computation and Quantum Information</li>
            <li>The Emperor's New Mind</li>
            <li>Six Easy Pieces</li>
            <li>A Brief History of Time</li>
          </ul>
        </div>

        <div className="card">
          <h2>Research Papers</h2>

          <ul>
            <li>Bell's Theorem (1964)</li>
            <li>Relative State Formulation (1957)</li>
            <li>Quantum Information Theory</li>
            <li>Quantum Consciousness Research</li>
          </ul>
        </div>

        <div className="card">
          <h2>Lecture Notes</h2>

          <ul>
            <li>Quantum Mechanics</li>
            <li>Quantum Computing</li>
            <li>Consciousness Studies</li>
            <li>Quantum Field Theory</li>
          </ul>
        </div>

        <div className="card">
          <h2>Research Areas</h2>

          <ul>
            <li>Quantum Foundations</li>
            <li>Quantum Biology</li>
            <li>Quantum Computing</li>
            <li>Consciousness Research</li>
            <li>Quantum Cosmology</li>
          </ul>
        </div>

        <div className="card">
          <h2>Scientific Tools</h2>

          <ul>
            <li>Equation Library</li>
            <li>Research Timeline</li>
            <li>Publication Database</li>
            <li>Scientist Encyclopedia</li>
          </ul>
        </div>

        <div className="card">
          <h2>Quick Navigation</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link href="/articles">
              Research Articles
            </Link>

            <Link href="/scientists">
              Scientists
            </Link>

            <Link href="/publications">
              Publications
            </Link>

            <Link href="/equations">
              Equation Library
            </Link>

            <Link href="/timeline">
              Timeline
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}