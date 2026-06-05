import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  const totalProjects = await db.project.count()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, {session?.user.name?.split(" ")[0]}!</h1>
        <p className="text-[#90a4cb] mt-2">Here is the overview of your portfolio CMS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#182234]/50 border border-[#222f49] p-6 rounded-2xl">
          <h3 className="text-[#90a4cb] text-sm font-medium">Total Projects</h3>
          <p className="text-4xl font-bold text-white mt-2">{totalProjects}</p>
        </div>

        <div className="bg-[#182234]/50 border border-[#222f49] p-6 rounded-2xl">
          <h3 className="text-[#90a4cb] text-sm font-medium">Blog Posts</h3>
          <p className="text-4xl font-bold text-white mt-2">0</p>
          <span className="text-xs text-[#52668d] mt-1 inline-block">Coming Soon</span>
        </div>
      </div>
    </div>
  )
}
