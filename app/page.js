"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F7ED] text-slate-800 font-sans py-10 px-6">
      {/* Main Content (Tanpa Navbar & Tanpa Footer) */}
      <main className="max-w-5xl mx-auto">
        {/* Hero Section / Perkenalan */}
        <div className="flex items-center gap-6 mb-12">
          {/* Foto Profil Lingkaran */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 shrink-0 relative">
            <Image
              src="/poto.jpeg" // Sesuaikan path foto kamu di folder public
              alt="Asyifa Nurfaiza"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              Halo, saya Asyifa Nurfaiza!
            </h1>
            <p className="text-slate-600 text-sm mb-4">
              Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG.
            </p>
            <div className="flex gap-3">
              <Link
                href="/tentang"
                className="bg-[#B91C1C] hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded transition"
              >
                Tentang saya
              </Link>
              <Link
                href="/keahlian"
                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold px-4 py-2 rounded transition shadow-sm"
              >
                Lihat keahlian
              </Link>
            </div>
          </div>
        </div>

        {/* Keahlian Section */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Keahlian</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">HTML</h3>
              <p className="text-xs text-slate-500">Level: Menengah</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">CSS</h3>
              <p className="text-xs text-slate-500">Level: Menengah</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Git dan GitHub</h3>
              <p className="text-xs text-slate-500">Level: Dasar</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Desain poster dengan Canva</h3>
              <p className="text-xs text-slate-500">Level: Mahir</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">JavaScript</h3>
              <p className="text-xs text-slate-500">Level: Dasar</p>
            </div>
          </div>

          <Link
            href="/keahlian"
            className="inline-block bg-[#B91C1C] hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded transition"
          >
            Lihat semua keahlian
          </Link>
        </section>

        {/* Proyek Terbaru Section */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Proyek Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Proyek Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-900 relative">
                <Image
                  src="/image.png"
                  alt="Junior Web Developer Industry Class MODUL 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 mb-2 flex-wrap">
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">HTML</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">CSS</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">CodePen</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                    Junior Web Developer Industry Class MODUL 1
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    Portofolio pertama saya, yang dibangun dari nol sembari mempelajari dasar-dasar pengembangan frontend, struktur HTML...
                  </p>
                </div>
              </div>
            </div>

            {/* Proyek Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-900 relative">
                <Image
                  src="/picture.png"
                  alt="Mobile Responsive MODUL 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 mb-2 flex-wrap">
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">HTML</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">CSS</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">Responsive</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                    Mobile Responsive MODUL 2
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    Latihan desain web responsif yang mencakup tata letak fleksibel, titik henti (breakpoint) untuk desktop, status hover...
                  </p>
                </div>
              </div>
            </div>

            {/* Proyek Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-900 relative">
                <Image
                  src="/foto.png"
                  alt="Interactive Digital Profile MODUL 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 mb-2 flex-wrap">
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">HTML</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">CSS</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">JAVASCRIPT</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                    Interactive Digital Profile MODUL 3
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    Profil interaktif yang menggunakan peristiwa (event) JavaScript untuk pergantian tema, sapaan dinamis, dan...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/proyek"
            className="inline-block bg-[#B91C1C] hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded transition"
          >
            Lihat semua proyek
          </Link>
        </section>
      </main>
    </div>
  );
}