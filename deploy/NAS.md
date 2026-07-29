# Deploy num NAS (Synology, QNAP, etc.)

O site é estático — qualquer NAS com servidor web ou Docker serve.

## Opção 1 — Synology (Web Station) — mais simples

### Pré-requisitos
- DSM 7+
- Pacote **Web Station** instalado
- Pacote **Apache HTTP Server 2.4** ou **Nginx** (via Web Station)

### Passos

1. **Build no PC** (ou no NAS se tiver Node via Container Manager):
   ```bash
   npm install && npm run build
   ```

2. **Copiar ficheiros** para o NAS:
   - Pasta destino: `/web/intensebinary` (ou via File Station → `web` → criar pasta `intensebinary`)
   - Copie **todo o conteúdo** da pasta `dist/` para lá (não a pasta `dist` em si)

3. **Web Station** → Portal de serviço virtual:
   - Criar novo portal
   - Tipo: Baseado em nome
   - Nome do anfitrião: `intensebinary.pt` (e `www.intensebinary.pt`)
   - Porta: 80 / 443
   - Raiz do documento: `/web/intensebinary`
   - PHP: desactivado

4. **Certificado SSL** (Painel de Controlo → Segurança → Certificado):
   - Adicionar → Obter certificado do Let's Encrypt
   - Domínio: `intensebinary.pt`
   - Aplicar ao Web Station

5. **Router** — reencaminhar portas 80 e 443 para o IP do NAS

6. **DNS** — registos A `@` e `www` → IP público da sua rede (ou IP fixo)

---

## Opção 2 — Docker (Synology / QNAP / TrueNAS)

Funciona em qualquer NAS com Docker.

### docker-compose.yml

```yaml
services:
  web:
    image: nginx:alpine
    container_name: intensebinary
    ports:
      - "8080:80"
    volumes:
      - ./dist:/usr/share/nginx/html:ro
    restart: unless-stopped
```

### Passos

1. Build: `npm run build`
2. Copie `dist/` e `docker-compose.yml` para uma pasta no NAS (ex.: `/docker/intensebinary/`)
3. No Container Manager / Portainer: `docker compose up -d`
4. Configure o **reverse proxy** do NAS:
   - Origem: `https://intensebinary.pt` → Destino: `http://localhost:8080`
5. SSL via certificado Let's Encrypt do NAS

---

## Opção 3 — QNAP (Web Server)

1. Instale **Web Server** na App Center
2. Copie o conteúdo de `dist/` para `/Web/intensebinary`
3. Virtual Host: `intensebinary.pt` → `/Web/intensebinary`
4. SSL via **myQNAPcloud** ou Let's Encrypt nas definições

---

## DNS com NAS em casa

Se o NAS está na sua rede local:

| Cenário | O que fazer |
|---------|-------------|
| IP fixo em casa | DNS A → IP público + port forwarding 80/443 no router |
| IP dinâmico | Usar **DDNS** do NAS (Synology DDNS, QNAP myQNAPcloud) |
| Sem abrir portas | Cloudflare Tunnel ou Tailscale (mais avançado) |

### Port forwarding no router
- Porta externa 80 → IP do NAS:80
- Porta externa 443 → IP do NAS:443

---

## Testar antes do domínio

Aceda pelo IP local do NAS:
- Synology Web Station: `http://IP-DO-NAS/intensebinary`
- Docker na porta 8080: `http://IP-DO-NAS:8080`

---

## Resumo mínimo

```
PC:  npm run build
NAS: copiar dist/ → pasta web
NAS: Web Station ou Docker nginx
NAS: certificado SSL
Router: portas 80 + 443 → NAS
DNS: A record → IP público
```
