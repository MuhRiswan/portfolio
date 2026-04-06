export const revalidate = 3600;

import ProjectHeader from "./_components/ProjectHeader";
import ProjectCarousel from "./_components/ProjectCarousel";
import ProjectSidebar from "./_components/ProjectSidebar";
import ProjectContent from "./_components/ProjectContent";
import { redirect } from "next/navigation";
import { getAllProjects, getProjectById } from "@/services/projects";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project was not found",
    };
  }

  return {
    title: `${project.title} | Project Details`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl[0]?.url],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    redirect("/");
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
      <ProjectHeader project={project} />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1 space-y-12 overflow-hidden">
          <ProjectCarousel images={project.imageUrl} />
          <ProjectContent project={project} />
        </div>

        <div className="w-full lg:w-80">
          <ProjectSidebar techStack={project.techStack} details={project.details} />
        </div>
      </div>
    </div>
  );
}