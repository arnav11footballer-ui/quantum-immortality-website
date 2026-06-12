"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="hero-button"
    >
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}