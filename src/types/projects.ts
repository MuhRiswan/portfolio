
// 1. Tipe data murni seperti yang keluar dari Prisma Database
export interface ProjectModel {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  liveUrl: string | null;
  categories: string[];
  techStack: string[];
  // JSON fields dari Prisma yang kita tegaskan (cast) bentuknya
  imageUrl: { title: string; url: string }[];
  metrics: { label: string; value: string }[];
  details: { role: string; timeline: string; client: string };
}

// 2. Tipe data Payload yang dikirim dari Form ke Server Action
export interface ProjectPayload {
  id?: string; // Optional (Hanya ada saat Update)
  title: string;
  subTitle: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  liveUrl?: string;
  // Di form, input ini masih berupa string dipisah koma
  categories: string; 
  techStack: string;
  // File fisik sudah dihapus, diganti jadi URL murni dari Vercel Blob
  imageUrl: { title: string; url: string }[];
  metrics?: { label: string; value: string }[];
  details: { role: string; timeline: string; client: string };
}