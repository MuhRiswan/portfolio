"use client"
import Link from "next/link";
import { Code } from "lucide-react";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathname = usePathname();

  // const getCurrentPage = () => {
  //   if (pathname === "/" || pathname === "/home") return "home";
  //   const segment = pathname.split("/").filter(Boolean)[0];
  //   return segment ?? "home";
  // };

  // const currentPage = getCurrentPage();

  // const navItems = [
  //   { label: 'Work', target: 'home' as const },
  //   { label: 'Design System', target: 'design-system' as const },
  //   { label: 'Experience', target: 'experience' as const },
  // ];

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/80 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
            <Code />
          </div>
          <h1 className="text-foreground text-xl font-bold tracking-tight">Developer</h1>
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
        <button className="hidden sm:block btn-primary">
          Hire Me
        </button>
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
  );
};

export default Navbar