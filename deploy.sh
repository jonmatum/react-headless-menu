#!/bin/bash

set -e

echo "🚀 Building playground for GitHub Pages..."
npm run build:playground

# Clean old docs
rm -rf ./docs

# Copy playground build
cp -r ./playground/docs ./docs

# Rewrite relative paths for GitHub Pages
echo "✅ Updating asset paths in ./docs/index.html"
sed -i '' 's|src="\./assets|src="../react-headless-menu/assets|g' ./docs/index.html
sed -i '' 's|href="\./assets|href="../react-headless-menu/assets|g' ./docs/index.html

# Commit and push
echo "✅ Commit & push to GitHub"
git add docs
git commit -m "docs: update playground for GitHub Pages"
git push

# Success message
echo "🌍 Playground ready to publish"
echo "👉 https://jonmatum.github.io/react-headless-menu/"
