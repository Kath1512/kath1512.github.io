import { achievements } from '../data';
import { SectionLabel } from './About';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Achievements</SectionLabel>

        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
          Highlights
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group flex gap-4 rounded-xl border border-zinc-700 bg-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Trophy size={17} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">
                  {item.title}
                </p>
                <p className="text-indigo-400/80 text-xs font-mono mb-2">
                  {item.org}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
