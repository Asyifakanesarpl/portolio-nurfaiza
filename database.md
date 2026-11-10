## Tabel `skills`
Daftar keahlian Andi Pratama.
| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis
dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Dasar, Menengah, atau Mahir |
RLS aktif. Policy `Pengunjung boleh membaca keahlian`: peran `anon`
boleh `select` semua baris.