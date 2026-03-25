import { projects } from '../data';
import { SectionLabel } from './About';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-4 flex items-end justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Things I've built
          </h2>
          <a
            href="https://github.com/kath1512"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors hidden sm:block"
          >
            All on GitHub →
          </a>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  // Use index to alternate layout or create distinct gradients
  const gradients = [
    "from-indigo-600/20 to-violet-600/20",
    "from-zinc-700/20 to-cyan-600/20",
    "from-indigo-600/20 to-violet-600/20"
  ];
  
  const bgColors = [
    "bg-indigo-500/5 border-indigo-500/20",
    "bg-zinc-600/5 border-zinc-600/20",
    "bg-indigo-500/5 border-indigo-500/20"
  ];

  return (
    <div className="group flex flex-col lg:flex-row gap-8 rounded-2xl border border-zinc-700 bg-zinc-800 p-6 sm:p-8 transition-all duration-300 hover:border-zinc-600 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
      
      {/* Abstract Image / Graphic Area */}
      <div className={`w-full lg:w-[400px] shrink-0 rounded-xl overflow-hidden relative border flex items-center justify-center min-h-[250px] ${bgColors[index % bgColors.length]}`}>
        {/* Abstract background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
        
        {/* Abstract inner badge showing project initials */}
        <div className="z-10 bg-zinc-900/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
           <h3 className="text-3xl font-black text-white/90 tracking-tighter uppercase font-mono">
             {project.title.split(' ').map(w => w[0]).join('').substring(0, 3)}
           </h3>
        </div>
        
        {/* Subtle grid overlay for texture */}
        <div 
          className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)'
          }}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-base mb-6 leading-relaxed font-medium">
            {project.summary}
          </p>

          <ul className="space-y-3 mb-8">
            {project.achievements?.map((ach, i) => (
              <li key={i} className="flex items-start gap-3">
                <ChevronRight className="shrink-0 w-5 h-5 text-indigo-400/80 mt-0.5" />
                <span className="text-zinc-300 text-sm leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-zinc-300 bg-zinc-700/50 border border-zinc-600 px-2.5 py-1 rounded transition-colors duration-300 hover:bg-zinc-600 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:border-zinc-600 text-zinc-200 hover:text-white text-sm font-medium transition-all"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={16} />
                Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
                {project.demoLabel || 'Live Demo'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
