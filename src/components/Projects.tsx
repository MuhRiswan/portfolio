"use client"
import { CATEGORIES, PROJECTS } from '@/config/config.portfolio'
import { Category } from '@/types/portfolio';
import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import { ScreenShareOff, Search } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {

  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <section className="py-20 bg-surface-dark/10 px-6" id='projects'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
              My Projects
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Here are some of the standout projects I have built—both from my professional work and personal initiatives. Each project reflects my expertise, dedication, and passion for web development.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-[#222f49]">
          <div className="flex flex-wrap items-center bg-slate-100 dark:bg-white/5 p-1 rounded-2xl w-fit">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${selectedCategory === category
                  ? 'bg-white dark:bg-primary text-slate-900 dark:text-white shadow-lg'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xl">
              <Search />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full h-12 pl-12 pr-4 bg-slate-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary rounded-2xl text-sm placeholder:text-slate-500 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="block"
                prefetch={false}
              >
                <ProjectCard
                  project={project}
                />
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-slate-500">
              <span className="mb-6 opacity-10">
                <ScreenShareOff className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32" />
              </span>
              <p className="text-2xl font-black tracking-tight text-slate-400 dark:text-slate-600">No matches found</p>
              <button onClick={handleReset} className="mt-4 text-primary font-bold hover:underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects