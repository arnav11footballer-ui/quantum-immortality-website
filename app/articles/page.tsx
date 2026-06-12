import { articles } from "../../data/articles";
import ArticleCard from "../../components/ArticleCard";

export default function ArticlesPage() {
  return (
    <main>
      <h1>Research Articles</h1>

      <div className="grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            category={article.category}
            href={`/articles/${article.slug}`}
          />
        ))}
      </div>
    </main>
  );
}