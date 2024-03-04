# Ryan's React18 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-react18-starter)

## Features
- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Vite)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🕋&nbsp;&nbsp;Simple Store (Zustand)
- [x] 📙&nbsp;&nbsp;Configure Formatter (ESLint + Prettier)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] 🧩&nbsp;&nbsp;High Order Component
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Style Set
- [x] 🗂️&nbsp;&nbsp;Page Helmet SEO
- [x] 📍&nbsp;&nbsp;Absolute Path
- [ ] 📱&nbsp;&nbsp;Check Device
- [ ] 🪄&nbsp;&nbsp;Theme Mode

## Frameworks
- **Bundler** : Vite
- **Core** : React18
- **Store** : Zustand

## Code Pattern
- **Static(public)**
- **Root(src)** <br/>
- ⎣&nbsp;**components** - atomic stateless components <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**constants** - static resource <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**layouts** - layouts <br/>
- ⎣&nbsp;**router** - routers<br/>
- ⎣&nbsp;**libs** - store, hooks, utils<br/>
- ⎣&nbsp;**styles** - style set<br/>


## Getting Started
### 1) Installation
```shell
npx react18-starter my-project
```
### 2) Run development
```shell
npm run dev
```

## Using with Style set

```javascript
const Style = styled.div`
  // flex set(justify-content, align-items, flex-direction)
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};

  // box set(width, height, border-radius)
  ${({ theme }) => theme.boxSet('00px', '00px', '00px')};

  // color set(color, background-color)
  ${({ theme }) => theme.colorSet('white', 'black')};

  // background set(url, object-fit)
  ${({ theme }) => theme.backgroundSet('URL','contain')};

  // font set(font-size, font-weight, line-height)
  ${({ theme }) => theme.fontSet(00, 000, 00)};
`
```
