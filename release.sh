#!/bin/bash

set -e

echo "==> 🔐 Verifying NPM login..."
npm whoami || npm login

echo "==> 🧹 Cleaning previous build..."
rm -rf dist

echo "==> 🏗 Building library..."
npm run build

echo "==> 🧐 Previewing package contents..."
npm pack --dry-run

read -p "Do you want to publish the package to npm? (yes/no): " confirm
if [ "$confirm" = "yes" ]; then
    echo "==> 🚀 Publishing to npm..."
    npm publish
    echo "==> ✅ Published successfully!"
else
    echo "==> ⏹ Publish cancelled."
fi
