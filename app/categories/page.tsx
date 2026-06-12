import Link from "next/link";

export default function Categories() {
  return (
    <main>
      <h1>Research Categories</h1>

      <div className="grid">
        <Link href="/quantum-physics" className="card">
          <h3>Quantum Physics</h3>
          <p>Fundamental laws governing matter and energy.</p>
        </Link>

        <Link href="/consciousness" className="card">
          <h3>Consciousness</h3>
          <p>Scientific and philosophical study of awareness.</p>
        </Link>

        <Link href="/quasiparticles" className="card">
          <h3>Quasiparticles</h3>
          <p>Emergent particle-like excitations in matter.</p>
        </Link>

        <Link href="/quantum-immortality" className="card">
          <h3>Quantum Immortality</h3>
          <p>Thought experiments derived from Many Worlds.</p>
        </Link>

        <Link href="/scientists" className="card">
          <h3>Scientists</h3>
          <p>Key researchers and contributors.</p>
        </Link>

        <Link href="/timeline" className="card">
          <h3>Timeline</h3>
          <p>Major events in quantum research history.</p>
        </Link>
      </div>
    </main>
  );
}