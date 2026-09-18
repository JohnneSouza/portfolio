import { useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

type GroupId = keyof Messages["skills"]["groups"];
type ProficiencyId = keyof Messages["skills"]["proficiency"];

/** Render order and language-independent data, keyed to match the dictionaries. */
const GROUP_ORDER: GroupId[] = [
  "core",
  "frameworks",
  "data",
  "devops",
  "testing",
  "architecture",
];

const GROUP_ICONS: Record<GroupId, string> = {
  core: "☕",
  frameworks: "🌱",
  data: "🗄️",
  devops: "☁️",
  testing: "🧪",
  architecture: "🧩",
};

const PROFICIENCY_ORDER: ProficiencyId[] = [
  "java",
  "reactive",
  "microservices",
  "databases",
  "cloud",
];

const PROFICIENCY_VALUES: Record<ProficiencyId, number> = {
  java: 95,
  reactive: 90,
  microservices: 92,
  databases: 85,
  cloud: 80,
};

export default function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.skills.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.skills.heading}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {GROUP_ORDER.map((id) => {
              const group = t.skills.groups[id];
              return (
                <div
                  key={id}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-lg">
                      {GROUP_ICONS[id]}
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">{t.skills.proficiencyTitle}</h3>
            <div className="space-y-5">
              {PROFICIENCY_ORDER.map((id) => (
                <div key={id}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {t.skills.proficiency[id]}
                    </span>
                    <span className="text-accent font-semibold">{PROFICIENCY_VALUES[id]}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: `${PROFICIENCY_VALUES[id]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">{t.skills.approachTitle}</p>
              <p className="mt-1">{t.skills.approach}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
