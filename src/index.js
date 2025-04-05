// ========= PUBLIC API =========

// Main Component
import Menu from "./components/Menu";
export { Menu }; // Named export only (preferred)

// Helpers
export { getModernPalette } from "./helpers/getModernPalette";
export { getAppearanceFromVariant } from "./helpers/getAppearanceFromVariant";
export { palettes } from "./helpers/palettes";

// Hooks (optional future exports)
// export * from "./hooks";

// ========= INTERNAL (Optional) =========
// You can later move internal-only exports here if needed
