# Fixed ID

This is a fixed-options implementation of NanoID. There are two differences with the default NanoId:

- Only alphanumeric. No underscores `_` nor dashes `-`. This makes it ultra-safe.
- 24 characters instead of 21 to compensated for the loss of entropy it.

According to the [calculator](https://zelark.github.io/nano-id-cc/), with this implementation:

> ~14 million years needed, in order to have a 1% probability of at least one collision when generating 1 **million** of IDs per **second**.
