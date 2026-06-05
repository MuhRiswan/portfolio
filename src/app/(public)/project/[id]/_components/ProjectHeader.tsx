"use client"

import { ProjectModel } from "@/types/projects"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ProjectHeaderProps {
  project: ProjectModel
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-wrap gap-2 py-4 mb-2">
        <button onClick={router.back} className="text-[#90a4cb] text-sm font-medium hover:text-primary transition-colors">
          Projects
        </button>
        <span className="text-[#90a4cb] text-sm font-medium">/</span>
        <span className="text-white text-sm font-medium">{project.title}</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 py-6 border-b border-surface-border">
        <div className="flex flex-col gap-3 flex-1">
          {/* flex-1 memastikan teks mengambil ruang yang tersedia tanpa mendorong tombol keluar layar */}
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">{project.title}</h1>
          <p className="text-[#90a4cb] text-lg font-normal max-w-2xl">{project.description}</p>
        </div>

        {/* <div className="flex items-center"> */}
        {project.liveUrl && project.liveUrl !== "#" && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap cursor-pointer justify-center rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all shrink-0">
            <ExternalLinkIcon />
            <span>Live Demo</span>
          </Link>
        )}
        {/* </div> */}
      </div>
    </>
  )
}
