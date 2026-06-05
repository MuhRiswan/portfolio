import { db } from "@/lib/prisma"
import ProjectCard from "./_components/ProjectCard"
import { ProjectModel } from "@/types/projects"

export const metadata = {
  title: "Projects | M.Riswan Portfolio",
  description:
    "A collection of my recent work, case studies, and side projects.",
}

// Revalidate data setiap 1 jam agar tetap fresh tapi server tidak overwork
export const revalidate = 3600

export default async function PublicProjectsPage() {
  // Ambil semua project yang sudah kamu buat di Admin Panel
  const projectsData = await db.project.findMany({
    orderBy: { createdAt: "desc" },
  })

  // Pastikan TypeScript tahu bentuk datanya
  const projects = projectsData as unknown as ProjectModel[]

  return (
    <div className="min-h-screen bg-[#0b0f1a] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Works
            </span>
          </h1>
          <p className="text-[#90a4cb] text-lg leading-relaxed">
            Here are a few design projects I&apos;ve worked on recently. Want to
            see more? Email me.
          </p>
        </div>

        {/* Projects Grid Section */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#182234]/20 border border-[#222f49] rounded-3xl">
            <h3 className="text-xl text-white font-medium mb-2">
              No projects found
            </h3>
            <p className="text-[#90a4cb]">
              I&apos;m currently working on something awesome. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
