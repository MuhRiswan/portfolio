import Navbar from "@/components/layout/Navbar"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="py-12 border-t border-[#222f49] mt-12 bg-[#0b0f1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#90a4cb] text-sm">© 2026 M.RISWAN. Built a Portfolio App</p>
        </div>
      </footer>
    </div>
  )
}
