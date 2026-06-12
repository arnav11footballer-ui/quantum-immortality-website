import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  href: string;
}

export default function ArticleCard({
  title,
  category,
  href,
}: ArticleCardProps) {
  return (
    <Link href={href} className="card">
      <h3>{title}</h3>
      <p>{category}</p>
    </Link>
  );
}