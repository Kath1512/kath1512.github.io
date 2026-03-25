import { personal } from '../data';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px] animate-float-delayed" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Pre-title badge */}
        <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-400 font-mono tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {personal.location}
        </div>

        {/* Name */}
        <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.05]">
          {personal.name}
        </h1>

        {/* Tagline */}
        <p className="fade-in-up delay-200 text-xl sm:text-2xl text-indigo-400 font-semibold tracking-tight mb-6">
          {personal.tagline}
        </p>

        {/* Bio */}
        <p className="fade-in-up delay-300 text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {personal.bio}
        </p>

        {/* CTA row */}
        <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
          >
            View Projects
          </button>
          {personal.resume && personal.resume !== '#' && (
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              <FileText size={16} />
              Resume
            </a>
          )}
        </div>

        {/* Social icons */}
        <div className="fade-in-up delay-500 flex items-center justify-center gap-6 mt-12">
          {[
          { href: personal.github, icon: GithubIcon, label: 'GitHub' },
            { href: personal.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-400 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-indigo-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
