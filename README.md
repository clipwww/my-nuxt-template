# Custom Nuxt Template

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nuxt-community/express-template <project-name>
cd <project-name> # move to your project
npm install # or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

## ExpressJS Changes

- There is a  `server` directory with the root of your `express` server.
- The `routes` directory is called `server/api`.

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start ExpressJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| npm run build | Build the nuxt.js web application for production. |
| npm start | Start ExpressJS server in production. |
| npm analyze | Start Webpack Analyze server in production. |
