import { motion } from 'framer-motion';
import { Github, Mail, Phone, Linkedin, Check, Download } from 'lucide-react';

const checklist = [
  'Full-Stack Web Application Development (Django, Laravel, React, PHP)',
  'End-to-End UI/UX Design, Wireframing & Design Systems',
  'Database Architecture & Optimization (MySQL, Oracle DB)',
  'Enterprise Bid Preparation, IT Operations & System Diagnostics',
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ArseneLabs', value: 'ArseneLabs' },
  { icon: Mail, label: 'Email', href: 'mailto:arsenejohnkelly1@gmail.com', value: 'arsenejohnkelly1@gmail.com' },
  { icon: Phone, label: 'Phone', href: 'tel:+250790913513', value: '+(250) 790 913 513' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arsenejohnkelly', value: 'arsenejohnkelly' },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: photo + socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Decorative frame */}
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-crimson-500/20 via-transparent to-emerald-400/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-lift dark:border-white/10 dark:bg-white/[0.03]">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-obsidian-900">
                  <img
                    src="/profile.png"
                    alt="DUFITIMANA Arsene Johnkelly"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                {/* Floating badge with CV link */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 px-4 py-3 backdrop-blur-md dark:bg-obsidian-950/80">
                  <div>
                    <div className="text-sm font-semibold text-obsidian-900 dark:text-white">DUFITIMANA Arsene J.</div>
                    <div className="text-[11px] text-obsidian-500 dark:text-slate-400">Full-Stack Engineer · UI/UX</div>
                  </div>
                  <a
                    href="/DUFITIMANA_Arsene_Johnkelly_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="DUFITIMANA_Arsene_Johnkelly_CV.pdf"
                    title="Download Official CV"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson-600 text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-3 py-2.5 text-left transition-all hover:border-crimson-300 hover:shadow-ambient dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-crimson-500/40"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-obsidian-700 transition-colors group-hover:bg-crimson-600 group-hover:text-white dark:bg-white/10 dark:text-slate-200">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-wide text-obsidian-400 dark:text-slate-500">{s.label}</span>
                      <span className="block truncate text-xs font-medium text-obsidian-800 dark:text-slate-200">{s.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: narrative */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
              About & Value Proposition
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
              Engineering systems that meet strict business standards.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-obsidian-600 dark:text-slate-300">
              I combine deep backend data modeling with thoughtful product design. From normalized databases and secure
              REST APIs to fluid, high-conversion interfaces — every layer is engineered with intent. I also bring
              experience in enterprise bid management, technical proposals, and front-desk coordination at
              <span className="font-semibold text-obsidian-900 dark:text-white"> NIMEN General Business</span>, ensuring
              software meets strict business standards and real-world compliance.
            </p>

            <div className="mt-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-obsidian-400 dark:text-slate-500">
                What I Do Best
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {checklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 transition-all hover:border-crimson-200 hover:shadow-ambient dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-crimson-500/30"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug text-obsidian-700 dark:text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
