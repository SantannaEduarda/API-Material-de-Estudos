# 📚 API de Cursos e Materiais de Estudo - Tecnologia

Este projeto é uma API REST que disponibiliza **cursos gratuitos** e **materiais de estudo** para pessoas interessadas em aprender tecnologia. A proposta é democratizar o acesso ao conhecimento com conteúdos organizados por **categoria** e **idioma**.

---

## 🚀 Funcionalidades

- 🔎 Listar todos os cursos
- 🔎 Buscar curso por ID
- 🔎 Buscar cursos por categoria
- 🔎 Buscar cursos por idioma
- 📘 Listar todos os materiais
- 📘 Buscar materiais por categoria
- 🎨 Visualização no navegador com interface simples

---

## 🧰 Tecnologias utilizadas

- Node.js
- Express
- UUID (para geração de IDs únicos)
- CORS (para permitir acesso ao front)
- HTML + CSS + JavaScript
- JSON (dados mockados)

---

## 🛠️ Como executar o projeto
- Instale as dependências: npm install
- Inicie a API: node server.js

---

# 🔗 Rotas da API
## 📘 Cursos
- GET /cursos
> Lista todos os cursos.

- GET /cursos/:id
> Retorna um curso específico pelo ID.

- GET /cursos/categoria/:categoria
> Retorna todos os cursos de uma determinada categoria.

## 📙 Materiais
- GET /materiais
> Lista todos os materiais.

- GET /materiais/categoria/:categoria
> Retorna materiais de uma determinada categoria.

### 🔍 Filtros disponíveis via query string:

- /materiais?language=Português
- /materiais?category=Segurança
- /materiais?type=PDF

#### 👩‍💻 Desenvolvido por Maria Eduarda Lopes de Sant'anna

