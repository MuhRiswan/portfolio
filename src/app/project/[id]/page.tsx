import { PROJECTS } from "@/config/config.portfolio";
import { lazy, Suspense } from "react";
import ProjectHeader from "./_components/ProjectHeader";
import LoadingCarousel from "./_components/LoadingCarousel";
import ProjectCarousel from "./_components/ProjectCarousel";
import { redirect } from "next/navigation";

const ProjectSidebar = lazy(() => import('@/app/project/[id]/_components/ProjectSidebar'));
// const ProjectMetrics = lazy(() => import('@/app/project/[id]/_components/ProjectMetrics'));
const ProjectContent = lazy(() => import('@/app/project/[id]/_components/ProjectContent'));

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id === id);

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
      images: [project.imageUrl],
    },
  };
}

// Generate static params untuk SSG (opsional)
export async function generateStaticParams() {
  return PROJECTS.map(project => ({
    id: project.id,
  }));
}



export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find(p => p.id === resolvedParams.id);

  if (!project) {
    redirect("/");
  }

  const images = project.imageUrl;

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
      <ProjectHeader project={project} />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1 space-y-12 overflow-hidden">
          <Suspense fallback={<LoadingCarousel />}>
            <ProjectCarousel
              images={images}
            />
          </Suspense>
          <ProjectContent project={project} />
          {/* <ProjectMetrics metrics={project.metrics} /> */}
        </div>

        <div className="w-full lg:w-80">
          <ProjectSidebar
            techStack={project.techStack}
            details={project.details}
          />
        </div>
      </div>
    </div>
  );
}