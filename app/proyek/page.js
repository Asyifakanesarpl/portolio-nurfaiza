import FilterProyek from "../components/FilterProyek";
import { proyek } from "../data/proyek";

export const metadata = {
  title: "Proyek",
  description: "Daftar proyek saya.",
};

export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tekt-utama dark:text-sky-200 md:text-4xl">
        Proyek Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700 dark:text-gray300">
        Kumpulan hasil belajar saya.
      </p>

      <FilterProyek proyek={proyek} />
    </main>
  );
}