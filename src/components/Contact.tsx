import { useState } from "react";
import { useLocale } from "../i18n/LocaleContext";
import type { Messages } from "../i18n/locales/en-US";

type ContactInfoId = keyof Messages["contact"]["info"];

/** Icons and destinations are language-independent; `value` is omitted for
 *  entries whose text comes from the dictionary (the location). */
const CONTACT_INFO: { id: ContactInfoId; value?: string; icon: string; href?: string }[] = [
  {
    id: "email",
    value: "johnnes.souza@proton.me",
    icon: "✉️",
    href: "mailto:johnnes.souza@proton.me",
  },
  { id: "phone", value: "+55 (19) 9 9254-9329", icon: "📞", href: "tel:+5519992549329" },
  { id: "location", icon: "📍" },
];

export default function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{t.contact.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{t.contact.subtext}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {CONTACT_INFO.map((info) => {
              const value = info.value ?? t.contact.locationValue;
              return (
                <div
                  key={info.id}
                  className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-xl">
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {t.contact.info[info.id]}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="font-medium text-slate-800 transition hover:text-accent dark:text-slate-100">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-slate-800 dark:text-slate-100">{value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm text-slate-600 dark:text-slate-300">
              {t.contact.availability}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full resize-none rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 sm:w-auto"
            >
              {t.contact.form.submit}
            </button>
            {submitted && (
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                {t.contact.form.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
