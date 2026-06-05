import { db } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ProjectForm from "../../_components/ProjectForm"
import { ProjectModel } from "@/types/projects"

export const metadata = {
  title: "Edit Project | Admin CMS",
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditProjectPage({ params }: PageProps) {
  const { id } = await params

  const project = await db.project.findUnique({
    where: { id: id },
  })

  if (!project) notFound()

  const formattedProject = project as unknown as ProjectModel

  return (
    <div className=" space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Edit Project</h1>
        <p className="text-[#90a4cb] mt-1 text-sm">Update your project details, images, and performance metrics.</p>
      </div>

      <ProjectForm initialData={formattedProject} />
    </div>
  )
}
