"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "../../data/articles";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const search = query.toLowerCase();

    return (
      article.title.toLowerCase().includes(search) ||
      article.abstract.toLowerCase().includes(search) ||
      article.category.toLowerCase().includes(search) ||
      article.author.toLowerCase().includes(search) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      )
    );
  });

  return (
    <main className="page-container">
      <h1>Research Search</h1>

      <p>
        Search through quantum physics,
        consciousness studies, quantum
        immortality, quasiparticles,
        quantum computing, and advanced
        scientific research topics.
      </p>

      <input
        type="text"
        placeholder="Search research topics..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <div className="grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="card"
            >
              <h3>{article.title}</h3>

              <p>{article.abstract}</p>

              <p
                style={{
                  color: "#7dd3fc",
                  marginTop: "10px",
                }}
              >
                {article.category}
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  marginTop: "5px",
                }}
              >
                {article.author}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "15px",
                }}
              >
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <div className="card">
            <h3>No Results Found</h3>

            <p>
              Try searching for:
            </p>

            <ul
              style={{
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            >
              <li>Quantum Entanglement</li>
              <li>Many Worlds</li>
              <li>Quantum Biology</li>
              <li>Consciousness</li>
              <li>Quantum Computing</li>
              <li>Quantum Immortality</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}