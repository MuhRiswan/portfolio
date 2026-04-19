"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Trash2, Loader2, AlertTriangle } from "lucide-react"
import { toast } from "sonner"
import { deleteProjectAction } from "@/actions/project"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function DeleteProjectButton({ id, title }: { id: string; title: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDeleting(true)

    try {
      await deleteProjectAction(id)
      toast.success("Project and its assets deleted!")
      router.refresh()
    } catch {
      toast.error("Failed to delete project.")
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-950/50">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-[#182234] border-[#222f49] text-white">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-500/10 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <AlertDialogTitle className="text-xl font-bold">Delete Project?</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-[#90a4cb]">
            Are you sure you want to delete <span className="text-white font-bold">&quot;{title}&quot;</span>? This action will permanently remove the data and all associated images from the cloud.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel disabled={isDeleting} className="bg-transparent border-[#222f49] text-white hover:bg-[#222f49] rounded-xl">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold min-w-[120px]">
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Yes, Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
