#!/bin/bash
set -e

# Clean old build folders
echo "🧹 Cleaning old build folders..."
rm -rf ./dist/* ./docs
# Build the React app with Vite
echo "🏗️ Building React app..."
npm run build

# Add CNAME
echo "🌐 Adding CNAME..."
mkdir -p dist
echo "ashishkus.com" >dist/CNAME

# Copy dist/ to docs/ for GitHub Pages
echo "📂 Moving build to docs..."
mkdir -p docs
cp -r dist/. docs/

echo "✅ Build complete! Ready to push 🚀"
