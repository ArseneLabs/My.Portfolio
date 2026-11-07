import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Github, Globe, Send, CheckCircle2, MessageSquare, User, AtSign,
} from 'lucide-react';

const channels = [
  { icon: Mail, label: 'Email', value: 'arsenejohnkelly1@gmail.com', href: 'mailto:arsenejohnkelly1@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+(250) 790 913 513', href: 'tel:+250790913513' },
  { icon: MapPin, label: 'Location', value: 'Kigali, Gasabo, Rwanda', href: 'https://maps.google.com/?q=Kigali' },
  { icon: Github, label: 'GitHub', value: 'github.com/ArseneBeats', href: 'https://github.com/ArseneBeats' },
  { icon: Globe, label: 'Live Portfolio', value: 'arsenebeats.github.io/arsene.portfolio/', href: 'https://arsenebeats.github.io/arsene.portfolio/' },
];

const projectTypes = ['Full-Stack Web App', 'UI/UX Design', 'Database/API System', 'Enterprise Consulting'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: projectTypes[0], message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', type: projectTypes[0], message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-500/5 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-xs font-semibold text-crimson-700 dark:border-crimson-500/30 dark:bg-crimson-950/40 dark:text-crimson-300">
            Contact Center
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-obsidian-900 dark:text-white sm:text-4xl">
            Let's architect your next system.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-obsidian-500 dark:text-slate-400">
            Available for full-stack engineering, UI/UX design, and enterprise consulting engagements — remote or on-site in Kigali.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-ambient dark:border-white/10 dark:bg-white/[0.03]">
          <div className="grid lg:grid-cols-5">
            {/* Left: channels */}
            <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/5 dark:from-white/[0.03] dark:to-transparent sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
              <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-crimson-500/10 blur-2xl" />
              <h3 className="font-display text-lg font-bold text-obsidian-900 dark:text-white">Direct channels</h3>
              <p className="mt-1 text-sm text-obsidian-500 dark:text-slate-400">Reach out — I respond within 24 hours.</p>

              <div className="mt-6 grid gap-2.5">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 transition-all hover:border-crimson-300 hover:shadow-ambient dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-crimson-500/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-obsidian-700 transition-colors group-hover:bg-crimson-600 group-hover:text-white dark:bg-white/10 dark:text-slate-200">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-wide text-obsidian-400 dark:text-slate-500">{c.label}</span>
                      <span className="block truncate text-sm font-medium text-obsidian-800 dark:text-slate-200">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-2xl border border-emerald-300/40 bg-emerald-50 px-3.5 py-2.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Currently available for new engagements
              </div>
            </div>

            {/* Right: form */}
            <div className="p-6 sm:p-8 lg:col-span-3">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field icon={User} label="Name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-transparent text-sm text-obsidian-900 placeholder:text-obsidian-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
                    />
                  </Field>
                  <Field icon={AtSign} label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-sm text-obsidian-900 placeholder:text-obsidian-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
                    />
                  </Field>
                </div>

                <Field icon={MessageSquare} label="Project Type">
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-transparent text-sm text-obsidian-900 focus:outline-none dark:text-white dark:[&>option]:bg-obsidian-950"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                <Field icon={MessageSquare} label="Message">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, scope, and timeline..."
                    className="w-full resize-none bg-transparent text-sm text-obsidian-900 placeholder:text-obsidian-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={sent}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-crimson-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-crimson-700 disabled:opacity-90"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message Sent — I'll be in touch
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-obsidian-900 px-5 py-3 text-sm font-semibold text-white shadow-lift dark:bg-white dark:text-obsidian-950"
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 dark:text-emerald-600" />
              Thanks {form.name || 'there'} — your message has been received.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  icon: Icon, label, children,
}: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <label className="group block">
      <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-obsidian-400 dark:text-slate-500">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 transition-all focus-within:border-crimson-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-crimson-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:focus-within:bg-white/[0.05]">
        {children}
      </div>
    </label>
  );
}
