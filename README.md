# nuxt-ts-gottani-template

> My awe-inspiring Nuxt.js project

## What is "gottani"

**ごった煮[gottani]**

(n) various foods cooked together,hodgepodge,hotchpotch,mulligan stew

## Features

- Default TypeScript settings
- Type safe Vuex module (using `vuex-module-decorators`)
- Default `stylelint` settings (auto format `<style>`, *.css, *.scss, *.sass on save)
- ESLint settings (auto format `<script>`, `<template>`, *.js, *.ts on save)
- SCSS Support (`node-sass`, `sass-loader`)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- Path Autocomplete settings (support auto path complete using `~/` and `@/`)

## Options on created

```bash
$ npx create-nuxt-app nuxt-ts-gottani-template

create-nuxt-app v2.12.0
✨  Generating Nuxt.js project in nuxt-ts-gottani-template
? Project name nuxt-ts-gottani-template
? Project description My awe-inspiring Nuxt.js project
? Author name redshoga
? Choose the package manager Npm
? Choose UI framework None
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Choose linting tools ESLint, StyleLint
? Choose test framework Jest
? Choose rendering mode Single Page App
? Choose development tools jsconfig.json (Recommended for VS Code)
```

## Recommend VSCode Extensions

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

## Features added in the future

- Add Storybook
- Type safe axios module (https://github.com/aspidajs/aspida)
- Composition API sample code
- TODO sample code
- Sample test code using Jest (vuex, component)
- Type checking in `<template>` (https://katashin.info/2019/04/28/261)
- VSCode debugger settings

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
