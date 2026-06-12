import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>

      <p>Research page not found.</p>

      <Link href="/">Return Home</Link>
    </main>
  );
}