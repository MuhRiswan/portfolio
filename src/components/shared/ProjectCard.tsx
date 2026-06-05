import React from "react"
import Image from "next/image"
import { ProjectModel } from "@/types/projects"

interface ProjectCardProps {
  project: ProjectModel
  priority?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const coverImage = project.imageUrl[0]?.url || ""
  return (
    <div key={project.id} className="group relative rounded-3xl border border-surface-border bg-surface-dark overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
      <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-900">
        {coverImage ? <Image src={coverImage} alt={project.title} fill priority={priority} loading={priority ? undefined : "lazy"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0 object-cover object-center transition-transform duration-1000 group-hover:scale-110" /> : <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">No Image</div>}
        <div className="absolute inset-0 bg-gradient-to-t from-[#182234]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {project.categories.length > 0 && (
          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-black tracking-[0.2em] text-white bg-primary px-3 py-1.5 rounded-lg uppercase shadow-md">{project.categories[0]}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        {/* ✅ FIX 3: Bungkus teks dengan 'flex-1' agar mendesak Tech Stack ke paling bawah */}
        <div className="flex-1">
          {/* Ubah text-3xl jadi text-2xl & tambah line-clamp-2 agar judul super panjang tidak merusak desain */}
          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">{project.title}</h3>

          {/* Beri sedikit warna primer pada subtitle agar lebih hidup */}
          <p className="text-primary/90 dark:text-primary/90 font-semibold text-sm mb-3 line-clamp-1">{project.subTitle}</p>

          {/* Batasi deskripsi maksimal 3 baris */}
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{project.description}</p>
        </div>

        {/* --- BAGIAN FOOTER (TECH STACK) --- */}
        {/* ✅ FIX 4: 'mt-auto' mengunci div ini SELALU di bawah. Ditambah border-top agar estetis */}
        <div className="mt-auto pt-5 border-t border-surface-border/50 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((stack) => (
            <span key={stack} className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-600 dark:text-slate-400">
              {stack}
            </span>
          ))}
          {project.techStack.length > 3 && <span className="text-[10px] font-bold text-slate-400 self-center">+{project.techStack.length - 3}</span>}
        </div>
      </div>
    </div>
    // <div key={project.id} className="group relative rounded-3xl border border-surface-border bg-surface-dark overflow-hidden transition-all hover:-translate-y-2 cursor-pointer">
    //   <div className="aspect-[16/10] w-full relative overflow-hidden">
    //     <Image src={project.imageUrl[0].url} alt={project.title} fill priority={priority} loading={priority ? undefined : "lazy"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0 object-cover object-center transition-transform duration-1000 group-hover:scale-110" />
    //     <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80"></div>
    //     <div className="absolute top-6 left-6">
    //       <span className="text-[10px] font-black tracking-[0.2em] text-white bg-primary px-3 py-1.5 rounded-lg uppercase">{project.categories[0]}</span>
    //     </div>
    //   </div>
    //   <div className="p-6">
    //     <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{project.title}</h3>
    //     <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">{project.subTitle}</p>
    //     <p className="text-slate-400 text-base mb-8 leading-relaxed line-clamp-2">{project.description}</p>
    //     <div className="mt-auto flex flex-wrap gap-2">
    //       {project.techStack.slice(0, 3).map((stack) => (
    //         <span key={stack} className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-600 dark:text-slate-400">
    //           {stack}
    //         </span>
    //       ))}
    //       {project.techStack.length > 3 && <span className="text-[10px] font-bold text-slate-400 self-center">+{project.techStack.length - 3}</span>}
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProjectCard
