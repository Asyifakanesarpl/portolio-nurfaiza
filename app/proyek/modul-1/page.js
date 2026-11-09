import { notFound } from "next/navigation";
import { proyek } from "../../../data/proyek";
import DetailProyek from "../../../components/DetailProyek";

export default function ModulSatu() {
  const data = proyek.find((item) => item.slug === "modul-1");

  if (!data) notFound();

  return <DetailProyek data={data} />;
}