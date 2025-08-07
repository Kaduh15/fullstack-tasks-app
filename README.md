# Projeto Teste

Projeto full-stack com API Node.js/Express + Prisma e frontend React/Vite.

## Setup Rápido

### 1. Banco de Dados (Docker)
```bash
docker run -d \
  --name meu-mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=mydb \
  -e MYSQL_USER=docker \
  -e MYSQL_PASSWORD=docker \
  -p 3306:3306 \
  -v mysql_data:/var/lib/mysql \
  mysql:8.0
```

### 2. Instalar e Executar

**API:**
```bash
cd api
pnpm install
pnpm prisma generate
pnpm prisma db push
pnpm run dev
```

**Web:**
```bash
cd web  
pnpm install
pnpm run dev
```

## URLs
- API: http://localhost:3000
- Web: http://localhost:5173

## Arquivos .env

### api/.env
```env
DATABASE_URL="mysql://root:root@localhost:3306/mydb"
```
