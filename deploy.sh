#!/bin/bash

set -e

echo "🚀 Building playground for GitHub Pages..."
npm run build:playground

# Clean old docs
rm -rf ./docs

# Copy playground build
cp -r ./playground/docs ./docs

# Commit and push
echo "✅ Commit & push to GitHub"
git add docs
git commit -m "docs: update playground for GitHub Pages"
git push

# Success message
echo "🌍 Playground ready to publish"
echo "👉 https://jonmatum.github.io/react-headless-menu/"
