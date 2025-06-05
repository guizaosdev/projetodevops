# 🚀 Aplicação Full Stack - Node.js, React e MongoDB

Este repositório contém uma aplicação full stack com **backend em Node.js**, **frontend em React** e **banco de dados MongoDB**, totalmente dockerizada.

Desenvolvido por **Guilherme Ramos**, estudante do 5º período do curso **Sistemas para Internet** – UNIESP.

---

## 🐳 Execução com Docker Compose

Com Docker e Docker Compose instalados, basta clonar o projeto e executá-lo com os comandos abaixo:

```bash
git clone https://github.com/guizaosdev/devopsp5.git
cd projetodevops
cp .env.example .env
docker-compose up --build
```

⚠️ | O projeto deve ser inicializado após a inicialização do Docker Desktop!

A aplicação será iniciada com os seguintes serviços:

- 🛠️ **Backend**: http://localhost:8000  
- 📄 **Swagger (API Docs)**: http://localhost:8000/api-docs  
- 💻 **Frontend**: http://localhost:3000
- 🗃️ **MongoDB**: acessível internamente via Docker (sem configuração manual)

---

## 📦 Tecnologias Principais

### Backend
- Node.js + Express
- Mongoose + MongoDB
- JWT, Bcrypt, dotenv
- Swagger para documentação
- migrate-mongo (versionamento de banco)

### Frontend
- React
- Axios, React Router DOM, React Hook Form, Yup

---

## ✅ Scripts Alternativos

Se preferir rodar manualmente:

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

Feito com dedicação por Guilherme.
