# nuxt-sanity

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> 

[📖 **Read documentation**](https://nuxt-sanity.netlify.com/)

## Setup

1. Add the `nuxt-sanity` dependency with `yarn` or `npm` to your project

```js
yarn add nuxt-sanity // or npm install nuxt-sanity
```

2. Add `nuxt-sanity` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-sanity'
  ]
}
```

3. Configure the module:

```js
{
  modules: [
    // Simple usage
    'nuxt-sanity',

    // With inline options
    ['nuxt-sanity', { /* module options */ }]
  ],
  // Or a Sanity object
  sanity: {
    projectId: '', // required
    dataset: '', // required
    token: '', // optional
    useCdn: false // optional, default is false
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-sanity.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-sanity

[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-sanity/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-sanity

[circle-ci-src]: https://img.shields.io/circleci/project/github/vicbergquist/nuxt-sanity.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/vicbergquist/nuxt-sanity

[codecov-src]: https://img.shields.io/codecov/c/github/vicbergquist/nuxt-sanity.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/vicbergquist/nuxt-sanity

[david-dm-src]: https://david-dm.org/vicbergquist/nuxt-sanity/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/vicbergquist/nuxt-sanity

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
