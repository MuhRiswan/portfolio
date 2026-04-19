import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import AdminNav from "./_components/AdminNav"
import SignOutButton from "./_components/SignOutButton"
import MobileSidebar from "./_components/MobileSidebar"
import UserAvatar from "@/components/shared/UserAvatar"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-[#0b0f1a] flex flex-col md:flex-row">
      <header className="md:hidden flex items-center justify-between p-4 border-b border-[#222f49] bg-[#182234]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm">R</span>
          </div>
          <span className="text-white font-bold tracking-wider text-sm">CMS</span>
        </div>

        <MobileSidebar session={session} />
      </header>

      <aside className="w-64 border-r border-[#222f49] bg-[#182234]/50 flex-col hidden md:flex shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-[#222f49]">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-600/20">
            <span className="text-white font-black text-sm">R</span>
          </div>
          <span className="text-white font-bold tracking-wider text-sm">ADMIN PANEL</span>
        </div>

        <AdminNav />

        <div className="p-4 border-t border-[#222f49]">
          <div className="flex items-center gap-3 px-3 py-2 mb-4 bg-[#0b0f1a]/30 rounded-xl border border-[#222f49]/50">
            <UserAvatar src={session.user.image} name={session.user.name} size={32} className="border-blue-500/50" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs text-white font-bold truncate">{session.user.name}</span>
              <span className="text-[10px] text-blue-400 font-medium">Administrator</span>
            </div>
          </div>
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-[calc(100vh-73px)] md:h-screen overflow-hidden bg-[#0b0f1a]">
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">{children}</div>
      </main>
    </div>
  )
}
