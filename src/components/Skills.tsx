import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Briefcase, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = { Layout, Server, Database, Briefcase };

const accentMap: Record<string, { ring: string; bg: string; text: string; dot: string; chip: string }> = {
  crimson: {
    ring: 'ring-crimson-500/30',
    bg: 'bg-crimson-600',
    text: 'text-crimson-600 dark:text-crimson-400',
    dot: 'bg-crimson-500',
    chip: 'bg-crimson-50 text-crimson-700 dark:bg-crimson-950/40 dark:text-crimson-300',
  },
  emerald: {
    ring: 'ring-emerald-500/30',
    bg: 'bg-emerald-600',
    text: 'text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    chip: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  },
  sky: {
    ring: 'ring-sky-500/30',
    bg: 'bg-sky-600',
    text: 'text-sky-600 dark:text-sky-400',
    dot: 'bg-sky-500',
    chip: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  },
  amber: {
    ring: 'ring-amber-500/30',
    bg: 'bg-amber-600',
    text: 'text-amber-600 dark:text-amber-400',
    dot: 'bg-amber-500',
    chip: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  },
};

const levelWeight: Record<string, string> = {
  Proficient: 'text-obsidian-500 dark:text-slate-400',
  Advanced: 'text-obsidian-700 dark:text-slate-200',
  Expert: 'text-crimson-600 dark:text-crimson-400',
};

export default function Skills() {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
            Skills & Technologies
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
            A full-stack toolkit, end to end.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-obsidian-500 dark:text-slate-400">
            Filter by domain to explore the technologies I use to ship production platforms — from frontend micro-interactions to database optimization.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === 'all'
                ? 'bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-950'
                : 'border border-slate-200 bg-white text-obsidian-600 hover:border-obsidian-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
            }`}
          >
            All Domains
          </button>
          {skillCategories.map((c) => {
            const a = accentMap[c.accent];
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c.id
                    ? `${a.chip} ring-2 ${a.ring}`
                    : 'border border-slate-200 bg-white text-obsidian-600 hover:border-obsidian-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat, idx) => {
              const a = accentMap[cat.accent];
              const Icon = icons[cat.icon] ?? Layout;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-ambient transition-all hover:shadow-lift dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.dot} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`} />

                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${a.bg} text-white shadow-md`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-obsidian-900 dark:text-white">{cat.label}</h3>
                      <div className={`text-xs font-medium ${a.text}`}>{cat.skills.length} technologies</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className={`group/chip inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-obsidian-700 transition-all hover:border-obsidian-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                        {s.name}
                        <span className={`text-[10px] font-semibold uppercase tracking-wide ${levelWeight[s.level]}`}>
                          {s.level}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
