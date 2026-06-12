import { notFound } from "next/navigation";
import { researchAreas } from "../../../data/researchAreas";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ResearchAreaPage({
  params,
}: Props) {
  const { slug } = await params;

  const area = researchAreas.find(
    (a) => a.slug === slug
  );

  if (!area) {
    notFound();
  }

  return (
    <main className="page-container">
      <h1>{area.title}</h1>

      <div className="card">
        <p>{area.description}</p>
      </div>
    </main>
  );
}