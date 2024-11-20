# EDA-Ecommerce CLI

## Usage:
1. Set the "@eda-ecommerce" registry (e.g. `echo @eda-ecommerce:registry=https://npm.pkg.github.com/ >> ~/.npmrc` `echo //https://npm.pkg.github.com/:_authToken=<GITHUB TOKEN WITH PACKAGE REGISTRY ACCESS> >> ~/.npmrc`) **or** add it into your `~/.bunfig.toml`:
    ```
    [install.scopes]
    "@eda-ecommerce" = { token = "<GITHUB TOKEN WITH PACKAGE REGISTRY ACCESS>", url = "https://npm.pkg.github.com/" }
    ```
2. Invoke using your favourite Node.js runtime tool. e.g. `npx @eda-ecommerce/cli@latest` or `bunx @eda-ecommerce/cli@latest`

### Usage locally while developing
1. `npm run dev`
2. `npm install -g`
3. run `eda-ecommerce-cli` anywhere

