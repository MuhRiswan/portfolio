import { Project, ExperienceItem, SkillCategory, Category } from "@/types/portfolio";

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Core",
    icon: "monitor",
    description: "Specializing in crafting responsive, user-focus web applications with a strong focus on system stability.",
    skills: ["Next.js 15", "React.js", "Vue.js 3", "TypeScript"],
  },
  {
    title: "State & Logic",
    icon: "psychology",
    description: "Expertise in complex state management and robust form validations for reliable data flow.",
    skills: ["Pinia", "Zustand", "Redux", "Zod"],
  },
  {
    title: "UI & Styling",
    icon: "palette",
    description: "Building consistent design systems and intuitive interfaces using modern CSS frameworks.",
    skills: ["Tailwind CSS", "Shadcn UI", "Primevue", "Bootstrap"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Front End Engineer",
    company: "Mari Works Solution",
    period: "Dec 2024 – Present",
    description: "Developing a Next.js 15 commerce application and a Vue.js 3 digital ordering platform. Focused on improving transaction flow stability, shipping experience, and implementing reusable components with Shadcn and Primevue.",
    skills: ["NEXT.JS 15", "VUE.JS 3", "ZUSTAND", "PINIA"],
    isActive: true,
  },
  {
    id: "exp-2",
    role: "Front End Developer Intern",
    company: "Serba Mulia Auto",
    period: "Jan – May 2024",
    description: "Developed an internal corporate portal using Laravel Inertia React and a Company Profile application utilizing Next.js 14. Integrated FAR (Function, Asset, and Risk) management features.",
    skills: ["LARAVEL", "INERTIA", "NEXT.JS 14", "SHADCN UI"],
    isActive: false,
  },
  {
    id: "exp-3",
    role: "Front End Developer Intern",
    company: "Serba Mulia Group",
    period: "Aug – Dec 2023",
    description: "Built dashboard analytics using Tremor and Next.js. Implemented SSR for SEO optimization and developed a tailored Learning Management System (LMS) for corporate employees.",
    skills: ["TREMOR", "SSR", "SEO", "NEXT.JS"],
    isActive: false,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Marishop",
    subTitle: "Multi-Tenant Commerce Platform",
    categories: ["E-Commerce", "Next.js"],
    description: "A commerce platform enabling each client to have their own unique storefront appearance and configuration, built with Next.js 15 and TypeScript.",
    longDescription: "Marishop is a modern, multi-tenant commerce solution designed to support many clients. Each client can fully customize their storefront design, configuration, and requirements. This platform prioritizes enterprise-grade transaction stability, highly flexible UI, high performance, and easy integration for new components, while ensuring the application remains lightweight and user-friendly.",
    challenge: "Designing an architecture that allows each client to independently manage their storefront appearance and configuration, while maintaining great performance, lightweight access, and an intuitive, comfortable shopping experience that avoids confusing the user.",
    solution: "Utilizing Next.js 15 with dynamic per-client configuration (themes/settings). Global state management is handled by Zustand, checkout form validation uses Zod, and the application is optimized throughout for exceptional performance, accessibility, and clear, user-friendly navigation, making shopping simple and enjoyable.",
    imageUrl: [
      {
        url: "/img/projects/marishop/list-product-page.png",
        title: "Project List Page",
      },
      {
        url: "/img/projects/marishop/detail-product-page.png",
        title: "Detail Product page",
      },
      {
        url: "/img/projects/marishop/checkout-page.png",
        title: "Checkout Page",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Zod"],
    metrics: [
      { label: "Stability   Increase", value: "+35%" },
      { label: "Checkout Time", value: "-20s" },
      { label: "Mobile Traffic", value: "60%" },
    ],
    details: {
      role: "Front End Engineer",
      timeline: "Dec 2024 - Present",
      client: "Mari Works Solution",
    },
    liveUrl: "#",
  },
  // {
  //   id: "project-2",
  //   title: "Marichat",
  //   subTitle: "Ordering App sclabe",
  //   categories: ["Dashboard", "Next.js"],
  //   description: "Real-time business analytics platform with advanced data visualization using Tremor and Next.js SSR.",
  //   longDescription: "A professional-grade analytics tool for corporate data visibility, featuring server-side rendering for lightning-fast initial loads and SEO-ready architecture.",
  //   challenge: "Visualizing large datasets without compromising client-side performance.",
  //   solution: "Used Tremor's component library integrated with Next.js SSR to handle data processing on the server, ensuring the UI remains fluid.",
  //   imageUrl: [
  //     {
  //       url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
  //       title: "Marishop commerce dashboard on screen",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
  //       title: "Marishop commerce dashboard on screen",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
  //       title: "Marishop commerce dashboard on screen",
  //     },
  //   ],
  //   techStack: ["Next.js", "Tremor", "TypeScript", "Tailwind CSS"],
  //   metrics: [
  //     { label: "Lighthouse Score", value: "98" },
  //     { label: "Data Visibility", value: "100%" },
  //     { label: "User Retention", value: "+15%" },
  //   ],
  //   details: {
  //     role: "Front End Intern",
  //     timeline: "Aug - Dec 2023",
  //     client: "Serba Mulia Group",
  //   },
  //   liveUrl: "", // Testing flexible button (no live url)
  // },
];

export const CATEGORIES: Category[] = ["All", "Next.js", "E-Commerce", "Dashboard", "Tools"];
