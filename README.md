````markdown
# MyPokédex

Projeto desenvolvido com **Ionic + Angular**, que consome a [PokeAPI](https://pokeapi.co) para listar e exibir detalhes dos Pokémons.

O objetivo principal é praticar conceitos de desenvolvimento mobile híbrido com Angular e Ionic, utilizando requisições HTTP, navegação entre páginas, grid responsivo e estilos modernos com componentes do Ionic.

---

## 🔥 Funcionalidades

- Tela inicial com **listagem de 20 Pokémons** (imagem + nome).
- Layout com **cards organizados em grid (5 por linha)**.
- **Skeleton loader** enquanto os dados são carregados.
- Navegação para **detalhes do Pokémon** ao clicar no card.
- Tela de detalhes com:
  - Card estilizado (fundo prateado, cantos arredondados, sombra).
  - Imagem maior do Pokémon.
  - Informações: nome, altura, peso, base XP e tipos.
  - Botões **“Anterior”** e **“Próximo”** para navegar entre Pokémons por ID.

---

## 📦 Requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (recomendado: versão 18.x ou superior)
- [npm](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instalação global)
- [Angular CLI](https://angular.io/cli) (instalação global)

---

## 🧰 Instalação passo a passo

### 1. Clone o repositório

```bash
git clone https://github.com/FabioRG37/mypokedex.git
cd mypokedex
````

### 2. Instale o Ionic e Angular CLI (caso ainda não tenha)

```bash
npm install -g @ionic/cli
npm install -g @angular/cli
```

### 3. Instale as dependências do projeto

```bash
npm install
```

### 4. Rode o projeto localmente

```bash
ionic serve
```

> Isso abrirá o app no seu navegador padrão. Se não abrir automaticamente, acesse `http://localhost:8100`.

---

## 🗂️ Estrutura de diretórios

```
src/
├── app/
│   ├── home/                 # Tela inicial
│   ├── pages/
│   │   └── pokemon-detail/   # Tela de detalhes
│   └── services/
│       └── pokemon.service.ts  # Serviço para comunicação com a API
├── assets/
└── theme/
```

---

## ✨ Tecnologias utilizadas

* Ionic Framework
* Angular
* TypeScript
* RxJS
* HTML e SCSS
* [PokeAPI](https://pokeapi.co)

---

## 🔜 Funcionalidades futuras

* Filtro por nome ou tipo de Pokémon
* Scroll infinito ou botão “Carregar mais”
* Marcar Pokémons como favoritos (armazenamento local)
* Gráfico com os stats base
* Instalação como PWA (Progressive Web App)

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---

## 🙋‍♂️ Autor

Desenvolvido por [Fábio Gonçalves](https://github.com/FabioRG37)
