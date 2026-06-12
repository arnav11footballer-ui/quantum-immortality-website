type Props = {
  title: string;
  abstract: string;
  children: React.ReactNode;
};

export default function ResearchPaper({
  title,
  abstract,
  children,
}: Props) {
  return (
    <main className="paper-container">
      <h1>{title}</h1>

      <div className="paper-meta">
        Quantum Immortality Research Institute • 2026
      </div>

      <section className="paper-section">
        <h2>Abstract</h2>
        <p>{abstract}</p>
      </section>

      {children}
    </main>
  );
}