# Ryan's React18 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-react18-client)

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
- ⎣&nbsp;**constants** - 정적 리소스 <br/>
- ⎣&nbsp;**components** - 아토믹 컴포넌트(atoms, molecules, organism) <br/>
- ⎣&nbsp;**containers** - 비즈니스 로직 컴포넌트(template) <br/>
- ⎣&nbsp;**interface** - 객체 타입 지정 <br/>
- ⎣&nbsp;**layouts** - 고정 영역 <br/>
- ⎣&nbsp;**router** - 미들웨어, 라우트 설정<br/>
- ⎣&nbsp;**libs** - 스토어, 커스텀 훅, 유틸리티 등<br/>
- ⎣&nbsp;**styles** - 스타일 셋 모음<br/>


## Getting Started
### 1) Installation
```shell
git clone ryan-ahn/boilerplate-react18-client
cd ryan-ahn/boilerplate-react18-client
npm install
```
### 2) Configuration VSCode
```shell
setting.json 파일을 vscode 세팅에 입력
관련 익스텐션 전부 설치(문서 확인)
```
### 3) Run development server
```shell
npm run dev
```

## Using with Style set

```javascript
const Style = styled.div`
  // 플렉스 세트(기준 정렬, 대칭 정렬, 방향)
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};

  // 박스 세트(가로, 세로, 라운딩)
  ${({ theme }) => theme.boxSet('00px', '00px', '00px')};

  // 컬러 세트(폰트 컬러, 배경 컬러)
  ${({ theme }) => theme.colorSet('white', 'black')};

  // 배경 세트(URL, Fit)
  ${({ theme }) => theme.backgroundSet('URL','contain')};

  // 폰트 세트(폰트 크기, 두께, 줄간격)
  ${({ theme }) => theme.fontSet(00, 000, 00)};
`
```
