# 📚 Gerenciador de Alunos

Projeto fullstack simples utilizando **Node.js + Express + SQLite** no backend e **React + TypeScript + Zustand + Material UI** no frontend.

O sistema permite:
- ✅ Listar alunos
- ➕ Adicionar novo aluno (com validação de duplicados)
- ✏️ Editar aluno
- 🗑️ Excluir aluno (com caixa de confirmação)

---

## 📁 Estrutura do Projeto

```
atividade_api2/
├── backend/     # API com Node.js, Express e SQLite
└── frontend/    # Aplicação React com Zustand e MUI
```

---

## ⚙️ Requisitos

- Node.js v16+ (https://nodejs.org)
- Yarn (https://yarnpkg.com)
- Git (https://git-scm.com)

---

## 🚀 Como rodar o projeto

### 🔧 Backend

1. Acesse o diretório:

```bash
cd backend
```

2. Instale as dependências:

```bash
yarn
```

3. Inicie o servidor:

```bash
yarn dev
```

> O servidor ficará disponível em `http://localhost:3000`

---

### 💻 Frontend

1. Acesse o diretório:

```bash
cd frontend
```

2. Instale as dependências:

```bash
yarn
```

3. Inicie o projeto React:

```bash
yarn dev
```

> A aplicação estará disponível em `http://localhost:5173`

---

## 🛠 Tecnologias utilizadas

### Backend:
- Node.js
- Express
- SQLite
- CORS
- TypeScript

### Frontend:
- React
- TypeScript
- Zustand
- Axios
- React Hook Form
- Material UI (MUI)

---

## 🧪 Funcionalidades extras

- ❌ Bloqueio de nomes duplicados no cadastro
- 📝 Modo de edição no formulário
- 🧼 Cancelar edição
- ✅ Feedback visual amigável (erros e ações)
- 🔒 Confirmação ao excluir aluno

---

## 📄 Licença

MIT © Bruno Dias de Vasconcelos
