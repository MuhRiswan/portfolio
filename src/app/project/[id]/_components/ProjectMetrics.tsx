import { TrendingUp } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp />
        <h2 className="text-white text-2xl font-bold">Impact & Metrics</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="relative overflow-hidden p-8 rounded-[2rem] bg-[#182234] border border-[#222f49] group shadow-sm hover:shadow-primary/5 transition-all">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-4xl font-black text-primary mb-1">{metric.value}</p>
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}