"use client"

import { signOut } from "next-auth/react"
import { useState } from "react"
import { LogOut, AlertCircle, Loader2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function SignOutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoggingOut(true)
    try {
      await signOut({ callbackUrl: "/login" })
    } catch (error) {
      console.error("Sign out error:", error)
      setIsLoggingOut(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors">
          <LogOut className="w-4 h-4 mr-3" />
          <span className="text-sm font-medium">Sign Out</span>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-[#182234] border-[#222f49] text-white">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-500/10 rounded-full">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <AlertDialogTitle className="text-xl font-bold">Sign Out?</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-[#90a4cb]">Are you sure you want to end this admin session? You will need to sign in again to access the dashboard.</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel disabled={isLoggingOut} className="bg-transparent border-[#222f49] text-white hover:bg-[#222f49] hover:text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction onClick={handleSignOut} disabled={isLoggingOut} className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold border-none disabled:opacity-80 flex items-center gap-2 min-w-[80px] justify-center">
            {isLoggingOut ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing out...
              </>
            ) : (
              "Yes"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
