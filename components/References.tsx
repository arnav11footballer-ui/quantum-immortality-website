type Props = {
  items: string[];
};

export default function References({
  items,
}: Props) {
  return (
    <section className="paper-section">
      <h2>References</h2>

      <ul className="reference-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}