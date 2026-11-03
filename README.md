# stare-client

The front end of the Stare project, an online merch store and site for the band Stare. Built with React, TypeScript, Vite and Sass, with Stripe checkout handled by the API. Repo for the server side can be found at the link below:

https://github.com/maritzbuchholz/stare-server

## Quick Start

Ensure you have the stare-server running first, as the client relies on the API for product data and checkout. Once you have the backend running, clone this repo and install the dependencies by running the commands below:

```
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the client root folder with the following key:

```
VITE_API_BASE_URL=http://localhost:<PORT>
```

* `VITE_API_BASE_URL` – base URL of the stare-server API. Use the same `PORT` set in the server side `.env` file
* The server's `CONFIRM` value should match the port the client runs on (Vite defaults to `5173`) so the Stripe success redirect lands back on the client

## Common Scripts

* `npm run dev` starts the client in development mode and reloads on changes to the code
* `npm run build` builds the client for production into the `dist` folder
* `npm run preview` serves the production build locally
* `npm run lint` checks the code for style and formatting issues with ESLint
* `npm run type-check` checks the code for TypeScript errors

## Miscellaneous Items

* Make sure all packages are installed before running the client
* Start the API before the client so product data loads
* `.env` should be included in `.gitignore` if pushed into production