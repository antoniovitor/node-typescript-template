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

## Eslint and prettier

Install eslint and run the initialization command.

```console
yarn add -D eslint
yarn eslint --init
```

Choose between a standard eslint configuration or answer some questions about
the code style you prefer. 

Install the dependencies with NPM, delete package-lock file and run yarn
installation.

```console
yarn
```

Install prettier and prettier's eslint extensions and add
`plugin:prettier/recommended` to the end of extends property in .eslint.json
file (Check if this is still the recommendation in de [docs](https://github.com/prettier/eslint-plugin-prettier)).

```console
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Create a file called `.prettierrc.json` and insert some prettier [options](https://prettier.io/docs/en/options.html) like this example.

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
}
```

Also, enable jest globals variables in `.eslintrc.json`

```json
{
    "env": {
        ...
        "jest": true
    },
    ...
}
```

## Environment variables

Install dotenv package

```console
yarn add -D dotenv
```

After installation, create bootstrap workflow as in `src/boostrap` folder.
Also, create `env(variable: string)` function as in `src/utils/env`.

# Checklist
- [ ] Adds Dockerfile
- [ ] Setup dependabot to supervise dependency versioning
- [ ] Setup static code analysis
- [ ] Create deployment pipeline
- [ ] Adds docker file
- [ ] (Maybe) add `config/env.ts` file with default env variable values