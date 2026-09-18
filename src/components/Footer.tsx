import { useLocale } from "../i18n/LocaleContext";
import { format } from "../i18n/format";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-black/5 px-5 py-8 sm:px-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>{format(t.footer.copyright, { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
