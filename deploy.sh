#!/usr/bin/env bash
set -euo pipefail

echo "=========================================================="
echo "   NETDESK TKJ - GITHUB & ANDROID DEPLOYMENT HELPER"
echo "   By Muhammad Fariz Ramadhan (SMK Kartika X-1 & Ditjenpas)"
echo "=========================================================="

if [ ! -d ".git" ]; then
  git init
  echo "✓ Git repository diinisialisasi."
fi

# Pastikan branch main
git branch -M main

# Copy web files ke www untuk Capacitor Android
echo "Syncing asset ke folder Android..."
mkdir -p www
cp index.html style.css app.js icon.svg manifest.json www/
npx cap sync android 2>/dev/null || true

# Add & commit
git add .
git commit -m "feat: NetDesk TKJ - IT Helpdesk & Network Asset Management v1.0" || echo "Tidak ada perubahan baru untuk di-commit."

echo ""
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || true)

if [ -n "$CURRENT_REMOTE" ]; then
  echo "Remote origin saat ini terdeteksi: $CURRENT_REMOTE"
  echo "Tekan ENTER untuk push ke remote ini, atau ketik URL GitHub baru:"
  read -r NEW_REMOTE
  if [ -n "$NEW_REMOTE" ]; then
    git remote set-url origin "$NEW_REMOTE"
  fi
else
  echo "Masukkan URL Repository GitHub lo (contoh: https://github.com/nzadev/netdesk-tkj.git):"
  read -r REPO_URL
  if [ -n "$REPO_URL" ]; then
    git remote add origin "$REPO_URL"
  fi
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Mengirim commit ke GitHub (main)..."
  git push -u origin main
  echo ""
  echo "✓ Berhasil di-push ke GitHub!"
  echo "✓ GitHub Pages & Android APK Build otomatis aktif di tab Actions repository lo!"
fi
