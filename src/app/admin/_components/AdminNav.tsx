"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FolderGit2, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderGit2,
  },
  {
    name: "Blog",
    href: "/admin/blog",
    icon: FileText,
    disabled: true,
  },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex-1 p-4 space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link key={item.name} href={item.disabled ? "#" : item.href} className={cn("flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group", isActive ? "bg-[#222f49] text-white shadow-sm" : "text-[#90a4cb] hover:bg-[#222f49]/50 hover:text-white", item.disabled && "opacity-50 cursor-not-allowed pointer-events-none")}>
            <Icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-[#90a4cb] group-hover:text-white")} />
            <span className="text-sm font-medium">{item.name}</span>

            {isActive && <div className="ml-auto w-1 h-4 bg-blue-500 rounded-full" />}
          </Link>
        )
      })}
    </nav>
  )
}
