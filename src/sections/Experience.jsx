import { experience } from '../data';
import { SectionLabel } from './About';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>

        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">
          Where I've worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-700 ml-[7px]" />

          <ol className="space-y-12">
            {experience.map((job, i) => (
              <li key={job.id} className="group relative pl-10">
                {/* Dot */}
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    i === 0
                      ? 'border-indigo-500 bg-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                      : 'border-zinc-700 bg-zinc-900 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10'
                  }`}
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {job.role}
                  </h3>
                  <span className="text-indigo-400 font-medium text-sm">
                    {job.company}
                  </span>
                  <span className="text-zinc-400 text-xs font-mono ml-auto">
                    {job.period}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded transition-colors duration-300 group-hover:border-zinc-600 group-hover:text-zinc-300 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
