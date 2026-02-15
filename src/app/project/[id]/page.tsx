// Revalidate data firebase agar refetch
export const revalidate = 3600;

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { lazy, Suspense } from "react";
import ProjectHeader from "./_components/ProjectHeader";
import LoadingCarousel from "./_components/LoadingCarousel";
import ProjectCarousel from "./_components/ProjectCarousel";
import { redirect } from "next/navigation";
import { getProjectById, PROJECTS_REVALIDATE } from "@/services/projects";

const ProjectSidebar = lazy(() => import('@/app/project/[id]/_components/ProjectSidebar'));
const ProjectContent = lazy(() => import('@/app/project/[id]/_components/ProjectContent'));


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

// Generate Static Params agar halaman cepat diakses (SSG)
export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);

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
            <ProjectCarousel images={images} />
          </Suspense>
          <ProjectContent project={project} />
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