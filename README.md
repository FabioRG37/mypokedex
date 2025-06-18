# MyPokedex

Aplicação mobile desenvolvida com **Ionic + Angular** que consome a [PokéAPI](https://pokeapi.co) para listar e exibir detalhes de Pokémons. O projeto simula uma Pokédex moderna e minimalista.

---

## 📱 Funcionalidades

- Tela inicial com grid de Pokémons (nome + imagem)
- Listagem paginada de 20 em 20
- Busca por nome de Pokémon com integração direta à API
- Página de detalhes com visual personalizado para cada Pokémon
- Layout responsivo com cards estilizados (5 por linha)

---

## ⚙️ Requisitos

- [Node.js (v18 ou superior)](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/cli) instalado globalmente:
  
  ```bash
  npm install -g @ionic/cli
````

---

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/FabioRG37/mypokedex.git
cd mypokedex
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode a aplicação**

```bash
ionic serve
```

4. O navegador será aberto automaticamente em `http://localhost:8100`

---

## 🧪 Tecnologias Utilizadas

* **Angular**
* **Ionic Framework**
* **TypeScript**
* **HTML5 / CSS3 (SCSS)**
* **PokéAPI** para consumo dos dados

---

## 📦 Estrutura de diretórios (resumida)

```
src/
│
├── app/
│   ├── home/                  # Página principal com grid e busca
│   ├── pages/
│   │   └── pokemon-detail/    # Detalhes do Pokémon
│   └── services/
│       └── pokemon.service.ts # Serviço para consumir a API
│
└── assets/
```

---

## 📌 Próximas funcionalidades

* [ ] Marcar Pokémons como favoritos
* [ ] Visualizar lista de favoritos
* [ ] Armazenamento local persistente
* [ ] Página inicial com loading suave e animações

---

## 🙌 Autor

**Fábio Gonçalves**
[GitHub](https://github.com/FabioRG37)

---
