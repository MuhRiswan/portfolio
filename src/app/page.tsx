import Experience from "@/app/_components/Experience";
import Hero from "@/app/_components/Hero";
import { Suspense } from "react";
import Projects from "../components/Projects";
import Contact from "./_components/Contact";
import LoadingHome from "./_components/LoadingHome";

export default function Home() {
  return (
    <Suspense fallback={<LoadingHome />}>
      <div className="animate-in fade-in duration-700">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Suspense>
  );
}
