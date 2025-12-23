# steps to reproduce
- cd pkgs
- npm install
- npm run build
- cd ..
- node test.js

# expected behavior
- should log `[Function: bar]`

# actual behavior
- throws `SyntaxError: Named export 'bar' not found.`


# how to fix
- open `pkgs/packages/foo/dist/foo.js`
- change `__export` to `__export1` or any other name
- run `node test.js` again
- should log `[Function: bar]`


# additional info
`__export` has special handling in cjs-module-lexer:
https://github.com/nodejs/cjs-module-lexer/blob/1910c8a095b741be468e4098b1490c906e6412cf/lexer.js#L134
- run `node scripts/lexer-repro.cjs`
- should log `OK` but actually throws