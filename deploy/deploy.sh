#!/usr/bin/env bash
set -euo pipefail

# Deploy do site Intensebinary para o servidor
# Uso local (build + upload):
#   ./deploy/deploy.sh user@seu-servidor.com
#
# Uso no servidor (build no próprio servidor):
#   ./deploy/deploy.sh --local /var/www/intensebinary

REMOTE="${1:-}"
DEPLOY_PATH="/var/www/intensebinary"

echo "→ A fazer build..."
npm ci
npm run build

if [[ "${REMOTE}" == "--local" ]]; then
  TARGET="${2:-$DEPLOY_PATH}"
  echo "→ A copiar para ${TARGET}..."
  sudo mkdir -p "$TARGET"
  sudo rsync -av --delete dist/ "$TARGET/"
  echo "✓ Site publicado em ${TARGET}"
  exit 0
fi

if [[ -z "$REMOTE" ]]; then
  echo "Uso:"
  echo "  ./deploy/deploy.sh user@servidor.com          # upload via SSH"
  echo "  ./deploy/deploy.sh --local /var/www/intensebinary  # deploy local"
  exit 1
fi

echo "→ A enviar para ${REMOTE}:${DEPLOY_PATH}..."
ssh "$REMOTE" "sudo mkdir -p ${DEPLOY_PATH}"
rsync -avz --delete dist/ "${REMOTE}:${DEPLOY_PATH}/"
echo "✓ Deploy concluído!"
echo ""
echo "Próximos passos no servidor:"
echo "  1. Configurar Nginx (ver deploy/nginx.conf)"
echo "  2. sudo certbot --nginx -d intensebinary.pt -d www.intensebinary.pt"
