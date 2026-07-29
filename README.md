# Intensebinary — Website

Site institucional moderno para a **Intensebinary** (Consultoria & Engenharia Técnica), inspirado em [intensebinary.pt](https://intensebinary.pt).

## Funcionalidades

- Design moderno e responsivo
- Seletor de idiomas (PT / EN)
- Secções: Início, Sobre Nós, Serviços, Missão/Visão/Valores, Contacto
- Pacotes de serviços reestruturados com modelos de engajamento
- Animações e contadores de estatísticas

## Tecnologias

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- react-i18next (internacionalização)
- Lucide React (ícones)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Alojar no seu servidor

Sim — este site é **100% estático** (HTML/CSS/JS). Basta fazer build e servir a pasta `dist/`.

### Requisitos do servidor

- Linux (Ubuntu/Debian recomendado)
- **Nginx** ou Apache
- Node.js 20+ (só para fazer o build; em produção não precisa de Node a correr)

### Passo a passo

#### 1. DNS do domínio

No painel do seu registrador (onde comprou o domínio), crie:

| Tipo | Nome | Valor |
|------|------|-------|
| A | `@` | IP do seu servidor |
| A | `www` | IP do seu servidor |

Aguarde 5–30 minutos para propagar.

#### 2. Build local

```bash
git clone https://github.com/tiagosgama90-coder/intensebinary.git
cd intensebinary
git checkout cursor/intensebinary-website-e013
npm install
npm run build
```

A pasta `dist/` contém o site pronto.

#### 3. Enviar para o servidor

```bash
# Opção A — script automático
chmod +x deploy/deploy.sh
./deploy/deploy.sh root@SEU_IP

# Opção B — manual com rsync
rsync -avz --delete dist/ root@SEU_IP:/var/www/intensebinary/
```

#### 4. Configurar Nginx

```bash
# No servidor
sudo apt update && sudo apt install -y nginx
sudo cp deploy/nginx.conf /etc/nginx/sites-available/intensebinary
sudo ln -s /etc/nginx/sites-available/intensebinary /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Edite `server_name` em `nginx.conf` se o domínio for diferente de `intensebinary.pt`.

#### 5. HTTPS gratuito (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d intensebinary.pt -d www.intensebinary.pt
```

O Certbot renova o certificado automaticamente.

### Deploy no próprio servidor

Se clonar o repo directamente no servidor:

```bash
git clone https://github.com/tiagosgama90-coder/intensebinary.git
cd intensebinary
git checkout cursor/intensebinary-website-e013
chmod +x deploy/deploy.sh
./deploy/deploy.sh --local /var/www/intensebinary
```

### Testar localmente antes de publicar

```bash
npm run dev
# Abrir http://localhost:5173
```
