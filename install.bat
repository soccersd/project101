@echo off
echo.
echo 🚀 Project101 - Installation Script (Windows)
echo ================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed.
    echo    Please download and install from: https://nodejs.org
    echo    Then run this script again.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
echo ✅ Node.js version: %NODE_VER%

:: Check if bun is installed
where bun >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Bun is not installed. Installing...
    powershell -c "irm bun.sh/install.ps1 | iex"
    
    :: Refresh PATH
    set "PATH=%USERPROFILE%\.bun\bin;%PATH%"
)

for /f "tokens=*" %%i in ('bun --version') do set BUN_VER=%%i
echo ✅ Bun version: %BUN_VER%

:: Kill process on port 3000
echo.
echo 🔄 Checking port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /F /PID %%a >nul 2>nul
    echo    Killed process on port 3000
)

:: Clean old files
echo 🧹 Cleaning old files...
if exist node_modules rmdir /s /q node_modules
if exist .next rmdir /s /q .next
if exist bun.lock del /f bun.lock
if exist package-lock.json del /f package-lock.json

:: Install dependencies
echo 📦 Installing dependencies...
call bun install

:: Check if install was successful
if not exist node_modules (
    echo ❌ Bun installation failed. Trying with npm...
    call npm install
)

:: Run development server
echo.
echo 🎉 Starting development server...
echo    Open http://localhost:3000 in your browser
echo.
call bun dev
