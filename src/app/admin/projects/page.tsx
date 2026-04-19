import Link from "next/link"
import { Plus, Pencil, FolderOpen } from "lucide-react"
import { db } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDate } from "@/lib/date"
import DeleteProjectButton from "./_components/DeleteProjectButton"

export const metadata = {
  title: "Manage Projects | Admin CMS",
}

export default async function AdminProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Projects</h1>
          <p className="text-[#90a4cb] mt-1 text-sm">Manage your portfolio projects, case studies, and experiments.</p>
        </div>

        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-900/20 transition-all">
          <Link href="/admin/projects/new">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Link>
        </Button>
      </div>

      <div className="bg-[#182234]/50 border border-[#222f49] rounded-2xl overflow-hidden backdrop-blur-sm">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center px-4">
            <div className="w-16 h-16 bg-[#0b0f1a] rounded-2xl flex items-center justify-center mb-4 border border-[#222f49]">
              <FolderOpen className="w-8 h-8 text-[#52668d]" />
            </div>
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-[#90a4cb] mt-2 max-w-sm text-sm">You haven&apos;t added any projects yet. Click the &quot;New Project&quot; button to create your first portfolio entry.</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-[#0b0f1a]/50">
              <TableRow className="border-[#222f49] hover:bg-transparent">
                <TableHead className="text-[#90a4cb] font-medium w-[40%]">Title</TableHead>
                <TableHead className="text-[#90a4cb] font-medium hidden md:table-cell">Categories</TableHead>
                <TableHead className="text-[#90a4cb] font-medium hidden sm:table-cell">Date</TableHead>
                <TableHead className="text-[#90a4cb] font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="border-[#222f49] hover:bg-[#222f49]/30 transition-colors">
                  <TableCell className="font-medium text-white">
                    {project.title}
                    <span className="block text-xs text-[#52668d] font-normal mt-1 md:hidden truncate max-w-[200px]">{project.subTitle}</span>
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.categories.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="secondary" className="bg-[#222f49] text-blue-100 hover:bg-[#222f49] border-none text-xs font-normal">
                          {cat}
                        </Badge>
                      ))}
                      {project.categories.length > 2 && <span className="text-xs text-[#52668d] flex items-center">+{project.categories.length - 2}</span>}
                    </div>
                  </TableCell>

                  <TableCell className="text-[#90a4cb] text-sm hidden sm:table-cell">
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{formatDate.standard(project.createdAt)}</span>
                      <span className="text-xs opacity-70">{formatDate.relative(project.createdAt)}</span>
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8 text-[#90a4cb] hover:text-white hover:bg-blue-600/20">
                        <Link href={`/admin/projects/${project.id}/edit`}>
                          <Pencil className="w-4 h-4" />
                        </Link>
                      </Button>

                      <DeleteProjectButton id={project.id} title={project.title} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
