import { useState } from "react";
import { Switch } from "@headlessui/react";
import Menu from "../src/components/Menu";
import { getModernPalette } from "../src/helpers/getModernPalette";
import { getAppearanceFromVariant } from "../src/helpers/getAppearanceFromVariant";
import { palettes } from "../src/helpers/palettes";

// Import externalized menuData & userScopes
import { menuData, userScopes } from "./data/menuData";

// Playground Component
export default function App() {
  const [themeName, setThemeName] = useState("light");
  const [color, setColor] = useState("blue");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex flex-col space-y-6">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          ⚡ React Headless Menu Playground
        </h1>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Theme</span>
            <Switch
              checked={themeName === "dark"}
              onChange={(checked) => setThemeName(checked ? "dark" : "light")}
              className={`${
                themeName === "dark" ? "bg-gray-800" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  themeName === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </Switch>
            <span className="text-sm text-gray-600">
              {themeName === "dark" ? "Dark" : "Light"}
            </span>
          </div>

          {/* Color Palette Switcher */}
          <div className="flex flex-wrap gap-1">
            {palettes.map((p) => (
              <button
                key={p}
                onClick={() => setColor(p)}
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs capitalize border transition 
            ${
              color === p
                ? "bg-black text-white shadow"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
              >
                <span
                  className={`w-3 h-3 rounded-full bg-${p}-500 border border-${p}-700`}
                ></span>
                {p}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Description */}
      <p className="max-w-7xl mx-auto text-gray-600">
        Easily switch between <strong>light</strong> and <strong>dark</strong>{" "}
        themes, and experiment with different color palettes live. Resize the
        screen to see how the <strong>auto</strong> variant adapts between a{" "}
        <strong>topbar</strong> and a <strong>dropdown</strong> menu.
      </p>

      {/* Variants Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {["auto", "topbar", "sidebar", "dropdown"].map((variant) => {
          const theme = getModernPalette(
            color,
            getAppearanceFromVariant(variant, themeName)
          );

          return (
            <div
              key={variant}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition space-y-2 w-full"
            >
              <h2 className="font-semibold text-gray-700 capitalize">
                {variant} Variant
              </h2>
              <Menu
                items={menuData}
                userScopes={userScopes}
                variant={variant}
                color={color}
                themeName={themeName}
              />
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-400 text-center mt-6 max-w-7xl mx-auto">
        React Headless Menu • Open Source • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
