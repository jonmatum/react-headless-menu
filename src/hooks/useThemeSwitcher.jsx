import { useEffect, useState } from "react";

export function useThemeSwitcher() {
  const [themeName, setThemeName] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setThemeName(media.matches ? "dark" : "light");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return [themeName, setThemeName];
}
