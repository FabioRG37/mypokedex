# MyPokedex

MyPokedex é um aplicativo desenvolvido com **Ionic + Angular**, que consome dados da [PokéAPI](https://pokeapi.co/) para apresentar Pokémons de forma visual, interativa e dinâmica. O projeto inclui funcionalidades de listagem paginada, busca instantânea, favoritos persistentes, tela de detalhes com atributos e navegação.

---

## 🚀 Tecnologias Utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PokéAPI](https://pokeapi.co/)
- HTML5, SCSS, RxJS

---

## 📦 Pré-requisitos

Antes de rodar o projeto, instale:

- Node.js `^18.x`
- Ionic CLI `^7.x`
- Angular CLI `^16.x` ou superior

---

## ⚙️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/FabioRG37/mypokedex.git
cd mypokedex

# Instale as dependências
npm install

# Rode em ambiente de desenvolvimento
ionic serve
````

A aplicação abrirá automaticamente no navegador (geralmente em `http://localhost:8100`).

---

## 📱 Funcionalidades

### 🧾 Página Inicial (`/home`)

* Listagem paginada de Pokémons (20 por vez)
* Layout em cards responsivos:

  * 1 card por linha em telas pequenas
  * 2 em tablets
  * 4 em telas grandes
* Botão "Carregar mais"
* Spinner de carregamento enquanto busca dados
* Cards clicáveis, levam à página de detalhes
* Marcar/Desmarcar como favorito com `ion-icon`
* Busca instantânea por nome com filtro dinâmico

---

### 🔍 Busca Inteligente

* Campo de busca acima da listagem
* Filtro por nome, sensível à digitação
* Funciona mesmo com mais de 1000 Pokémons cadastrados

---

### ❤️ Favoritos (`/favorites`)

* Acesso pelo menu lateral
* Exibe Pokémons marcados como favoritos (dados buscados diretamente da API)
* Armazenamento local no `localStorage`
* Funciona independentemente da listagem principal
* Cards clicáveis, levam aos detalhes
* Layout consistente com a página inicial

---

### 📄 Tela de Detalhes (`/pokemon-detail/:id`)

* Visual moderno em card grande
* Imagem centralizada e aumentada
* Exibição de:

  * Nome
  * Tipos (com `ion-chip`)
  * Altura e peso convertidos (metros / kg)
  * Navegação entre Pokémons anterior e próximo
* Preparado para exibir gráficos de atributos (em breve)

---

## 📌 Próximas Funcionalidades (planejadas)

* 📊 Gráfico de atributos com `Chart.js`
* 🌈 Estilização colorida baseada no tipo do Pokémon
* 📲 Transformar o app em um PWA (Progressive Web App)

---

## 🗂 Estrutura do Projeto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── favorites/
│   │   └── pokemon-detail/
│   ├── services/
│   │   └── pokemon.service.ts
│   └── app-routing.module.ts
```

---

## 🧠 Organização

* Componentes standalone
* Navegação por rotas
* Armazenamento local para favoritos
* Layout responsivo com Ionic Grid

---

## 🤝 Contribuições

Este projeto é um estudo pessoal, mas colaborações são bem-vindas via Pull Request ou Issues.

---

## 📄 Licença

MIT © [Fábio Gonçalves](https://github.com/FabioRG37)

```

---

Se quiser, posso gerar esse conteúdo como arquivo `.md` pronto para colar no repositório ou seguir com a última funcionalidade que falta: [gráfico de atributos na tela de detalhes](f). Deseja?
```
