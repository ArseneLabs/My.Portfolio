import { motion } from 'framer-motion';
import {
  Rocket, Code2, FileText, Users, Network, MapPin,
  type LucideIcon,
} from 'lucide-react';
import { experiences } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = { Rocket, Code2, FileText, Users, Network };

const accentMap: Record<string, { bg: string; text: string; ring: string; dot: string }> = {
  crimson: { bg: 'bg-crimson-600', text: 'text-crimson-600 dark:text-crimson-400', ring: 'ring-crimson-500/40', dot: 'bg-crimson-500' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-500/40', dot: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-600', text: 'text-amber-600 dark:text-amber-400', ring: 'ring-amber-500/40', dot: 'bg-amber-500' },
  violet: { bg: 'bg-violet-600', text: 'text-violet-600 dark:text-violet-400', ring: 'ring-violet-500/40', dot: 'bg-violet-500' },
  sky: { bg: 'bg-sky-600', text: 'text-sky-600 dark:text-sky-400', ring: 'ring-sky-500/40', dot: 'bg-sky-500' },
};

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
            Professional Timeline
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
            A trajectory across engineering, delivery & operations.
          </h2>
        </div>

        <div className="relative mt-12 pl-8 sm:pl-0">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-crimson-500/60 via-slate-200 to-transparent sm:left-1/2 sm:-translate-x-1/2 dark:via-white/10" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const a = accentMap[exp.accent];
              const Icon = icons[exp.icon] ?? Code2;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative sm:flex sm:items-center ${isLeft ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Node */}
                  <div className="absolute left-0 top-1.5 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                    <span className={`relative flex h-6 w-6 items-center justify-center rounded-full ${a.bg} text-white shadow-md ring-4 ${a.ring} ring-white dark:ring-obsidian-950`}>
                      <Icon className="h-3 w-3" />
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`sm:w-1/2 ${isLeft ? 'sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                    <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-ambient transition-all hover:shadow-lift dark:border-white/10 dark:bg-white/[0.03]">
                      <div className={`text-xs font-semibold ${a.text}`}>{exp.period}</div>
                      <h3 className="mt-1 font-display text-base font-bold leading-tight text-obsidian-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="mt-1 text-sm font-medium text-obsidian-600 dark:text-slate-300">{exp.org}</div>
                      <div className={`mt-1 flex items-center gap-1 text-[11px] text-obsidian-400 dark:text-slate-500 ${isLeft ? '' : 'sm:justify-end'}`}>
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-obsidian-600 dark:text-slate-300">{exp.description}</p>
                      <ul className={`mt-3 grid gap-1.5 ${isLeft ? '' : 'sm:justify-end'}`}>
                        {exp.achievements.map((ach, ai) => (
                          <li key={ai} className={`flex items-start gap-2 text-xs text-obsidian-600 dark:text-slate-300 ${isLeft ? '' : 'sm:flex-row-reverse sm:text-right'}`}>
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
