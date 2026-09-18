import { useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

type ProjectId = keyof Messages["projects"]["items"];

/** Render order and language-independent data, keyed to match the dictionaries. */
const PROJECT_ORDER: ProjectId[] = [
  "chessly",
  "cubecommerce",
  "taskforge",
  "solveio",
  "grandmaster",
  "inventoryhub",
];

const PROJECT_META: Record<ProjectId, { emoji: string; github: string; demo: string }> = {
  chessly: { emoji: "♟️", github: "https://github.com", demo: "#" },
  cubecommerce: { emoji: "🧩", github: "https://github.com", demo: "#" },
  taskforge: { emoji: "✅", github: "https://github.com", demo: "#" },
  solveio: { emoji: "🧠", github: "https://github.com", demo: "#" },
  grandmaster: { emoji: "📊", github: "https://github.com", demo: "#" },
  inventoryhub: { emoji: "📦", github: "https://github.com", demo: "#" },
};

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.projects.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.projects.heading}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_ORDER.map((id) => {
            const project = t.projects.items[id];
            const meta = PROJECT_META[id];
            return (
              <article
                key={id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
              >
                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-accent/15 to-accent/5 text-4xl">
                  <span className="transition-transform duration-300 group-hover:scale-110">{meta.emoji}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 border-t border-black/5 pt-4 text-sm font-semibold dark:border-white/10">
                    <a href={meta.github} target="_blank" rel="noreferrer" className="text-slate-600 transition hover:text-accent dark:text-slate-300">
                      {t.projects.codeLink} →
                    </a>
                    <a href={meta.demo} className="text-accent transition hover:brightness-110">
                      {t.projects.demoLink} →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
