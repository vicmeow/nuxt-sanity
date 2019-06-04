---
sidebarDepth: 3
---

# API Reference

## Options

You can pass options using module options or by adding a `sanity` object to `nuxt.config.js`.

```js
modules: [
    // With inline options
    ['nuxt-sanity', { /* module options */ }]
  ],
  // OR
  sanity: {
    /* module options */
  }
```

### `projectId`

- Type: `string`
- Default: `''`
- Required: true

The ID of your project. You can find this ID in the [management console](https://www.sanity.io/manage) when looking at your project.

### `dataset`

- Type: `string`
- Default: `''`
- Required: true

The dataset you want to connect the Sanity client to. Datasets can be created and deleted in your project's [management console](https://www.sanity.io/manage), under the "Datasets" tab.

Read more about [datasets](https://www.sanity.io/docs/data-store/datasets).

### `token`

- Type: `string`
- Default: `''`
- Required: false

Sanity uses tokens for authentication. You can create these in the [management console](https://www.sanity.io/manage). By default, unauthenticated users have read access to published documents, but with [with certain exceptions](https://www.sanity.io/docs/data-store/access-control).

Read more about Sanity [authentication](https://www.sanity.io/docs/http-auth).

### `useCdn`

- Type: `boolean`
- Default: `false`
- Required: false

Sanity provides a CDN-distributed, cached API, as an opt-in feature that will give you very fast responses to requests that have been cached. Set this option to `true` to use this CDN. 

### `withCredentials`

- Type: `boolean`
- Default: `false`
- Required: false

Use this option to show draft documents. If you do all the rendering client side, you don't have to worry about tokens, but you still need to make sure the browser makes authenticated API requests when fetching the draft document.

Read more about [previewing content](https://www.sanity.io/docs/preview-content-on-site).

## Methods

For a list of all the available methods with the Sanity client, please see the [official documentation](https://www.sanity.io/docs/client-libraries/js-client).