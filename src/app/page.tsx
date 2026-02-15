import Experience from "@/app/_components/Experience";
import Hero from "@/app/_components/Hero";
import { Suspense } from "react";
import Projects from "../components/Projects";
import Contact from "./_components/Contact";
import LoadingHome from "./_components/LoadingHome";
import { getAllProjects } from "@/services/projects";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <Suspense fallback={<LoadingHome />}>
      <div className="animate-in fade-in duration-700">
        <Hero />
        <Experience />
        <Projects projects={projects} />
        <Contact />
      </div>
    </Suspense>
  );
}