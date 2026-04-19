export default function ProjectDetailLoading() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 animate-pulse">
      <div className="flex flex-wrap gap-2 py-4 mb-2 items-center">
        <div className="h-5 w-16 bg-[#222f49] rounded-md"></div>
        <span className="text-[#222f49] text-sm">/</span>
        <div className="h-5 w-24 bg-[#222f49] rounded-md"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-6 border-b border-surface-border">
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <div className="h-10 md:h-14 w-3/4 bg-[#182234] rounded-xl border border-[#222f49]"></div>
          <div className="space-y-2 mt-2">
            <div className="h-4 w-full bg-[#182234] rounded-md border border-[#222f49]"></div>
            <div className="h-4 w-5/6 bg-[#182234] rounded-md border border-[#222f49]"></div>
          </div>
        </div>
        <div className="h-12 w-32 bg-[#182234] rounded-xl border border-[#222f49] mb-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        
        <div className="flex-1 space-y-12 overflow-hidden">
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              <div className="flex-none w-full md:w-[85%]">
                <div className="flex flex-col gap-4 rounded-2xl bg-[#182234] border border-[#222f49] p-2">
                  <div className="w-full aspect-video rounded-xl bg-[#0b0f1a]"></div>
                  <div className="h-5 w-32 bg-[#222f49] rounded-md mx-4 my-2"></div>
                </div>
              </div>

              <div className="flex-none w-full md:w-[85%] opacity-40">
                <div className="flex flex-col gap-4 rounded-2xl bg-[#182234] border border-[#222f49] p-2">
                  <div className="w-full aspect-video rounded-xl bg-[#0b0f1a]"></div>
                  <div className="h-5 w-32 bg-[#222f49] rounded-md mx-4 my-2"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1.5 w-8 rounded-full bg-[#222f49]"></div>
              <div className="h-1.5 w-2 rounded-full bg-[#222f49]"></div>
              <div className="h-1.5 w-2 rounded-full bg-[#222f49]"></div>
            </div>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#222f49]"></div>
              <div className="h-6 w-40 bg-[#182234] rounded-lg border border-[#222f49]"></div>
            </div>
            <div className="bg-[#182234] p-8 rounded-[2rem] border border-[#222f49] space-y-4">
              <div className="h-4 w-full bg-[#222f49] rounded-md"></div>
              <div className="h-4 w-full bg-[#222f49] rounded-md"></div>
              <div className="h-4 w-3/4 bg-[#222f49] rounded-md"></div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#222f49]"></div>
              <div className="h-6 w-36 bg-[#182234] rounded-lg border border-[#222f49]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#182234] border border-[#222f49] h-32"></div>
              <div className="p-6 rounded-2xl bg-[#182234] border border-[#222f49] h-32"></div>
            </div>
          </section>

        </div>

        <div className="w-full lg:w-80">
          <aside className="space-y-8">
            <div className="p-6 rounded-[2rem] bg-[#182234] border border-[#222f49]">
              <div className="h-5 w-28 bg-[#222f49] rounded-md mb-6"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-20 bg-[#222f49] rounded-lg"></div>
                <div className="h-8 w-24 bg-[#222f49] rounded-lg"></div>
                <div className="h-8 w-16 bg-[#222f49] rounded-lg"></div>
                <div className="h-8 w-28 bg-[#222f49] rounded-lg"></div>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-[#182234] border border-[#222f49]">
              <div className="h-5 w-20 bg-[#222f49] rounded-md mb-6"></div>
              <div className="space-y-6">
                <div>
                  <div className="h-3 w-12 bg-[#222f49] rounded mb-2"></div>
                  <div className="h-4 w-32 bg-[#222f49] rounded"></div>
                </div>
                <div>
                  <div className="h-3 w-16 bg-[#222f49] rounded mb-2"></div>
                  <div className="h-4 w-24 bg-[#222f49] rounded"></div>
                </div>
                <div>
                  <div className="h-3 w-14 bg-[#222f49] rounded mb-2"></div>
                  <div className="h-4 w-36 bg-[#222f49] rounded"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
