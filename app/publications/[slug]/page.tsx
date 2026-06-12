import { notFound } from "next/navigation";
import { papers } from "../../../data/papers";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PublicationPage({
  params,
}: Props) {
  const { slug } = await params;

  const paper = papers.find(
    (paper) => paper.slug === slug
  );

  if (!paper) {
    notFound();
  }

  return (
    <main className="page-container">
      <h1>{paper.title}</h1>

      <div className="card">
        <p>
          <strong>Author:</strong> {paper.author}
        </p>

        <p>
          <strong>Year:</strong> {paper.year}
        </p>

        <p>
          <strong>Category:</strong> {paper.category}
        </p>
      </div>

      <div className="card">
        <h2>Abstract</h2>
        <p>{paper.abstract}</p>
      </div>

      <div className="card">
        <h2>Research Overview</h2>
        <p>{paper.content}</p>
      </div>
    </main>
  );
}