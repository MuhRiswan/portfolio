"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface ProjectCarouselProps {
  images: { url: string; title: string }[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollTo = (idx: number) => {
    if (!isMounted) return;

    const el = scrollRef.current;
    if (!el) return;

    const w = el.children[idx]?.clientWidth ?? 0;
    el.scrollTo({
      left: idx * w,
      behavior: "smooth",
    });
    setActiveSlide(idx);
  };

  const handleScroll = () => {
    if (!isMounted) return;

    const el = scrollRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    let closestIdx = 0;
    let closestDist = Infinity;

    children.forEach((child, idx) => {
      const dist = Math.abs(child.getBoundingClientRect().left - el.getBoundingClientRect().left);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });

    setActiveSlide(closestIdx);
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4"
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-none w-full md:w-[85%] snap-center">
            <div className="flex flex-col gap-4 rounded-2xl bg-[#182234] border border-[#222f49] overflow-hidden p-2 shadow-lg">
              <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                <Image
                  src={img.url}
                  alt={img.title || "Project Image"}
                  fill
                  loading="lazy"
                  className="object-cover object-top"
                  title={img.title}
                  aria-label={img.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 85vw"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <p className="text-white font-semibold">
                  {img.title || "Project Image"}
                </p>
                {/* <button className="text-primary text-sm font-bold flex items-center gap-1 hover:scale-110 transition-transform">
                  <Maximize />
                </button> */}
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
            className={`h-1 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-primary' : 'w-2 bg-slate-700'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}