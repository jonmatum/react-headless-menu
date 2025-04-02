#!/bin/bash

set -e

echo "🚀 Building playground for GitHub Pages..."
npm run build:playground

# Clean old docs
rm -rf ./docs

# Copy playground build
cp -r ./playground/docs ./docs

# Rewrite relative paths for GitHub Pages
find ./docs/index.html -type f -print0 | while IFS= read -r -d '' file; do
    echo "✅ Updating asset paths in $file"
    sed -i '' 's|src="\./assets|src="../react-headless-menu/assets|g' "$file"
    sed -i '' 's|href="\./assets|href="../react-headless-menu/assets|g' "$file"
done

# Commit and push
echo "✅ Commit & push to GitHub"
git add docs
git commit -m "docs: update playground for GitHub Pages"
git push

# Success message
echo "🌍 Playground ready to publish"
echo "👉 https://jonmatum.github.io/react-headless-menu/"
