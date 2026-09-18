import { useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

type JobId = keyof Messages["experience"]["jobs"];

/** Reverse-chronological render order, keyed to match the dictionaries. */
const JOB_ORDER: JobId[] = ["senior", "mid", "junior"];

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.experience.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.experience.heading}
          </h2>
        </div>

        <div className="relative border-l-2 border-accent/25 pl-8 sm:pl-10">
          {JOB_ORDER.map((id, idx) => {
            const job = t.experience.jobs[id];
            return (
              <div key={id} className={`relative ${idx !== JOB_ORDER.length - 1 ? "mb-10" : ""}`}>
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-accent shadow-md dark:border-slate-950 sm:-left-[49px]" />
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
