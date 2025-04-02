#!/bin/bash

echo "🚀 Building playground for GitHub Pages..."
npm run build:playground

echo "✅ Commit & push to GitHub"
git add docs
git commit -m "docs: update playground"
git push

echo "🌍 Playground ready to publish"
echo "👉 https://your-github-username.github.io/your-repo-name/"
