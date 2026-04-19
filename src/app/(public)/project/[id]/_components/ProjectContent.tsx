import { CircleAlert, Sparkle } from "lucide-react";

interface ProjectContentProps {
  project: {
    challenge: string;
    longDescription: string;
    solution: string;
  };
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      <section>
        <div className="flex items-center gap-3 mb-6">
          <CircleAlert />
          <h2 className="text-white text-2xl font-bold">The Challenge</h2>
        </div>
        <div className="bg-[#182234] p-8 rounded-[2rem] border border-[#222f49] leading-relaxed text-slate-300 shadow-sm">
          <p className="mb-4 text-lg">{project.challenge}</p>
          <p className="text-slate-400">{project.longDescription}</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Sparkle />
          <h2 className="text-white text-2xl font-bold">The Solution</h2>
        </div>
        <div className="space-y-6">
          <p className="text-slate-300 text-lg">{project.solution}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#182234] border border-[#222f49] hover:border-primary/50 transition-colors shadow-sm">
              <h4 className="text-primary font-bold mb-3 text-lg">Virtualized Performance</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Implemented windowing and lazy loading patterns for large datasets, ensuring the interface remains fluid under heavy data loads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#182234] border border-[#222f49] hover:border-primary/50 transition-colors shadow-sm">
              <h4 className="text-primary font-bold mb-3 text-lg">Adaptive Logic</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Integrated reactive state management and dynamic routing to unify previously fragmented data sources into a single source of truth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}