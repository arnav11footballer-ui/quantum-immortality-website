import ResearchPaper from "../../../components/ResearchPaper";

export default function QuantumEntanglementPage() {
  return (
    <ResearchPaper
      title="Quantum Entanglement"
      abstract="Quantum entanglement is a fundamental phenomenon where particles become correlated beyond classical expectations."
    >
      <section className="paper-section">
        <h2>Introduction</h2>

        <p>
          Quantum entanglement is one of the most
          remarkable predictions of quantum theory.
        </p>
      </section>

      <section className="paper-section">
        <h2>Applications</h2>

        <p>
          Quantum computing, cryptography,
          teleportation, and networking.
        </p>
      </section>

      <section className="paper-section">
        <h2>Future Research</h2>

        <p>
          Scientists continue to investigate
          long-distance quantum correlations.
        </p>
      </section>
    </ResearchPaper>
  );
}