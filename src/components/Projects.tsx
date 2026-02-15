"use client"
import { useState, useMemo } from 'react';
import { CATEGORIES } from '@/config/config.portfolio'
import { Category, Project } from '@/types/portfolio';
import ProjectCard from './ProjectCard';
import { ScreenShareOff, Search } from 'lucide-react';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projects]);

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
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full h-12 pl-12 pr-4 bg-slate-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary rounded-2xl text-sm placeholder:text-slate-500 text-slate-900 dark:text-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center">
              <div className="bg-slate-100 dark:bg-white/5 p-6 rounded-full mb-6">
                <ScreenShareOff className="w-16 h-16 text-slate-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {searchQuery || selectedCategory !== 'All'
                  ? "No projects match your search"
                  : "Oops! Projects not available"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8">
                {searchQuery || selectedCategory !== 'All'
                  ? "Try adjusting your filters or search terms to find what you're looking for."
                  : "We're having trouble fetching the projects right now. Please try again later."}
              </p>

              {(searchQuery || selectedCategory !== 'All') && (
                <button onClick={handleReset} className="text-primary font-bold hover:underline">
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects