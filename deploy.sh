#!/bin/bash
set -e

echo "📁 Preparing /docs folder..."
rm -rf docs
# mkdir -p docs

echo "🚀 Building playground..."
npm run build:playground

# echo "🧱 Building docs..."
# cd docusaurus
# npm install
# npm run build
# cd ..

# Copy landing index.html
# cp index.html docs/index.html

# Copy playground
# cp -R playground/docs docs/playground
cp -R playground/docs docs

# Docs already moved by docusaurus: docs/guide

echo "✅ Committing and pushing to GitHub..."
git add docs
git commit -m "docs: update playground and guide"
git push

echo "🌍 Site is live:"
# echo "Landing:     https://jonmatum.github.io/react-headless-menu/"
# echo "Playground:  https://jonmatum.github.io/react-headless-menu/playground/"
# echo "Docs:        https://jonmatum.github.io/react-headless-menu/guide/"

echo "Playground:  https://jonmatum.github.io/react-headless-menu/"
