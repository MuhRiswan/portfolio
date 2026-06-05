"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import AdminNav from "./AdminNav"
import SignOutButton from "./SignOutButton"
import UserAvatar from "@/components/shared/UserAvatar"
import { Session } from "next-auth"

export default function MobileSidebar({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="p-2 rounded-lg bg-[#182234] border border-[#222f49] text-[#90a4cb] hover:text-white transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 bg-[#0b0f1a] border-r-[#222f49] p-0 flex flex-col">
        <div className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Mobile navigation for admin dashboard</SheetDescription>
        </div>

        <div className="h-16 flex items-center px-6 border-b border-[#222f49] bg-[#182234]/50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-600/20">
            <span className="text-white font-black text-sm">R</span>
          </div>
          <span className="text-white font-bold tracking-wider text-sm">ADMIN PANEL</span>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <AdminNav />
        </div>

        <div className="p-4 border-t border-[#222f49] bg-[#182234]/20">
          <div className="flex items-center gap-3 px-3 py-2 mb-4 bg-[#0b0f1a]/50 rounded-xl border border-[#222f49]/50">
            <UserAvatar src={session?.user.image} name={session?.user.name} size={32} className="border-blue-500/50" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs text-white font-bold truncate">{session?.user.name}</span>
              <span className="text-[10px] text-blue-400 font-medium">Administrator</span>
            </div>
          </div>
          <SignOutButton />
        </div>
      </SheetContent>
    </Sheet>
  )
}
