#!/usr/bin/env bash
# deploy.sh - Deploya decap-auth sul server SSH
# Uso: ./tools/decap-auth/deploy.sh
# Oppure con host custom: REMOTE_HOST=100.66.9.116 ./tools/decap-auth/deploy.sh

set -euo pipefail

REMOTE_HOST="${REMOTE_HOST:-100.66.9.116}"
REMOTE_USER="${REMOTE_USER:-giacomo}"
REMOTE_REPO="${REMOTE_REPO:-/home/giacomo/RossanaSignorile}"
BASIC_USER="${BASIC_USER:-admin}"
BASIC_PASS="${BASIC_PASS:-ChangeMeNow123!}"

echo "==> Connessione a $REMOTE_USER@$REMOTE_HOST ..."

ssh "$REMOTE_USER@$REMOTE_HOST" bash <<EOF
set -euo pipefail

echo "==> Git pull del repository..."
cd "$REMOTE_REPO"
git pull origin main

echo "==> Avvio Docker Compose..."
cd "$REMOTE_REPO/tools/decap-auth"
REPO_ROOT="$REMOTE_REPO" BASIC_USER="$BASIC_USER" BASIC_PASS="$BASIC_PASS" docker compose up -d --build

echo "==> Container attivi:"
docker ps --filter name=decap-auth

echo ""
echo "==> Fatto! Apri http://$REMOTE_HOST/login"
echo "    Basic Auth: $BASIC_USER / $BASIC_PASS"
EOF
