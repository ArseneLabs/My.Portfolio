import { motion } from 'framer-motion';
import { ArrowDown, Github, Globe, Sparkles, MapPin, Download } from 'lucide-react';
import { useCountUp, useInView } from '@/hooks/useCountUp';

const metrics = [
  { value: 10, suffix: '+', label: 'Production Systems & Enterprise Platforms' },
  { value: 100, suffix: '%', label: 'On-Time Delivery & Bid Compliance' },
  { value: null, text: 'Full-Stack', label: 'Backend Logic + Modern UI/UX Design' },
  { value: null, text: 'Kigali, RW', label: 'Available Worldwide & Remote' },
];

function MetricCard({ m, index, start }: { m: (typeof metrics)[number]; index: number; start: boolean }) {
  const count = useCountUp(m.value ?? 0, 1800, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-ambient backdrop-blur transition-all hover:shadow-lift dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-crimson-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="font-display text-2xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-3xl">
          {m.value !== null ? (
            <>
              {Math.round(count)}
              <span className="text-crimson-600 dark:text-crimson-400">{m.suffix}</span>
            </>
          ) : (
            <span className="text-gradient">{m.text}</span>
          )}
        </div>
        <div className="mt-1 text-xs leading-snug text-obsidian-500 dark:text-slate-400">{m.label}</div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-crimson-500/10 blur-[120px] dark:bg-crimson-600/15" />
      <div className="absolute right-[8%] top-[30%] -z-10 h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-[100px]" />

      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Based in Kigali, Rwanda
            <span className="text-emerald-300/60">•</span>
            Available for Full-Stack & UI/UX Roles
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-7 max-w-4xl text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-obsidian-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          Architecting High-Scale Systems.
          <br />
          <span className="text-gradient">Designing Intuitive Interfaces.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-obsidian-600 dark:text-slate-300 sm:text-lg"
        >
          Full-Stack Software Engineer & UI/UX Specialist with deep expertise across modern web platforms.
          Engineering normalized databases & secure REST APIs (Django, Laravel, MySQL) alongside fluid,
          high-conversion interfaces (React, TypeScript, Tailwind CSS).
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full bg-crimson-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-crimson-700"
          >
            Explore Featured Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <a
            href="/DUFITIMANA_Arsene_Johnkelly_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="DUFITIMANA_Arsene_Johnkelly_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-obsidian-800 transition-all hover:border-crimson-300 hover:text-crimson-600 hover:shadow-ambient dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a
            href="https://github.com/ArseneLabs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-obsidian-800 transition-all hover:border-obsidian-300 hover:shadow-ambient dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://eastafricantts.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-obsidian-800 transition-all hover:border-obsidian-300 hover:shadow-ambient dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20"
          >
            <Globe className="h-4 w-4" /> Live Systems
          </a>
        </motion.div>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={i} m={m} index={i} start={inView} />
          ))}
        </div>

        {/* Location chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-obsidian-400 dark:text-slate-500"
        >
          <MapPin className="h-3.5 w-3.5" /> Kigali, Gasabo, Rwanda
          <span className="mx-1">·</span>
          <Sparkles className="h-3.5 w-3.5 text-crimson-500" /> Currently architecting EATTS production platform
        </motion.div>
      </div>
    </section>
  );
}
