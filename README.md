# __toESM function breaking ES module imports

## Steps to Reproduce
1. clone this repo
2. pnpm install
3. pnpm run test2

## What's Expected?
should log:
```bash
Rolldown output (uses __toESM): [ '__esModule', 'bar', 'default', 'foo' ]
```

## What's Actually Happening?
logs:
```bash
Rolldown output (uses __toESM): [ '__esModule', 'bar', 'default' ]
```

## More Details
- uncomment line 33 in `bug-repro.js` to see it works fine without `__toESM`
- the underlying issue is that `Object.defineProperty` with a getter function is not working in ES module imports. see `simple-test.cjs` for a minimal test case
- This is just a simple reproduction. The actual issue comes from https://github.com/vuejs/core/pull/13599
  - I'm migrating the rollup build of vuejs/core to rolldown and encountered this issue. All ecosystem-ci tests are failing with errors saying `SyntaxError: The requested module 'vue' does not provide an export named 'xxx'`. After comparing rollup and rolldown outputs, I found that `__toESM` is the cause.
  - `bug-repro.cjs` simulates vue's build output `vue.cjs.js`
  - Running `pnpm run test` will reproduce the vue/ecosystem-ci error