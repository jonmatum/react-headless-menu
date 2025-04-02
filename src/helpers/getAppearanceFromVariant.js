export function getAppearanceFromVariant(resolvedVariant, themeName) {
  const isDark = themeName === "dark";

  if (resolvedVariant === "dropdown") return { isDark, appearance: "normal" };
  return { isDark, appearance: "inverted" };
}
