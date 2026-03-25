import { personal } from '../data';
import { SectionLabel } from './About';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>

        <div className="mt-12 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
            Let's work together
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-10">
            I'm always open to interesting conversations, collaborations, or new
            opportunities. If you have something in mind — reach out.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-1"
          >
            <Mail size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
            <span className="text-lg tracking-wide">{personal.email}</span>
          </a>

          <div className="flex items-center gap-5 mt-10 pt-10 border-t border-zinc-700">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
            <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
            <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
