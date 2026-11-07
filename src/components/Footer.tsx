import { Code2, Heart, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-white/60 py-10 dark:border-white/10 dark:bg-obsidian-980/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-crimson-600 text-white shadow-glow">
              <Code2 className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold text-obsidian-900 dark:text-white">DUFITIMANA Arsene Johnkelly</div>
              <div className="text-[11px] text-obsidian-500 dark:text-slate-400">Full-Stack Engineer & UI/UX Designer</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://github.com/ArseneBeats" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-obsidian-600 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:text-slate-300" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="mailto:arsenejohnkelly1@gmail.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-obsidian-600 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:text-slate-300" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-1 flex h-9 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-medium text-obsidian-600 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:text-slate-300"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Top
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-5 text-center dark:border-white/5 sm:flex-row sm:text-left">
          <p className="text-xs text-obsidian-500 dark:text-slate-400">
            © 2026 DUFITIMANA Arsene Johnkelly. Engineered with precision.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-obsidian-400 dark:text-slate-500">
            Built with React, Tailwind & Framer Motion <Heart className="h-3 w-3 fill-crimson-500 text-crimson-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
