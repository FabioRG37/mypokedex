# MyPokedex

MyPokedex é um aplicativo construído com Ionic + Angular que consome dados da [PokéAPI](https://pokeapi.co/) para exibir Pokémons de forma dinâmica e interativa. O projeto apresenta funcionalidades de listagem, busca instantânea, favoritos persistentes e navegação por detalhes.

---

## 🚀 Tecnologias Utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PokéAPI](https://pokeapi.co/)
- HTML5, CSS3 (SCSS), RxJS

---

## 📦 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js `^18.x`
- Ionic CLI `^7.x`
- Angular CLI `^16.x` ou superior

---

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/FabioRG37/mypokedex.git
cd mypokedex
````

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o projeto em ambiente de desenvolvimento**

```bash
ionic serve
```

> O app será aberto automaticamente no navegador (`http://localhost:8100` por padrão)

---

## 📱 Funcionalidades atuais

### 🧾 Tela Inicial (`/home`)

* Listagem de Pokémons paginada (20 por vez)
* Cards com imagem, nome e botão de favorito
* Navegação ao clicar no card
* Layout responsivo em grade (5 cards por linha em telas maiores)
* Efeito de carregamento durante requisições

### 🔍 Busca Instantânea

* Campo de busca na tela inicial
* Apresentação instantânea de Pokémons à medida que o usuário digita
* Funciona com os mais de 1.000 Pokémons disponíveis

### ❤️ Favoritos (`/favorites`)

* Aba de favoritos acessível pelo menu lateral
* Pokémons favoritos são salvos no `localStorage`
* Persistência entre sessões
* Cada card favorito é clicável e leva à página de detalhes

### 📄 Página de Detalhes (`/pokemon-detail/:id`)

* Exibe imagem, nome, tipo e atributos do Pokémon
* Layout personalizado em forma de card
* Preparado para receber gráficos de atributos

---

## 🔜 Próximas funcionalidades (em andamento)

* 📊 Gráfico com os atributos do Pokémon
* 🎨 Melhoria visual na tela de detalhes (cores, tipos, habilidades)
* 📥 Suporte a PWA (Progressive Web App)
* 🗑️ Remoção de favoritos diretamente da lista

---

## 🤝 Contribuição

Este projeto é um estudo pessoal, mas colaborações são bem-vindas via Pull Requests ou Issues.

---

## 📄 Licença

MIT © [Fábio Gonçalves](https://github.com/FabioRG37)

```

---

Se quiser, posso te ajudar a transformar esse README em um [arquivo com badges](f) bonitos ou adicionar [instruções para build e publicação](f). Quer?
```
