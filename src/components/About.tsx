import { useLocale } from "../i18n/LocaleContext";
import RichText from "../i18n/RichText";

/** Numeric values are language-independent, so they stay out of the dictionaries. */
const STAT_VALUES = {
  years: "7+",
  clients: "3",
  scaleup: "~2s",
} as const;

export default function About() {
  const { t } = useLocale();

  const stats = [
    { label: t.about.stats.years, value: STAT_VALUES.years },
    { label: t.about.stats.clients, value: STAT_VALUES.clients },
    { label: t.about.stats.scaleup, value: STAT_VALUES.scaleup },
    { label: t.about.stats.domain, value: t.about.stats.domainValue },
  ];

  return (
    <section id="about" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.about.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
              >
                <p className="text-3xl font-extrabold text-accent">{s.value}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
