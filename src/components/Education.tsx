import { useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

type DegreeId = keyof Messages["education"]["degrees"];

/** Render order and icons, keyed to match the dictionaries. */
const DEGREE_ORDER: DegreeId[] = ["postgrad", "bachelor", "technical"];

const DEGREE_ICONS: Record<DegreeId, string> = {
  postgrad: "🔐",
  bachelor: "🎓",
  technical: "🤖",
};

export default function Education() {
  const { t } = useLocale();

  return (
    <section id="education" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.education.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.education.heading}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">{t.education.educationTitle}</h3>
            <div className="space-y-4">
              {DEGREE_ORDER.map((id) => {
                const degree = t.education.degrees[id];
                return (
                  <div key={id} className="flex items-start gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl">
                      {DEGREE_ICONS[id]}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{degree.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{degree.place}</p>
                      {/* The resume gave no dates for some degrees — omit the line
                          rather than invent one. */}
                      {degree.period ? (
                        <p className="text-xs font-medium text-accent">{degree.period}</p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">{t.education.certificationsTitle}</h3>
            {/* `certifications` is an empty record until there are real ones to list.
                When you add entries to the dictionaries, restore a CERTIFICATION_ORDER
                array and an icon map here, keyed like DEGREE_ORDER above. */}
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl">
                📜
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.education.certificationsEmpty}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
