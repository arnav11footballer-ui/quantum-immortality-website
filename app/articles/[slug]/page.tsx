import { notFound } from "next/navigation";
import { articles } from "../../../data/articles";

type Props = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: Props) {
  const article = articles.find(
    (a) => a.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="paper-container">
      <h1>{article.title}</h1>

      <section className="paper-section">
        <h2>Abstract</h2>
        <p>{article.abstract}</p>
      </section>

      <section className="paper-section">
        <h2>Introduction</h2>
        <p>{article.introduction}</p>
      </section>

      <section className="paper-section">
        <h2>Applications</h2>
        <p>{article.applications}</p>
      </section>

      <section className="paper-section">
        <h2>Future Research</h2>
        <p>{article.future}</p>
      </section>

      <section className="paper-section">
        <h2>Keywords</h2>

        <div>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
    );
}