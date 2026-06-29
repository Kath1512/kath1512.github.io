import { personal, aboutStats } from '../data';

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>

        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Always curious,{' '}
              <span className="text-indigo-400">always building</span>
            </h2>
            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
              {personal.bio}
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                {personal.email} →
              </a>
            </div>
          </div>

          {/* Side card */}
          <div className="hidden md:block w-56">
            <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5 flex flex-col gap-5 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
              {aboutStats.map((stat, i) => (
                <div key={stat.label}>
                  <Stat label={stat.label} value={stat.value} />
                  {i < aboutStats.length - 1 && (
                    <div className="border-t border-zinc-700 mt-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="group cursor-default">
      <p className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-400">{value}</p>
      <p className="text-xs text-zinc-400 mt-0.5">{label}</p>
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-6 h-px bg-indigo-500" />
      <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}
