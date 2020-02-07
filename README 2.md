# bbs-ui-core

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Core business logic for front-end app

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `bbs-ui-core` dependency to your project

```bash
yarn add bbs-ui-core # or npm install bbs-ui-core
```

2. Add `bbs-ui-core` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'bbs-ui-core',

    // With options
    ['bbs-ui-core', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Tenk <tenkvil@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/bbs-ui-core/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/bbs-ui-core

[npm-downloads-src]: https://img.shields.io/npm/dt/bbs-ui-core.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/bbs-ui-core

[circle-ci-src]: https://img.shields.io/circleci/project/github/repo.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/repo

[codecov-src]: https://img.shields.io/codecov/c/github/repo.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/repo

[license-src]: https://img.shields.io/npm/l/bbs-ui-core.svg?style=flat-square
[license-href]: https://npmjs.com/package/bbs-ui-core
