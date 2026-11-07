import { motion } from 'framer-motion';
import {
  GraduationCap, BookOpen, BadgeCheck, Sparkles, Database, Server,
  ShieldCheck, CheckCircle2, type LucideIcon,
} from 'lucide-react';
import { credentials } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = {
  GraduationCap, BookOpen, BadgeCheck, Sparkles, Database, Server, ShieldCheck, CheckCircle2,
};

const accentMap: Record<string, { bg: string; text: string; soft: string }> = {
  crimson: { bg: 'bg-crimson-600', text: 'text-crimson-600 dark:text-crimson-400', soft: 'bg-crimson-50 dark:bg-crimson-950/40' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', soft: 'bg-emerald-50 dark:bg-emerald-950/40' },
  sky: { bg: 'bg-sky-600', text: 'text-sky-600 dark:text-sky-400', soft: 'bg-sky-50 dark:bg-sky-950/40' },
  amber: { bg: 'bg-amber-600', text: 'text-amber-600 dark:text-amber-400', soft: 'bg-amber-50 dark:bg-amber-950/40' },
  violet: { bg: 'bg-violet-600', text: 'text-violet-600 dark:text-violet-400', soft: 'bg-violet-50 dark:bg-violet-950/40' },
  rose: { bg: 'bg-rose-600', text: 'text-rose-600 dark:text-rose-400', soft: 'bg-rose-50 dark:bg-rose-950/40' },
  cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600 dark:text-cyan-400', soft: 'bg-cyan-50 dark:bg-cyan-950/40' },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600 dark:text-indigo-400', soft: 'bg-indigo-50 dark:bg-indigo-950/40' },
};

export default function Credentials() {
  return (
    <section id="credentials" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
            Education & Certifications
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
            Verified credentials, continuously growing.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, i) => {
            const a = accentMap[c.accent];
            const Icon = icons[c.icon] ?? GraduationCap;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-ambient transition-all hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${a.bg} text-white shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${a.soft} ${a.text}`}>
                    {c.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-sm font-bold leading-tight text-obsidian-900 dark:text-white">
                  {c.title}
                </h3>
                <div className="mt-1 text-xs text-obsidian-500 dark:text-slate-400">{c.issuer}</div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/5">
                  <span className="text-[11px] font-medium text-obsidian-400 dark:text-slate-500">{c.period}</span>
                  {c.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
