import { skills } from '../data';
import { SectionLabel } from './About';

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>

        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
          Tech I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group rounded-xl border border-zinc-700 bg-zinc-800 p-6 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-indigo-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-300 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full transition-all duration-300 hover:bg-zinc-700 hover:text-white cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
