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
