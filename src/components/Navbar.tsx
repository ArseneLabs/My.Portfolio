import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Download, ArrowUpRight, Code2 } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

type Props = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onHireMe: () => void;
};

export default function Navbar({ theme, onToggleTheme, onHireMe }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-slate-200/80 bg-white/80 shadow-ambient backdrop-blur-md dark:border-white/10 dark:bg-obsidian-950/80'
            : 'border-transparent bg-white/60 backdrop-blur-sm dark:bg-obsidian-950/40'
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 pl-1"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-crimson-600 text-white shadow-glow">
            <Code2 className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-obsidian-950" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-obsidian-900 dark:text-white sm:block">
            Arsene JK <span className="text-crimson-600">//</span>{' '}
            <span className="font-normal text-obsidian-500 dark:text-slate-400">Full-Stack & UI/UX</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'text-crimson-600 dark:text-crimson-400'
                  : 'text-obsidian-600 hover:text-obsidian-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-crimson-50 dark:bg-crimson-950/40"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-obsidian-700 transition-all hover:border-crimson-300 hover:text-crimson-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-crimson-500"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'light' ? (
                <motion.span key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="/DUFITIMANA_Arsene_Johnkelly_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="DUFITIMANA_Arsene_Johnkelly_CV.pdf"
            className="hidden items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-sm font-medium text-obsidian-700 transition-all hover:border-crimson-300 hover:text-crimson-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5 sm:flex"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>

          <button
            onClick={onHireMe}
            className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-crimson-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:bg-crimson-700 sm:flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-obsidian-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-3 top-16 z-50 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-obsidian-950/95 lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-obsidian-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/DUFITIMANA_Arsene_Johnkelly_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="DUFITIMANA_Arsene_Johnkelly_CV.pdf"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-obsidian-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  onHireMe();
                }}
                className="rounded-2xl bg-crimson-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-glow"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
