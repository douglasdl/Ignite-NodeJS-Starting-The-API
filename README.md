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

Create the project folder, move to it and create the config file:
```sh
mkdir rentalx
cd rentalx
npm init -y
```

Install the VS Code extension:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add this option to you settings.json VS Code configuration file:
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

Install the dependencies:
```sh
npm i express
npm i tsc-init -g
npm i uuid
```

Install the development dependencies:
```sh
npm i @types/express -D
npm i typescript -D
npm i eslint -D
npm i ts-node-dev -D
npm i @types/uuid -D
```

Configure the ESLint:
```sh
npm init @eslint/config
```
- Y
- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- Yes
- Node (uncheck Browser and check Node with space key)
- Use a popular style guide
- [Airbnb](https://github.com/airbnb/javascript) ([Standard](https://github.com/standard/standard), [Google](https://github.com/google/eslint-config-google), [XO](https://github.com/xojs/eslint-config-xo-typescript), [Standard](https://github.com/standard/eslint-config-standard-with-typescript))
- JSON
- yes
- npm

Create the .eslintignore file:
```sh
touch .eslintignore
```
```json
/*.js
node_modules
dist
```

In the .eslintrc.json file "env" option:
 - add "jest": true,
 - confirm if "es2020": true,
In the "extends", "plugins", "rules" and "settings":
  
```json
{
    "env": {
        "es2020": true,
        "node": true,
				"jest": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "eslint-plugin-import-helpers",
		"prettier"
    ],
    "rules": {
      "camelcase": "off",
			"import/no-unresolved": "error",
			"@typescript-eslint/naming-convention": [
			  "error",
			  {
			    "selector": "interface",
			    "format": ["PascalCase"],
			    "custom": {
			      "regex": "^I[A-Z]",
			      "match": true
			    }
			  }
			],
			"class-methods-use-this": "off",
			"import/prefer-default-export": "off",
			"no-shadow": "off",
			"no-console": "off",
			"no-useless-constructor": "off",
			"no-empty-function": "off",
			"lines-between-class-members": "off",
			"import/extensions": [
			  "error",
			  "ignorePackages",
			  {
			    "ts": "never"
			  }
			],
			"import-helpers/order-imports": [
			  "warn",
			  {
			    "newlinesBetween": "always",
			    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
			    "alphabetize": { "order": "asc", "ignoreCase": true }
			  }
			],
			"import/no-extraneous-dependencies": [
			  "error",
			  { "devDependencies": ["**/*.spec.js"] }
			],
		"prettier/prettier": "error"
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
```

Install the Prettier Dependencies:
```sh
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

Create the Typescript configuration file (tsconfig.json):
```sh
npx tsc --init
```

Create the Pretier Config file:
```sh
touch prettier.config.js
```

```json
module.exports = {
    singleQuote: false,
};
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

Add the script to the package.json to automatically convert and run .ts files:
```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
},
```

Add some flags to improve the performance:
```json
"scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
},
```

Run the server:
```sh
npm run dev
```

Disable the "strict": true, inthe tsconfig.json file.
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true, 
    //"strict": true,
    "skipLibCheck": true
  }
}
```

<h3>2.3 - Application debbuging</h3>

 - In VS Code click in the Run and Debug (CTRL + SHIFT + D).
 - Click in the "create a launch.json file" option.
 - Select "Node.js"
 - Change type to "node",
 - Change "request" to "attach",
 - remove the "program" option line,

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

Change the package.json script to allow the debugger to connect with the server:
```json
"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
},
```

<h3>2.4 - Creating the categories</h3>

Create the routes folder inside src:
```sh
mkdir routes
```

Categories
 - id		  uuid
 - name	  string
 - description  string
 - created_at   string

Create the Categories route file inside routes:

```sh
touch categories.routes.ts
```

<h3>2.5 - Inserting ID with UUID</h3>

 - [uuid](https://www.npmjs.com/package/uuid)

<h3>2.6 - Inserting the types for the categories</h3>

Create a model folder inside src:
```sh
mkdir model
```

Create the category file inside the model folder:
```sh
cd model
touch Category.ts
```

<h3>2.7 - Creating the category repository</h3>

Create a repositories folder inside src:
```sh
mkdir repositories
```

Create the category file inside the repositories folder:
```sh
cd repositories
touch CategoriesRepository.ts
```

<h3>2.8 - Listing the Categories</h3>

<h3>2.9 - Validating the category register</h3>

<h2>3) S.O.L.I.D</h2>

<h3>3.1 - Understanding the S.O.L.I.D</h3>

 - S => SRP - Single Responsibility Principle
 - O => OCP - Open-Closed Principle
 - L => LSP - Liskov Substitution Principle
 - I => ISP - Interface Segregation Principle
 - D => DIP - Dependency Inversion Prnciple

<h3>3.2 - Using the Single Responsibility Principle (SRP)</h3>

Create the services folder inside src:
```sh
mkdir services
```

Create the category file inside the repositories folder:
```sh
cd sercvices
touch CreateCategoryService.ts
```

<h3>3.3 - Using the Liskov Substitution Principle (LSP)</h3>

Create the category interface file inside the repositories folder:
```sh
touch ICategoriesRepository.ts
```

Create the Postgress category repository file inside the repositories folder:
```sh
touch PostgressCategoriesRepository.ts
```

<h2>4) Application Continuation</h2>

<h3>4.1 - Creating the specification service and spliting it in modules</h3>

Specifications
 - id		  uuid
 - name	  string
 - description  string
 - created_at	  date

Create the Specification class file inside the model folder:
```sh
cd model
touch Specification.ts
```

Create the Crete Specification Service file inside the services folder:
```sh
cd services
touch CreateSpecificationService.ts
```

Create the modules folder inside the src folder:
```sh
mkdir modules
```

Create the cars folder inside the modules folder:
```sh
cd modules
mkdir cars
```
- Move the folders model, repositories and services into the folder cars:

<h3>4.2 - Fixing the importations</h3>

- Fix the categories.routes.ts

<h3>4.3 - Creating the specifications repository</h3>

Create the Specifications Repository interface file inside the folder repositories:
```sh
touch ISpecificationsRepository.ts
```

Create the Specifications Routes file inside the folder routes:
```sh
touch specifications.routes.ts
```

<h3>4.4 - Creating the Category Use Case</h3>

Create the folder useCases inside the cars folder:
```sh
mkdir useCases
```

Create the folder createCategory inside the useCases folder:
```sh
mkdir createCategory
```

Create the controller file inside the folder createCategory:
```sh
touch createCategoryController.ts
```

- Move the CreateCategoryService.ts from the folder services to the folder createCategory and rename it to CreateCategoryUseCase.ts.

Create the file index.ts inside the folder createCategory:
```sh
touch index.ts
```

<h3>4.5 - Refactoring the Category listing</h3>

- Create the listCategories folder inside the useCases folder.
- Create the ListCategoriesController.ts file inside the listCategories.
- Create the file ListCategoriesUseCase.ts inside the folder listCategories.
- Create the index.ts file inside the listCategories folder.

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
