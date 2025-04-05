import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Menu } from "@jonmatum/react-headless-menu";
import demoItems from "@site/src/data/demoMenuItems";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <header>
            <h1 className="text-4xl font-bold">{siteConfig.title}</h1>
            <p className="text-gray-400 mt-2 text-lg">{siteConfig.tagline}</p>
          </header>

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

          <section className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Live Example</h2>
            <div className="bg-gray-900 rounded p-4">
              <Menu
                variant="auto"
                items={demoItems}
                color="blue"
                themeName="dark"
                onSelect={(item) => alert(`Selected: ${item.label}`)}
              />
            </div>
          </section>

          <footer className="text-xs text-gray-500 pt-12">
            MIT Licensed — &copy; {new Date().getFullYear()} Jonatan Mata
          </footer>
        </div>
      </main>
    </Layout>
  );
}
