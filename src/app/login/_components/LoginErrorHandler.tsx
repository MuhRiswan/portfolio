"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"
import { ShieldAlert, AlertTriangle } from "lucide-react"

export default function LoginErrorHandler() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const error = searchParams.get("error")

  useEffect(() => {
    if (!error) return

    let title = "Authentication Failed"
    let description = "An error occurred while trying to sign in."
    let Icon = AlertTriangle

    switch (error) {
      case "unauthorized":
        title = "Access Denied"
        description = "This GitHub account does not have the required permissions (ADMIN role) to access the Dashboard."
        Icon = ShieldAlert
        break
      case "OAuthSignin":
      case "OAuthCallback":
        description = "Failed to connect to GitHub services. Please try again."
        break
      case "AccessDenied":
        title = "Process Cancelled"
        description = "You cancelled the login process or access was denied by GitHub."
        break
      case "Configuration":
        description = "There is a configuration error on the authentication server."
        break
      default:
        description = "The system failed to verify your credentials. Please try again."
    }

    toast.error(title, {
      description,
      icon: <Icon className="w-5 h-5 text-red-500" />,
      duration: 5000,
    })

    router.replace("/login", { scroll: false })
  }, [error, router])

  return null
}
