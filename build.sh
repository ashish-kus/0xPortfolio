#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Clean old build folders
echo "🧹 Cleaning old build folders..."
rm -rf build/ docs/

# Build the React app
echo "🏗️ Building React app..."
npm run build

# Add custom domain (CNAME) file
echo "ashishkus.com" >build/CNAME

# Copy build output into docs/ (for GitHub Pages)
mkdir -p docs
cp -r build/. docs/

echo "✅ Build complete! The site is ready in docs/ (for GitHub Pages)."
