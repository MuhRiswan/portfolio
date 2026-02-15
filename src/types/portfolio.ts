export interface Project {
  id: string;
  title: string;
  subTitle: string;
  categories: Category[];
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  imageUrl: { url: string; title: string }[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  details: {
    role: string;
    timeline: string;
    client: string;
  };
  liveUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isActive?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export type Category = "All" | "Next.js" | "Nuxt.js" | "Vue.js" | "React.js" | "UI/UX" | "Tools";
