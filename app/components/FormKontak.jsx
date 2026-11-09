"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");

  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    // Validasi Nama
    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }

    // Validasi Email
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@email.com.";
    }

    // Validasi Nomor HP
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }

    // Validasi Keperluan
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    // Validasi Pesan
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      {/* Input Nama */}
      <div>
        <label htmlFor="nama" className="block font-semibold text-gray-800 dark:text-gray-100">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />
        {error.nama && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>
        )}
      </div>

      {/* Input Email */}
      <div>
        <label htmlFor="email" className="block font-semibold text-gray-800 dark:text-gray-100">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com"
          className={kelasInput}
        />
        {error.email && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>
        )}
      </div>

      {/* Input Nomor HP */}
      <div>
        <label htmlFor="hp" className="block font-semibold text-gray-800 dark:text-gray-100">
          Nomor HP
        </label>
        <input
          type="text"
          id="hp"
          name="hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="081234567890"
          className={kelasInput}
        />
        {error.hp && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.hp}</p>
        )}
      </div>

      {/* Select Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block font-semibold text-gray-800 dark:text-gray-100">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.keperluan}</p>
        )}
      </div>

      {/* Textarea Pesan */}
      <div>
        <label htmlFor="pesan" className="block font-semibold text-gray-800 dark:text-gray-100">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows="4"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan Anda di sini..."
          className={kelasInput}
        ></textarea>
        {error.pesan && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.pesan}</p>
        )}
      </div>

      {/* Tombol Submit */}
      <button
        type="submit"
        className="rounded-lg bg-aksen px-6 py-2 font-semibold text-white hover:opacity-90"
      >
        Kirim Pesan
      </button>

      {/* Pesan Berhasil */}
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}