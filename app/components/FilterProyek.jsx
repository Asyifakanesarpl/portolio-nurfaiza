"use client";

import { useState } from "react";
import ProyekCard from "../components/ProyekCard";

export default function FilterProyek({ proyek = [] }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  // Daftar kategori proyek
  const daftarKategori = [
    "Semua",
    "HTML",
    "CSS",
    "CodePen",
    "Responsive",
    "JavaScript",
  ];

  // Style tombol kategori
  const tombolBiasa =
    "rounded-full border border-utama dark:border-sky-200 px-4 py-2 text-sm font-semibold text-utama dark:text-sky-200 hover:bg-aksen hover:text-white transition";

  const tombolAktif =
    "rounded-full border border-aksen bg-aksen px-4 py-2 text-sm font-semibold text-white";

  // Mengubah kata pencarian menjadi huruf kecil
  const kataKecil = kata.toLowerCase();

  // Filter kategori dan pencarian
  const hasil = proyek.filter((p) => {
    const cocokKategori =
      kategori === "Semua" ||
      (p.kategori || []).some(
        (k) => k.toLowerCase() === kategori.toLowerCase()
      );

    const cocokJudul = (p.judul || "")
      .toLowerCase()
      .includes(kataKecil);

    const cocokDeskripsi = (p.deskripsi || "")
      .toLowerCase()
      .includes(kataKecil);

    const cocokKata = cocokJudul || cocokDeskripsi;

    return cocokKategori && cocokKata;
  });

  return (
    <div>
      {/* Tombol Filter Kategori */}
      <div className="mt-6 flex flex-wrap gap-3">
        {daftarKategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKategori(k)}
            className={
              kategori === k ? tombolAktif : tombolBiasa
            }
          >
            {k}
          </button>
        ))}
      </div>

      {/* Kolom Pencarian */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Cari proyek..."
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Tombol Hapus Pencarian */}
        {kata !== "" && (
          <button
            type="button"
            onClick={() => setKata("")}
            className="mt-2 text-sm font-semibold text-aksen dark:text-red-300 hover:underline"
          >
            Hapus pencarian
          </button>
        )}
      </div>

      {/* Jumlah Proyek */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Menampilkan {hasil.length} dari {proyek.length} proyek
      </p>

      {/* Daftar Kartu Proyek */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard
            key={item.slug}
            proyek={item}
          />
        ))}
      </div>

      {/* Jika Proyek Tidak Ditemukan */}
      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border border-dashed p-6 text-center text-gray-600 dark:text-gray-400">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}