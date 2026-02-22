#!/bin/bash

echo "🚀 Project101 - Installation Script"
echo "===================================="

# Detect OS
OS="$(uname -s)"
ARCH="$(uname -m)"
echo "📍 Detected: $OS ($ARCH)"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Installing..."
    
    if [ "$OS" = "Darwin" ]; then
        # macOS - use Homebrew
        if ! command -v brew &> /dev/null; then
            echo "   Installing Homebrew first..."
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        fi
        brew install node
    elif [ "$OS" = "Linux" ]; then
        # Linux - use NodeSource
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    else
        echo "❌ Please install Node.js manually from https://nodejs.org"
        exit 1
    fi
fi

echo "✅ Node.js version: $(node --version)"

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Installing..."
    curl -fsSL https://bun.sh/install | bash
    
    # Source shell config
    export BUN_INSTALL="$HOME/.bun"
    export PATH="$BUN_INSTALL/bin:$PATH"
fi

echo "✅ Bun version: $(bun --version)"

# Kill any process on port 3000
echo "🔄 Checking port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null && echo "   Killed existing process on port 3000"

# Clean install
echo "🧹 Cleaning old files..."
rm -rf node_modules .next bun.lock package-lock.json

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Check if install was successful
if [ ! -d "node_modules" ]; then
    echo "❌ Bun installation failed. Trying with npm..."
    npm install
fi

# Run development server
echo ""
echo "🎉 Starting development server..."
echo "   Open http://localhost:3000 in your browser"
echo ""
bun dev
