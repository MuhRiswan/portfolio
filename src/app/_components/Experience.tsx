
import { EXPERIENCE } from '@/config/config.portfolio';
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-6 overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Professional Journey</h2>
          <div className="h-1.5 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_rgba(37,106,244,0.4)]"></div>
          <p className="text-slate-400 mt-8 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            The evolution of my career, from strategic internships to leading frontend engineering roles, focusing on impact and technical excellence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-1/2 opacity-80"></div>

          <div className="space-y-24">
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-center animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-[#101622] -translate-x-1/2 z-10 transition-all duration-300 ${item.isActive ? 'bg-primary shadow-[0_0_20px_rgba(37,106,244,0.6)] scale-110' : 'bg-slate-700 shadow-lg'}`}>
                    {item.isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40"></span>
                    )}
                  </div>
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                    <div className="group p-8 rounded-[2rem] border-2 border-surface-border bg-surface-dark/40 backdrop-blur-xl hover:border-primary/40 hover:bg-surface-dark/60 transition-all duration-500 shadow-xl hover:shadow-primary/5">
                      <div className={`flex flex-col gap-2 mb-5 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div className={`flex items-center gap-2 mb-1 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg ${item.isActive ? 'text-primary bg-primary/10 border border-primary/20' : 'text-slate-500 bg-slate-900 border border-slate-800'}`}>
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{item.role}</h4>
                        <div className="text-white font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                          {isEven && <span className="hidden md:block w-8 h-px bg-primary/30"></span>}
                          {item.company}
                          {!isEven && <span className="hidden md:block w-8 h-px bg-primary/30"></span>}
                        </div>
                      </div>

                      <p className={`text-slate-400 text-base leading-relaxed mb-8 ${isEven ? 'md:ml-auto' : ''}`}>
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {item.skills.map(skill => (
                          <span key={skill} className="text-[9px] font-black text-slate-500 tracking-widest uppercase bg-slate-900/50 border border-slate-800/50 px-2.5 py-1.5 rounded-md hover:border-primary/30 hover:text-slate-300 transition-all cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;