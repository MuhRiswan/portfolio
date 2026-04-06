import Experience from "@/app/_components/Experience";
import Hero from "@/app/_components/Hero";
import { Suspense } from "react";
import Projects from "../components/Projects";
import Contact from "./_components/Contact";
import LoadingHome from "./_components/LoadingHome";
import { getAllProjects } from "@/services/projects";

export const revalidate = 3600;

async function ProjectsList() {
  const projects = await getAllProjects();
  return <Projects projects={projects} />;
}

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Experience />
      <Suspense fallback={<LoadingHome />}>
        <ProjectsList />
      </Suspense>
      <Contact />
    </div>
  );
}