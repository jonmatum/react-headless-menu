import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  Menu,
  getModernPalette,
  getAppearanceFromVariant,
  palettes,
} from "@jonmatum/react-headless-menu";
import { menuData, userScopes } from "@site/src/data/menuData";
import { Switch } from "@headlessui/react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [themeName, setThemeName] = useState("light");
  const [color, setColor] = useState("blue");

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{siteConfig.title}</h1>
            <p className="text-gray-400 text-lg">{siteConfig.tagline}</p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link
                to="/"
                className="bg-white text-gray-800 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
              >
                📘 View Docs
              </Link>
              <Link
                to="/playground"
                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                🚀 Playground
              </Link>
            </div>
          </header>

          <div className="bg-pink-500 text-white p-4 rounded">
            Tailwind works!
          </div>

          <section className="text-white space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">Theme</span>
                <Switch
                  checked={themeName === "dark"}
                  onChange={(checked) =>
                    setThemeName(checked ? "dark" : "light")
                  }
                  className={`$ {
                    themeName === "dark" ? "bg-gray-700" : "bg-gray-400"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition $ {
                      themeName === "dark" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </Switch>
                <span className="text-sm text-gray-300">
                  {themeName === "dark" ? "Dark" : "Light"}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {palettes.map((p) => (
                  <button
                    key={p}
                    onClick={() => setColor(p)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs capitalize border transition 
                      $ {
                        color === p
                          ? "bg-white text-gray-900 shadow"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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

            <p className="text-gray-400">
              Resize the window or switch themes/palettes to see the responsive
              and themeable behavior of the headless menu in action.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {["auto", "topbar", "sidebar", "dropdown"].map((variant) => {
                const theme = getModernPalette(
                  color,
                  getAppearanceFromVariant(variant, themeName),
                );

                return (
                  <div
                    key={variant}
                    className="p-4 bg-gray-800 rounded-xl shadow hover:shadow-lg transition space-y-2 w-full"
                  >
                    <h2 className="font-semibold text-gray-200 capitalize">
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
          </section>

          <footer className="text-xs text-gray-500 text-center pt-12">
            MIT Licensed — &copy; {new Date().getFullYear()} Jonatan Mata
          </footer>
        </div>
      </main>
    </Layout>
  );
}
