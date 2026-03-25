import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-700">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite.
        </p>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-white transition-colors"
        >
          Source on GitHub →
        </a>
      </div>
    </footer>
  );
}
