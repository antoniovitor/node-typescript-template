# Node.js template

This is a simple Node.js template with a step by step guide to recreate it with 
the latests dependencies versions.

# Prerequisites

Install:
- Node.js
- Yarn

# Steps

## Git repository

Create directory and initialize git repository.

```console
mkdir project-name
cd project-name
git init
```

## Initialize node project

Answer the questions in the terminal.

```console
yarn init
yarn
```

Add ./node_modules folder to .gitignore file.

## Typescript

Install typescript, sucrase and nodemon.

Sucrase will transpiler typescript and run your code while nodemon will restart
in cae of errors and live refresh your project after any change.

```console
yarn add -D typescript sucrase nodemon
```

After installing create nodemon.json config file and the scripts for start and
build the project.

Also, add ./dist folder to .gitignore file.

## Jest

Install jest, ts-jest and jest types. After the installation, run ts-jest
initialization command.

```console
yarn add -D jest ts-jest @types/jest
yarn ts-jest config:init
```

Also, setup a new tsconfig.build.json witch will exclude **/*.test.ts files
from the compilation. After that, add `--porject tsconfig.build.json` to the
build script.
