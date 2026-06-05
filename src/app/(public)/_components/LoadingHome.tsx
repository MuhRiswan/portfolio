function LoadingHome() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-pulse">
      <div className="h-12 w-1/3 bg-slate-800 rounded-xl mb-6"></div>
      <div className="h-4 w-2/3 bg-slate-800/50 rounded-xl mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-64 bg-slate-800 rounded-3xl"></div>
        <div className="h-64 bg-slate-800 rounded-3xl"></div>
      </div>
    </div>
  )
}

export default LoadingHome