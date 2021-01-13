# Fixed ID

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
