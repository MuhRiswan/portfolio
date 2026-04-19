import { Box } from "lucide-react"

interface ProjectDetails {
  role: string
  timeline: string
  client: string
}

interface ProjectSidebarProps {
  techStack: string[]
  details: ProjectDetails
}

export default function ProjectSidebar({ techStack, details }: ProjectSidebarProps) {
  const colors = ["bg-sky-400", "bg-blue-500", "bg-cyan-400", "bg-green-500", "bg-orange-500"]

  return (
    <aside className="space-y-8">
      <div className="p-6 rounded-[2rem] bg-[#182234] border border-[#222f49] shadow-sm">
        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
          <Box />
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#222f49] text-xs font-semibold text-slate-300 flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className={`w-2 h-2 rounded-full ${colors[i % colors.length]}`}></span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-[2rem] bg-[#182234] border border-[#222f49] shadow-sm">
        <h3 className="text-white font-bold mb-6">Details</h3>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Role</p>
            <p className="text-sm font-medium text-slate-200">{details.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Timeline</p>
            <p className="text-sm font-medium text-slate-200">{details.timeline}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Client</p>
            <p className="text-sm font-medium text-slate-200">{details.client}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
