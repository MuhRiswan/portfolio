export default function Loading() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
      <div className="animate-pulse">
        <div className="flex gap-2 py-4 mb-2">
          <div className="h-4 bg-slate-700 rounded w-20"></div>
          <div className="h-4 bg-slate-700 rounded w-4"></div>
          <div className="h-4 bg-slate-700 rounded w-32"></div>
        </div>

        <div className="py-6 border-b border-surface-border">
          <div className="h-10 bg-slate-700 rounded w-2/3 mb-4"></div>
          <div className="h-6 bg-slate-700 rounded w-1/2"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex-1 space-y-8">
            <div className="h-64 bg-slate-700 rounded-2xl"></div>

            <div className="space-y-4">
              <div className="h-8 bg-slate-700 rounded w-48"></div>
              <div className="h-32 bg-slate-700 rounded-2xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-80 space-y-8">
            <div className="h-48 bg-slate-700 rounded-2xl"></div>
            <div className="h-64 bg-slate-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}