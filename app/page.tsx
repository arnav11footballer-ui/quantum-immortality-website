import Link from "next/link";

import Sidebar from "../components/sidebar";
import StatCard from "../components/StatCard";

import { stats } from "../data/stats";
import { scientists } from "../data/scientists";

export default function HomePage() {
  return (
    <main className="home-layout">
      <Sidebar />

      <div className="content">

        {/* HERO */}

        <section className="hero">
          <div className="hero-badge">
            Quantum Immortality Research Institute
          </div>

          <h1>
            Advancing Research in Quantum Physics,
            Consciousness, Information Theory,
            and Fundamental Reality
          </h1>

          <p>
            A multidisciplinary scientific platform
            dedicated to quantum mechanics,
            consciousness studies, quantum biology,
            quantum computing, cosmology, and the
            deepest questions concerning reality.
          </p>

          <div className="hero-actions">
            <Link href="/articles">
              <button className="hero-button">
                Explore Research
              </button>
            </Link>

            <Link href="/scientists">
              <button className="secondary-button">
                Scientists
              </button>
            </Link>
          </div>
        </section>
{/* CURRENT RESEARCH PROGRAMS */}

<section>
  <h2 className="section-title">
    Current Research Programs
  </h2>

  <div className="grid">

    <div className="card">
      <h3>Quantum Consciousness</h3>

      <p>
        Investigating possible relationships
        between quantum information processing,
        neural computation and conscious experience.
      </p>
    </div>

    <div className="card">
      <h3>Quantum Biology</h3>

      <p>
        Exploring quantum effects in
        photosynthesis, avian navigation,
        olfaction and biological systems.
      </p>
    </div>

    <div className="card">
      <h3>Quantum Computing</h3>

      <p>
        Research on quantum algorithms,
        qubits, fault tolerance, error
        correction and future computing systems.
      </p>
    </div>

    <div className="card">
      <h3>Many Worlds Research</h3>

      <p>
        Studying branching universes,
        decoherence, observer continuity
        and quantum immortality.
      </p>
    </div>

    <div className="card">
      <h3>Quantum Gravity</h3>

      <p>
        Attempts to unify quantum mechanics
        and general relativity into a single
        framework of fundamental physics.
      </p>
    </div>

    <div className="card">
      <h3>Information-Theoretic Reality</h3>

      <p>
        Exploring whether information
        forms the fundamental substrate
        of physical reality.
      </p>
    </div>

  </div>
</section>

        {/* INSTITUTE METRICS */}

        <section>
          <h2 className="section-title">
            Institute Metrics
          </h2>

          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>
        </section>

        {/* RESEARCH AREAS */}

        <section>
          <h2 className="section-title">
            Core Research Areas
          </h2>

          <div className="grid">

            <Link href="/research/quantum-physics" className="card">
              <h3>Quantum Physics</h3>
              <p>
                Foundations of quantum mechanics,
                entanglement, uncertainty, and reality.
              </p>
            </Link>

            <Link href="/research/consciousness" className="card">
              <h3>Consciousness Studies</h3>
              <p>
                Scientific investigation of awareness,
                cognition and subjective experience.
              </p>
            </Link>

            <Link href="/research/quantum-immortality" className="card">
              <h3>Quantum Immortality</h3>
              <p>
                Observer continuity and Many Worlds
                Interpretation research.
              </p>
            </Link>

            <Link href="/research/quasiparticles" className="card">
              <h3>Quasiparticles</h3>
              <p>
                Anyons, magnons, excitons and
                emergent quantum phenomena.
              </p>
            </Link>

          </div>
        </section>

        {/* FEATURED SCIENTISTS */}

        <section>
          <h2 className="section-title">
            Featured Scientists
          </h2>

          <div className="scientist-grid">

            {scientists.slice(0, 4).map((scientist) => (
              <Link
                key={scientist.slug}
                href={`/scientists/${scientist.slug}`}
                className="scientist-card"
              >
                <div className="scientist-content">
                  <h3>{scientist.name}</h3>

                  <p>
                    <strong>Field:</strong>{" "}
                    {scientist.field}
                  </p>

                  <p>{scientist.description}</p>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* FEATURED PUBLICATIONS */}

        <section>
          <h2 className="section-title">
            Featured Publications
          </h2>

          <div className="grid">

            <Link
              href="/publications/bell-theorem"
              className="card"
            >
              <h3>Bell's Theorem</h3>

              <p>
                Foundations of quantum
                nonlocality and entanglement.
              </p>
            </Link>

            <Link
              href="/publications/many-worlds"
              className="card"
            >
              <h3>Many Worlds Interpretation</h3>

              <p>
                Everett's revolutionary
                interpretation of quantum mechanics.
              </p>
            </Link>

            <Link
              href="/publications/emperors-new-mind"
              className="card"
            >
              <h3>The Emperor's New Mind</h3>

              <p>
                Consciousness, computation
                and quantum theory.
              </p>
            </Link>

          </div>
        </section>

        {/* OPEN PROBLEMS */}

        <section>
          <h2 className="section-title">
            Open Research Problems
          </h2>

          <div className="grid">

            <div className="card">
              <h3>Measurement Problem</h3>
              <p>
                Why do quantum measurements
                appear to collapse wave functions?
              </p>
            </div>

            <div className="card">
              <h3>Hard Problem of Consciousness</h3>
              <p>
                How does subjective experience
                arise from physical systems?
              </p>
            </div>

            <div className="card">
              <h3>Quantum Gravity</h3>
              <p>
                Unifying general relativity
                and quantum mechanics.
              </p>
            </div>

          </div>
        </section>

        {/* RESEARCH PORTAL */}

        <section>
          <h2 className="section-title">
            Research Portal
          </h2>

          <div className="grid">

            <Link href="/articles" className="card">
              <h3>Articles</h3>
              <p>Scientific articles and theories.</p>
            </Link>

            <Link href="/scientists" className="card">
              <h3>Scientists</h3>
              <p>Profiles of leading researchers.</p>
            </Link>

            <Link href="/research" className="card">
              <h3>Research Areas</h3>
              <p>All disciplines covered by the institute.</p>
            </Link>

            <Link href="/publications" className="card">
              <h3>Publications</h3>
              <p>Scientific papers and research works.</p>
            </Link>

            <Link href="/books" className="card">
              <h3>Research Library</h3>
              <p>Books on quantum physics and consciousness.</p>
            </Link>

            <Link href="/timeline" className="card">
              <h3>Timeline</h3>
              <p>Historical development of quantum theory.</p>
            </Link>

            <Link href="/resources" className="card">
              <h3>Resources</h3>
              <p>Books, papers, notes and tools.</p>
            </Link>

            <Link href="/open-problems" className="card">
              <h3>Open Problems</h3>
              <p>Major unsolved scientific questions.</p>
            </Link>

            <Link href="/equations" className="card">
              <h3>Equation Library</h3>
              <p>Important equations in modern physics.</p>
            </Link>

            <Link href="/references" className="card">
              <h3>References</h3>
              <p>Academic books, journals and sources.</p>
            </Link>

          </div>
        </section>

        {/* RESEARCH INITIATIVE */}

        <section className="featured-banner">
          <h2>
            Quantum Consciousness Initiative
          </h2>

          <p>
            An interdisciplinary program examining
            quantum information processing, neural
            systems, consciousness, and observer-
            dependent phenomena.
          </p>
        </section>

      </div>
    </main>
  );
}