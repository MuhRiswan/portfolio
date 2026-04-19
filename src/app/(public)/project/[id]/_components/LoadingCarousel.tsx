export default function LoadingCarousel() {
  return (
    <div className="relative group">
      <div className="flex gap-4 pb-4">
        {[1, 2].map((i) => (
          <div key={i} className="flex-none w-full md:w-[85%]">
            <div className="flex flex-col gap-4 rounded-2xl bg-[#182234] border border-[#222f49] overflow-hidden p-2 shadow-lg animate-pulse">
              <div className="w-full aspect-video bg-slate-700 rounded-xl"></div>
              <div className="flex items-center justify-between px-4 py-2">
                <div className="h-4 bg-slate-700 rounded w-32"></div>
                <div className="h-8 w-8 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-1 w-2 bg-slate-700 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}