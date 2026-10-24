# Fixed ID [![npm install fixed-id](https://img.shields.io/badge/npm%20install-fixed--id-blue.svg)](https://www.npmjs.com/package/fixed-id) [![tests](https://github.com/franciscop/fixed-id/workflows/tests/badge.svg)](https://github.com/franciscop/fixed-id/actions) [![gzip size](https://img.badgesize.io/franciscop/fixed-id/master/index.js.svg?label=gzip&logo=&compression=gzip)](https://github.com/franciscop/fixed-id/blob/master/index.js)

This is a implementation of [NanoID](https://github.com/ai/nanoid) with fixed options. These different options are:

- Only alphanumeric to make it ultra-safe in URLs/filenames/etc. No underscores `_` nor dashes `-`.
- 24 characters instead of 21 to make it even safer.

```
npm install fixed-id
```

```js
import fixedId from "fixed-id";
// const fixedId = require("fixed-id");

console.log(fixedId());
// sjBPT3hhUdCpP7rCDS4qu03Q
// ilWz42q9iDp7b3ZlfoYg58e7
// DBEDAytRL2M9uCGbxFfKzN4T
// dFtijnQY8KhPphCOZ9aFWntD
// ...
```

According to the [calculator](https://zelark.github.io/nano-id-cc/), with this implementation:

> ~14 million years needed, in order to have a 1% probability of at least one collision when generating 1 **million** of IDs per **second**.
