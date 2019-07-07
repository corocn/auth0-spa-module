# auth0-spa-module

easy [auth0-spa-js](https://github.com/auth0/auth0-spa-js) integration with Nuxt.js

 * [nuxt/nuxt.js: The Vue.js Framework](https://github.com/nuxt/nuxt.js)
 * [auth0/auth0-spa-js: Auth0 authentication for Single Page Applications (SPA) with PKCE](https://github.com/auth0/auth0-spa-js)

## Install

```
yarn add auth0-spa-module
```

## Setup

```nuxt.config.js
  modules: [
    'auth0-spa-module'
  ],
  auth0: {
    domain: <YOUR_AUTH0_DOMAIN>,
    clientId: <YOUR_AUTH0_CLIENT_ID>'
  }
```

or set environment variables.

 * AUTH0_DOMAIN
 * AUTH0_CLIENT_ID

## Development

Running demo for development

```
yarn install
yarn dev
```

## License

[MIT License](./LICENSE)
