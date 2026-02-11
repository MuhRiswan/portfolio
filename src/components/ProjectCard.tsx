
import { Project } from '@/types/portfolio';
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (

    <div
      key={project.id}
      className="group relative rounded-3xl border border-surface-border bg-surface-dark overflow-hidden transition-all hover:-translate-y-2 cursor-pointer"
    >
      <div className="aspect-[16/10] w-full relative overflow-hidden">
        <Image
          src={project.imageUrl[0].url}
          alt={project.title}
          fill
          className="absolute inset-0 object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          loading='lazy'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80"></div>
        <div className="absolute top-6 left-6">
          <span className="text-[10px] font-black tracking-[0.2em] text-white bg-primary px-3 py-1.5 rounded-lg uppercase">
            {project.categories[0]}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">{project.subTitle}</p>
        <p className="text-slate-400 text-base mb-8 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((stack) => (
            <span
              key={stack}
              className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-600 dark:text-slate-400"
            >
              {stack}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] font-bold text-slate-400 self-center">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
