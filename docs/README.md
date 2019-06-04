# Get started

## What is Sanity?

Sanity is a fully customizable headless CMS that treats your content as structured data and makes it available through a simple and powerful API.

This module provides an easy way to integrate Sanity in your Nuxt.js project to fetch and display your data.

## Installation

Install the npm package with `yarn` or `npm`:

```js
yarn add nuxt-sanity // or npm install nuxt-sanity
```

Add `nuxt-sanity` to the `modules` section of `nuxt.config.js`:

```js
// nuxt.config.js
{
  modules: [
    'nuxt-sanity'
  ]
}
```

## Configuration

Configure the module with `projectId` and `dataset` in the options for it to work. You can also pass other [options](/api) to override the defaults.

```js
// nuxt.config.js
{
  sanity: {
    projectId: 'xxx', // required
    dataset: 'xxx' // required
  }
}
```

To read more about Nuxt.js modules, see the official documentation: [How to configure modules in Nuxt.js](https://nuxtjs.org/api/configuration-modules).

To read more about the JavaScript Sanity client, please see the [official documentation](https://www.sanity.io/docs/client-libraries/js-client).