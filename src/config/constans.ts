export const FIREBASE_COLLECTIONS = {
  PROJECTS: "projects",
  EXPERIENCES: "experiences",
} as const;

export const CACHE_TIMES = {
  DEFAULT: 3600, // 1 jam
  FAST: 60, // 1 menit
  VERY_SLOW: 86400, // 24 jam
} as const;

export const SITE_CONFIG = {
  NAME: "My Portfolio",
  URL: "https://portfolio-kamu.vercel.app",
};
