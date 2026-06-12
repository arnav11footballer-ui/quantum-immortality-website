import { notFound } from "next/navigation";
import Image from "next/image";
import { scientists } from "../../../../data/scientists";

type Props = {
  params: {
    slug: string;
  };
};

export default function ScientistPage({ params }: Props) {
  const scientist = scientists.find(
    (s) => s.slug === params.slug
  );

  if (!scientist) {
    notFound();
  }

  return (
    <main className="paper-container">
      <Image
        src={scientist.image}
        alt={scientist.name}
        width={1200}
        height={600}
        className="article-cover"
      />

      <h1>{scientist.name}</h1>

      <div className="paper-meta">
        <strong>Field:</strong> {scientist.field}
      </div>

      <section className="paper-section">
        <h2>Biography</h2>

        <p>
          {scientist.biography || scientist.description}
        </p>
      </section>

      <section className="paper-section">
        <h2>Life</h2>

        <p>
          <strong>Born:</strong> {scientist.born}
        </p>

        {scientist.died && (
          <p>
            <strong>Died:</strong> {scientist.died}
          </p>
        )}
      </section>

      <section className="paper-section">
        <h2>Major Contributions</h2>

        <ul>
          {scientist.contributions?.map(
            (contribution) => (
              <li key={contribution}>
                {contribution}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="paper-section">
        <h2>Scientific Impact</h2>

        <p>
          {scientist.name} played an important role
          in the development of modern science and
          continues to influence research in physics,
          mathematics, cosmology, information theory,
          and consciousness studies.
        </p>
      </section>

      <section className="paper-section">
        <h2>Related Research Areas</h2>

        <ul>
          <li>Quantum Physics</li>
          <li>Quantum Information</li>
          <li>Consciousness Studies</li>
          <li>Quantum Computing</li>
          <li>Theoretical Physics</li>
        </ul>
      </section>
    </main>
  );
}