import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Research Areas</h3>

      <ul>
        <li>
          <Link href="/quantum-physics">Quantum Physics</Link>
        </li>

        <li>
          <Link href="/consciousness">Consciousness</Link>
        </li>

        <li>
          <Link href="/quantum-immortality">Quantum Immortality</Link>
        </li>

        <li>
          <Link href="/quasiparticles">Quasiparticles</Link>
        </li>

        <li>
          <Link href="/articles">Research Articles</Link>
        </li>

        <li>
          <Link href="/articles/quantum-entanglement">
            Quantum Entanglement
          </Link>
        </li>

        <li>
          <Link href="/articles/many-worlds">
            Many Worlds
          </Link>
        </li>

        <li>
          <Link href="/articles/decoherence">
            Decoherence
          </Link>
        </li>

        <li>
          <Link href="/articles/wave-function">
            Wave Function
          </Link>
        </li>

        <li>
          <Link href="/articles/quantum-computing">
            Quantum Computing
          </Link>
        </li>
      </ul>
    </aside>
  );
}
<li>
  <Link href="/articles/quantum-information">
    Quantum Information
  </Link>
</li>