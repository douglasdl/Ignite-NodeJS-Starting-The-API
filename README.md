# Ignite-NodeJS-Starting-The-API
Ignite NodeJS - Starting The API

<h1>Car Rentals API<h1>


<h2>1) TypeScript</h2>

<h3>1.1 - Introduction</h3>

<h3>1.2 - TypeScript Introduction</h3>
- Open source language created by Microsoft
- JavaScript superset


<h3>1.3 - Creating the Project with TypeScript</h3>

Use the Node 16 LTS version:
```sh
nvm use v16.18.1
```

Create the project folder, move to it and create the config file:
```sh
mkdir typescript
cd typescript
npm init -y
```
Install the dependencies:
```sh
npm i express
npm i tsc-init -g
```

Install the development dependencies:
```sh
npm i @types/express -D
npm i typescript -D
```

Create the src folder:
```sh
mkdir src
cd src
```

Create the server.ts file:
```sh
touch server.ts
```

Hello World sample:
```ts
import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Hello World!"});
})

app.listen(3333);
```

Create the Typescript configuration file (tsconfig.json):
```sh
npx tsc --init
```

Add the "outDir": "./dist", parameter
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true, 
    "strict": true,
    "skipLibCheck": true
  }
}
```

Convert the .ts to .js:
```sh
npx tsc
```

Execute to server:
```sh
node dist/server.js
```

<h3>1.4 - Adding the types</h3>

Create the routes.ts inside the src folder:
```sh
touch routes.ts
```
Create the Class file:
```sh
touch CreateCourseService.ts
```

Types interface example:
```ts
interface ICourse {
    name: string;
    duration: number;
    educator: string;
}
```

<h3>1.5 - Defining the mandatory parameters</h3>

Use a ? to make the attribute as optional:
```ts
interface ICourse {
    name: string;
    duration?: number;
    educator: string;
}
```

<h2>2) Creating the API with NodeJS</h2>

<h3>2.1 - Configutring the ts-node-dev</h3>

<h3>2.2 - ESLint e Prettier</h3>

<h3>2.3 - Application debbuging</h3>

<h3>2.4 - Creating the categories</h3>

<h3>2.5 - Inserting the types for the categories</h3>

<h3>2.6 - Creating the category repository</h3>

<h3>2.7 - Listing the Categories</h3>

<h3>2.8 - Validating the category register</h3>

<h2>3) S.O.L.I.D</h2>

<h3>3.1 - Understanding the S.O.L.I.D</h3>

<h3>3.2 - Using the Singlr Responsibility Principle (SRP)</h3>

<h3>3.3 - Using the Liskov Swiching Principle (LSP)</h3>

<h2>4) Application Continuation</h2>

<h3>4.1 - Creatingthe specification service and spliting it in modules</h3>

<h3>4.2 - Fixing the importations</h3>

<h3>4.3 - Creating the specifications repository</h3>

<h3>4.4 - Creating the Category Use Case</h3>

<h3>4.5 - Refactoring the Category listing</h3>

<h3>4.6 - Knowing the Singleton Pattern</h3>

<h3>4.7 - Spliting the repositories</h3>

<h3>4.8 - Creating the Specification Use Case</h3>

<h3>4.9 - Refactoring the routes</h3>

<h2>5) Working with Upload</h2>

<h3>5.1 - Knowing the Multer</h3>

<h3>5.2 - Creating files upload</h3>

<h3>5.3 - Creating the use case to import the categories</h3>

<h3>5.4 - Knowing the stream concept</h3>

<h3>5.5 - Hey Dev</h3>

<h3>5.6 - Reading the upload data</h3>

<h3>5.7 - Inserting the upload data into the repository</h3>


<h2>6) Starting the documentation</h2>

<h3>6.1 - Knowing the Swagger</h3>

<h3>6.2 - Configuring the Swagger</h3>

<h3>6.3 - Creating the category creation documentation</h3>

<h3>6.4 - Creating the catogories listing documentation</h3>

<h3>6.5 - Removing the upload files</h3>