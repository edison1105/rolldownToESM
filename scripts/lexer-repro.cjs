const fs = require('fs');
const path = require('path');
const { parse } = require('cjs-module-lexer');

const targetFile = path.resolve(__dirname, '../pkgs/packages/foo/dist/foo.js');
const src = fs.readFileSync(targetFile, 'utf8');

function run(code) {
  try {
    const res = parse(code);
    console.log('OK');
    console.log('exports  :', res.exports);
    console.log('reexports:', res.reexports);
  } catch (e) {
    console.error(String(e.message || e));
  }
}

run(src);
