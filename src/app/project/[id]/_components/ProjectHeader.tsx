"use client";

import { Project } from "@/types/portfolio";
import { useRouter } from "next/navigation";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap gap-2 py-4 mb-2">
        <button
          onClick={router.back}
          className="text-[#90a4cb] text-sm font-medium hover:text-primary transition-colors"
        >
          Projects
        </button>
        <span className="text-[#90a4cb] text-sm font-medium">/</span>
        <span className="text-white text-sm font-medium">{project.title}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-6 border-b border-surface-border">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-[#90a4cb] text-lg max-w-2xl font-normal">
            {project.description}
          </p>
        </div>
        <div className="flex gap-3 pb-2">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-w-[120px] cursor-pointer justify-center rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              <span>Live Demo</span>
            </a>
          )}
          {/* <button className="flex items-center gap-2 min-w-[48px] cursor-pointer justify-center rounded-xl h-12 px-4 bg-[#222f49] text-white text-sm font-bold hover:bg-[#2d3b5a] transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button> */}
        </div>
      </div>
    </>
  );
}