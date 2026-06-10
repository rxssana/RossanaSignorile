#!/usr/bin/env bash
set -euo pipefail

# Simple wrapper to load .env (if present) and start decap-server with a
# GitHub Personal Access Token available as GITHUB_TOKEN in the environment.

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env"

if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  export $(grep -v '^#' "$ENV_FILE" | xargs)
  echo "Loaded environment from .env"
else
  echo "No .env file found. If you need to use a GitHub Personal Access Token, create .env from .env.example"
fi

echo "Starting Decap CMS local server..."
npx decap-server
