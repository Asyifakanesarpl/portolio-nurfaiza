"use client";

import { useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  function gantiTema() {
    const temaBaru = !gelap;

    setGelap(temaBaru);

    if (temaBaru) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg border border-white px-3 py-2 text-sm font-semibold text-white hover:bg-red-800 transition"
    >
      {gelap ? "Mode Terang ☀️" : "Mode Gelap 🌙"}
    </button>
  );
}