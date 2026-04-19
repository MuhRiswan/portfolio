"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Loader2, WifiOff } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GithubIcon } from "@/components/icons/GithubIcon"

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm()

  const handleGitHubLogin = async () => {
    setIsLoading(true)
    try {
      await signIn("github", { callbackUrl: "/admin" })
    } catch (error) {
      console.error("Login Error:", error)

      toast.error("Connection Failed", {
        description: "Could not reach the authentication server. Please check your internet connection.",
        icon: <WifiOff className="w-5 h-5 text-red-500" />,
        duration: 4000,
      })

      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-6">
        <div className="grid gap-4">
          <Button variant="outline" type="button" disabled={isLoading} onClick={handleGitHubLogin} className="w-full h-12 bg-[#0b0f1a] hover:bg-black text-white border-[#222f49] hover:border-slate-600 rounded-xl font-bold transition-all group relative overflow-hidden">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GithubIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />}
            Continue with GitHub
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#222f49]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#182234] px-2 text-[#90a4cb]">Authorized Access Only</span>
          </div>
        </div>
      </div>
    </Form>
  )
}
