# 🍔 API de Pedidos para Lanchonete

API backend desenvolvida em Node.js para gerenciamento de pedidos de uma lanchonete.

## 🚀 Funcionalidades

* Cadastro e login de usuários
* Autenticação com JWT
* Controle de acesso (CLIENTE / ADMIN)
* Cadastro e listagem de produtos
* Criação de pedidos
* Pedido com retirada ou delivery
* Cálculo automático de total
* Atualização de status do pedido (ADMIN)

---

## 🧱 Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* JWT (JSON Web Token)
* Bcrypt

---

## 📦 Estrutura do projeto

```txt
src/
  controllers/
  routes/
  middlewares/
  database/
  app.js
  server.js
```

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/nizuG/api-cardapio.git
cd seu-repo
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/pedidos"
JWT_SECRET="seuSegredo"
```

### 4. Rodar migrations

```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor

```bash
npm run dev
```

Servidor rodando em:

```txt
http://localhost:3000
```

---

## 🔐 Autenticação

Utiliza JWT.

Envie o token no header:

```txt
Authorization: Bearer SEU_TOKEN
```

---

## 📌 Endpoints principais

### Usuário

```txt
POST /api/usuarios
POST /api/login
GET  /api/perfil
```

### Produtos

```txt
GET  /api/produtos
POST /api/produtos (ADMIN)
```

### Pedidos

```txt
POST /api/pedidos
GET  /api/pedidos
GET  /api/admin/pedidos (ADMIN)
PATCH /api/pedidos/:id/status (ADMIN)
```

---

## 🧠 Regras de negócio

* Pedido deve ter pelo menos um item
* Total é calculado no backend
* Cliente vê apenas seus pedidos
* Admin pode gerenciar produtos e pedidos
* Endereço é obrigatório para DELIVERY

---

## 📈 Status do projeto

Projeto finalizado para fins de portfólio 🚀

---

## 👨‍💻 Autor

Desenvolvido por Gustavo Macedo
