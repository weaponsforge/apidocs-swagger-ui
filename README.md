## apidocs-swagger-ui

**apidocs-swagger-ui** features a simple Todo notes-taking CRUP API borrowed from [`todo-next`](https://github.com/weaponsforge/todo-next)'s server.

This repository aims to test using [swagger-ui](https://github.com/swagger-api/swagger-ui) for creating an modern, responsive and interactive REST API documentations and to familiarize oneself with the [OpenAPI](https://spec.openapis.org/oas/v3.1.0) specifications, v3.1.0 as of this writing.

![screenshot](/assets/thumbnail.png)

## Requirements

The following dependencies are used for this project's localhost development environment. Feel free to use other dependency versions as needed.

1. Windows 10 OS
2. nvm for Windows v1.1.9
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. MongoDB Community Edition (for Windows)
   - version 4.4.0
   - architecture: x86_64

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/todo-next.git`

2. Install the backend server dependencies.<br>
`npm install`

3. Install the **docs** dependencies.<br>
`npm run docs:install`

4. Set up the environment variables. Create a `.env `file inside the root project directory with reference to the `.env.example` file.<br>

   | Variable Name   | Description                                                                                                                                                                                                                                                                                                       |
   | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | MONGO_URI       | MongoDB connection string.<br>Default value uses the localhost MongoDB connection string.                                                                                                                                                                                                                         |
   | ALLOWED_ORIGINS | IP/domain origins in comma-separated values that are allowed to access the API if `ALLOW_CORS=1`.<br> Include `http://localhost:8080` by default to allow CORS access to the swagger-ui documentation app in the **/docs** directory.                                                                             |
   | ALLOW_CORS      | Allow Cross-Origin Resource Sharing (CORS) on the API endpoints.<br><br>Default value is `1`, allowing access to domains listed in `ALLOWED_ORIGINS`.<br> Setting to `0` will block AJAX API requests from client websites hosted on other domains, but will allow requests from Postman and other testing tools. |

## Usage

1. Run the server.<br>
`npm start`

1. Run the docs api on development mode.<br>
`npm run docs:dev`

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run dev`

Run the server for development mode using [nodemon](https://www.npmjs.com/package/nodemon).

### `npm run lint`

Lint the server JavaScript source codes.

### `npm run lint:fix`

Fix the JavaScript lint errors.

### `npm run docs:install`

Installs the (swagger-ui + webpack) dependencies on the **/docs** directory.

### `npm run docs:dev`

Runs the (swagger-ui + webpack) app in development mode.

### `npm run docs:build`

Builds and bundles the (swagger-ui + webpack) app in the **/docs** directory for production mode to the `/docs/dist` directory.

Fix JavaScript lint errors.

@weaponsforge<br>
20220821
