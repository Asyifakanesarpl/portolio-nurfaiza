import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
    href={`/proyek/${isJSDocPropertyLikeTag.slug}`}
    className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <image
        src={gambar1.png}
        alt={`Tangkapan layar ${proyek.judul}`}
        width={640}
        height={420}
        className="h-full w-full object-cover"
      />
      </div> 

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {proyek.kategori.map((kat, index) => (
            <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-900 dark:text-sky-200">
              {kat}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-sky-200">
          {proyek.judul}
        </h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {proyek.deskripsi}
        </p>

        <p className="mt-4 text-sm font-semibold "

      </div>
    
    </Link>
  )
}