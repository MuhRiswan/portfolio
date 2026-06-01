import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectModel } from "@/types/projects"

interface ProjectCardProps {
  project: ProjectModel
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Ambil gambar pertama dari array sebagai cover.
  // Jika karena alasan tertentu kosong, gunakan fallback warna/gambar kosong.
  const coverImage = project.imageUrl?.[0]?.url || ""

  return (
    <Link href={`/project/${project.id}`} className="group relative flex flex-col bg-[#182234]/40 backdrop-blur-sm border border-[#222f49] rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 h-full">
      {/* 🖼️ Cover Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0b0f1a]">
        {coverImage ? <Image src={coverImage} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /> : <div className="w-full h-full flex items-center justify-center text-[#52668d]">No Image</div>}

        {/* Overlay gradient untuk transisi halus dari gambar ke teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#182234]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* 📝 Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Kategori Utama (Ambil 1 saja agar rapi) */}
        {project.categories.length > 0 && <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{project.categories[0]}</span>}

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>

        <p className="text-[#90a4cb] text-sm line-clamp-2 mb-6 flex-1">{project.description}</p>

        {/* Tech Stack Pills (Tampilkan maksimal 3 agar tidak penuh) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-[#0b0f1a] border border-[#222f49] rounded-md">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && <span className="px-2.5 py-1 text-[11px] font-medium text-slate-500 bg-[#0b0f1a] border border-[#222f49] rounded-md">+{project.techStack.length - 3}</span>}
        </div>

        {/* Call to Action */}
        <div className="flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-auto pt-4 border-t border-[#222f49]/50">
          View Case Study
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
