/**
 * Fills `{name}` placeholders in a translated string. Placeholders with no
 * matching value are left in place so a missing value is visible, not silent.
 */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
