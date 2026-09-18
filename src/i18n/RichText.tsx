import { Fragment } from "react";

const BOLD_CLASS = "text-slate-900 dark:text-white";

/**
 * Renders `**emphasis**` markers inside a translated string as <strong>, so
 * locale files can carry inline emphasis as plain text instead of JSX.
 */
export default function RichText({ text }: { text: string }) {
  const segments = text.split("**");

  return (
    <>
      {segments.map((segment, index) =>
        index % 2 === 1 ? (
          <strong key={index} className={BOLD_CLASS}>
            {segment}
          </strong>
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        ),
      )}
    </>
  );
}
