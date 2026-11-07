import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  CheckCircle2,
  Calendar,
  User,
  Tag,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const filters = ['All', 'Full-Stack', 'E-Commerce & Logistics', 'Enterprise & Management'] as const;

const accentMap: Record<string, { ring: string; bg: string; text: string; soft: string; gradient: string }> = {
  crimson: { ring: 'ring-crimson-500/30', bg: 'bg-crimson-600', text: 'text-crimson-600 dark:text-crimson-400', soft: 'bg-crimson-50 text-crimson-700 dark:bg-crimson-950/40 dark:text-crimson-300', gradient: 'from-crimson-600 to-rose-500' },
  emerald: { ring: 'ring-emerald-500/30', bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', soft: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300', gradient: 'from-emerald-600 to-teal-500' },
  amber: { ring: 'ring-amber-500/30', bg: 'bg-amber-600', text: 'text-amber-600 dark:text-amber-400', soft: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300', gradient: 'from-amber-600 to-orange-500' },
  sky: { ring: 'ring-sky-500/30', bg: 'bg-sky-600', text: 'text-sky-600 dark:text-sky-400', soft: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300', gradient: 'from-sky-600 to-blue-500' },
  violet: { ring: 'ring-violet-500/30', bg: 'bg-violet-600', text: 'text-violet-600 dark:text-violet-400', soft: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300', gradient: 'from-violet-600 to-purple-500' },
  rose: { ring: 'ring-rose-500/30', bg: 'bg-rose-600', text: 'text-rose-600 dark:text-rose-400', soft: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300', gradient: 'from-rose-600 to-pink-500' },
  cyan: { ring: 'ring-cyan-500/30', bg: 'bg-cyan-600', text: 'text-cyan-600 dark:text-cyan-400', soft: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300', gradient: 'from-cyan-600 to-teal-500' },
  indigo: { ring: 'ring-indigo-500/30', bg: 'bg-indigo-600', text: 'text-indigo-600 dark:text-indigo-400', soft: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300', gradient: 'from-indigo-600 to-blue-500' },
};

const statusStyle: Record<Project['status'], string> = {
  'Live Production': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  'Client System': 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  'Case Study': 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300',
};

function MockupHeader({ project }: { project: Project }) {
  const a = accentMap[project.accent];
  return (
    <div className="relative h-32 w-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-90`} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-display text-xl font-bold text-white drop-shadow sm:text-2xl">{project.shortTitle}</div>
          <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/80">{project.category}</div>
        </div>
      </div>
      {/* Browser dots */}
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
      </div>
      {project.badge && (
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-obsidian-900 shadow">
          {project.badge}
        </div>
      )}
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-obsidian-600 dark:bg-white/10 dark:text-slate-300">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-obsidian-400 dark:text-slate-500">{label}</div>
        <div className="text-sm font-medium text-obsidian-800 dark:text-slate-200">{value}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selected]);

  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
            Featured Projects
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
            Production systems, shipped and live.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-obsidian-500 dark:text-slate-400">
            Eight platforms spanning full-stack web, e-commerce & logistics, and enterprise management — each with full architecture breakdown.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-crimson-600 text-white shadow-glow'
                  : 'border border-slate-200 bg-white text-obsidian-600 hover:border-obsidian-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => {
              const a = accentMap[p.accent];
              return (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-ambient transition-all hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <MockupHeader project={p} />

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyle[p.status]}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {p.status}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-wide ${a.text}`}>{p.category}</span>
                    </div>

                    <h3 className="mt-3 font-display text-base font-bold leading-tight text-obsidian-900 dark:text-white">
                      {p.title}
                    </h3>
                    <div className="mt-1 text-xs text-obsidian-500 dark:text-slate-400">{p.role} · {p.duration}</div>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-obsidian-600 dark:text-slate-300">
                      {p.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-obsidian-600 dark:bg-white/10 dark:text-slate-300">
                          {s}
                        </span>
                      ))}
                      {p.stack.length > 4 && (
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-obsidian-400 dark:bg-white/5 dark:text-slate-500">
                          +{p.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-white/5">
                      <button
                        onClick={() => setSelected(p)}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-obsidian-900 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-obsidian-800 dark:bg-white dark:text-obsidian-950 dark:hover:bg-slate-200"
                      >
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-obsidian-600 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:text-slate-300"
                          aria-label="Live preview"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <a
                          href="https://github.com/ArseneLabs"
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-obsidian-600 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:text-slate-300"
                          aria-label="Source code"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian-950/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-lift dark:border-white/10 dark:bg-obsidian-950"
            >
              <MockupHeader project={selected} />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-obsidian-800 shadow transition hover:bg-white dark:bg-obsidian-900 dark:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyle[selected.status]}`}>
                    {selected.status}
                  </span>
                  {selected.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                      <Sparkles className="h-3 w-3" /> {selected.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-obsidian-900 dark:text-white">
                  {selected.title}
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Detail icon={User} label="Role" value={selected.role} />
                  <Detail icon={Calendar} label="Duration" value={selected.duration} />
                  <Detail icon={Tag} label="Category" value={selected.category} />
                  <Detail icon={CheckCircle2} label="Status" value={selected.status} />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-obsidian-600 dark:text-slate-300">{selected.summary}</p>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-obsidian-400 dark:text-slate-500">
                    Architectural Highlights
                  </div>
                  <ul className="mt-3 grid gap-2">
                    {selected.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-obsidian-700 dark:text-slate-200">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-white">
                          <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-obsidian-400 dark:text-slate-500">
                    Tech Stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.stack.map((s) => (
                      <span key={s} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-obsidian-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {selected.url && (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-crimson-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-crimson-700"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Preview / Website
                    </a>
                  )}
                  <a
                    href="https://github.com/ArseneLabs"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-obsidian-800 transition hover:border-obsidian-300 dark:border-white/10 dark:text-white dark:hover:border-white/20"
                  >
                    <Github className="h-4 w-4" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
