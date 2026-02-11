
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex mx-auto lg:mx-0 items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold w-fit tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to new opportunities
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight text-center lg:text-start">
              Building Scalable <br />
              <span className="text-primary bg-clip-text  bg-gradient-to-r from-blue-400 to-blue-600">Web Experiences</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed text-center lg:text-start">
              I’m a Frontend Developer who enjoys building modern, fast, and user-friendly web applications. I work mostly with Next.js, Vue, and TypeScript. For me, good frontend is not just about how it looks, but how it feels and performs for users. I’m continuously learning and improving to build better, more impactful digital products.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            {["React.js", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tag) => (
              <div key={tag} className="flex h-10 items-center justify-center gap-2 rounded-full bg-surface-dark border border-surface-border px-5 shadow-sm">
                <span className="text-white text-sm font-semibold">{tag}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:gap-5 pt-4">
            <Button asChild variant="primary" size="xl">
              <Link href="#projects">
                View Projects
              </Link>
            </Button>
            <Button variant="secondary" size="xl" disabled>
              Download CV
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
          <div className="relative rounded-3xl border border-surface-border bg-[#0b0f1a] p-2 sm:p-4 lg:p-7 glow-blue overflow-hidden flex items-center justify-center"
            style={{ width: "100%", height: "100%", minHeight: "370px", minWidth: "370px", aspectRatio: "1/1", maxWidth: "500px", maxHeight: "500px" }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
            <Image
              src="/img/profile.png"
              alt="Professional developer profile, modern, bright"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform hover:scale-[1.04] duration-700"
              style={{ objectPosition: "center 42%" }}
              loading="lazy"
            />
            <div className="absolute bottom-6 left-2 bg-surface-dark/95 backdrop-blur-xl p-2.5 rounded-xl border border-surface-border shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-500/10 text-green-500 rounded-lg">
                  <span className="material-symbols-outlined text-base font-bold" style={{ fontSize: 16 }}>MR</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">M.RISWAN</div>
                  <div className="text-base font-black text-white leading-none">Front end Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
