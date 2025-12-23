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