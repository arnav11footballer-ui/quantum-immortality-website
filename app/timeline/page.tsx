export default function TimelinePage() {
  const events = [
    {
      year: "1900",
      title: "Max Planck",
      description:
        "Introduced the quantum hypothesis and founded quantum theory.",
    },

    {
      year: "1905",
      title: "Albert Einstein",
      description:
        "Explained the photoelectric effect and advanced quantum physics.",
    },

    {
      year: "1926",
      title: "Erwin Schrödinger",
      description:
        "Developed the Schrödinger equation and wave mechanics.",
    },

    {
      year: "1927",
      title: "Werner Heisenberg",
      description:
        "Formulated the uncertainty principle.",
    },

    {
      year: "1964",
      title: "John Bell",
      description:
        "Published Bell's Theorem, transforming quantum foundations.",
    },

    {
      year: "1989",
      title: "Roger Penrose",
      description:
        "Published The Emperor's New Mind and explored quantum consciousness.",
    },

    {
      year: "Present",
      title: "Quantum Consciousness Research",
      description:
        "Modern investigations into consciousness, quantum information and reality.",
    },
  ];

  return (
    <main className="page-container">
      <h1>Quantum Research Timeline</h1>

      <p>
        Major milestones in the development of
        quantum physics, consciousness studies,
        and theoretical science.
      </p>

      <div className="timeline">
        {events.map((event) => (
          <div
            key={event.year}
            className="timeline-card"
          >
            <div className="timeline-year">
              {event.year}
            </div>

            <h2>{event.title}</h2>

            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}