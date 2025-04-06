/**
 * React Headless Menu — Public API
 *
 * This file exposes the main exports of the library:
 * - `Menu`: the core headless menu component
 * - `getModernPalette`: helper to generate color palettes
 * - `getAppearanceFromVariant`: helper to resolve theme appearance
 * - `palettes`: supported base color palette names
 *
 * @module react-headless-menu
 */

/**
 * The main headless menu component.
 * @see {@link Menu}
 */
export { default as Menu } from "./components/Menu";

/**
 * TailwindCSS palette helper.
 * @function
 */
export {
  getModernPalette,
  getAppearanceFromVariant,
  palettes,
} from "./helpers";

// ========= HOOKS =========
// (Uncomment when hooks are available)
/**
 * Custom hooks (if available).
 * @namespace Hooks
 */
// export * from "./hooks";
