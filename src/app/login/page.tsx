import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LoginForm from "./_components/LoginForm"
import Link from "next/link"

export const metadata = {
  title: "Admin Login | Portfolio",
  description: "Secure login for portfolio administration.",
}

export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    if (session.user?.role === "ADMIN") {
      redirect("/admin")
    } else {
      redirect("/")
    }
  }
  return (
    <div className="pt-10 pb-4 flex items-center justify-center">
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#182234]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-[#222f49] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">Welcome Back</h1>
            <p className="text-[#90a4cb] text-sm">Sign in to manage your portfolio</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs font-bold text-slate-500 hover:text-primary transition-colors tracking-wider uppercase">
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
