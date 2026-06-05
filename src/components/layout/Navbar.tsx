import Link from "next/link"
import { Code } from "lucide-react"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/80 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Go to homepage">
          <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
            <Code aria-hidden="true" />
          </div>
          <span className="text-foreground text-xl font-bold tracking-tight">Developer</span>
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <Link href={item.target === "home" ? "/" : `/${item.target}`} key={item.label}>
              <button
                className={`text-sm font-semibold transition-colors ${currentPage === item.target
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </nav> */}
        {/* <button className="hidden sm:block btn-primary">
          <Link href="#contact">
          Hire Me
          </Link>
        </button> */}
        <Link href="#contact" className="inline-flex btn-primary">
          Hire Me
        </Link>
        {/* <div className="flex items-center gap-4">
          <button className="hidden sm:block btn-primary">
            Hire Me
          </button>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? <X /> : <Menu />}</span>
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* <div className={`fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl z-[90] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col p-8 gap-6 bg-background">
          {navItems.map(item => (
            <Link href={item.target === "home" ? "/" : `/${item.target}`} key={item.label} onClick={handleLinkClick}>
              <Button variant="secondary"
                className={`text-2xl font-black text-foreground hover:text-primary transition-colors text-left ${currentPage === item.target
                  ? "text-primary"
                  : ""
                  }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <button className="btn-primary w-full h-14 mt-4">Hire Me</button>
        </nav>
      </div> */}
    </header>
  )
}

export default Navbar
