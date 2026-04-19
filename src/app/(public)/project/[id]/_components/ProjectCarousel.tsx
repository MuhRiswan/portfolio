"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

interface ProjectCarouselProps {
  images: { url: string; title: string }[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSlide(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
      }
    );

    const children = scrollRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [images]);

  const scrollTo = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.children[idx]?.clientWidth ?? 0;
    el.scrollTo({ left: idx * w, behavior: "smooth" });
  }, []);

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4"
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            data-index={idx}
            className="flex-none w-full md:w-[85%] snap-center"
          >
            <div className="flex flex-col gap-4 rounded-2xl bg-[#182234] border border-[#222f49] overflow-hidden p-2 shadow-lg">
              <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-[#0b0f1a]">
             
                <Image
                  src={img.url}
                  alt={img.title || `Project Detail Image ${idx + 1}`}
                  fill
                  priority={idx === 0} 
                  loading={idx === 0 ? undefined : "lazy"}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [idx]: true }))}
                  className={`
                    object-cover object-top transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                    ${loadedImages[idx] ? "scale-100 blur-0 opacity-100" : "scale-110 blur-2xl opacity-0"}
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 85vw"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <p className="text-white font-semibold text-sm">
                  {img.title || "Project Snapshot"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-primary shadow-[0_0_10px_rgba(37,106,244,0.5)]' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}