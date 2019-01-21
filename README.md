# MCS ui

> React components used by MCS.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```bash
$ yarn add mcs-ui styled-components
```

## Demo

- https://mcs-ui.netlify.com/

## Usage

```js
import { ThemeProvider } from 'styled-components';
import { theme, Button } from 'mcs-ui';

<ThemeProvider theme={theme}>
  <Button>Hello MCS</Button>
</ThemeProvider>;
```

## Development

- node 11.7.0
- yarn 1.13.0
- react = 16.8.0-alpha.0

```bash
$ yarn install --pure-lockfile
$ npm start
```

## Test

```bash
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

## Publish

```bash
$ npm version patch
$ npm run changelog
git commit & push
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

[build-badge]: https://travis-ci.com/Mediatek-Cloud/mcs-ui.svg?branch=master
[build]: https://travis-ci.com/Mediatek-Cloud/mcs-ui
[npm-badge]: https://img.shields.io/npm/v/mcs-ui.svg?style=flat-square
[npm]: https://www.npmjs.org/package/mcs-ui
[codecov-badge]: https://img.shields.io/codecov/c/github/Mediatek-Cloud/mcs-ui.svg?style=flat-square
[codecov]: https://codecov.io/github/Mediatek-Cloud/mcs-ui?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/mcs-ui.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/mcs-ui.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
