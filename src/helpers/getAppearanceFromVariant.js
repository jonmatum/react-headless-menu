export function getAppearanceFromVariant(variant, themeName) {
  const isDark = themeName === "dark";

  // Auto appearance logic
  if (variant === "dropdown") return { isDark, appearance: "normal" };
  if (variant === "sidebar" || variant === "topbar")
    return { isDark, appearance: "inverted" };
  // fallback for 'auto' and custom variants
  return { isDark, appearance: "inverted" };
}
