// 1. Simple test to show core issue
// import('./simple-test.cjs').then(mod => {
//     // output: [ '__esModule', 'default', 'foo' ]
//     // missing bar
//     console.log('ES module sees:', Object.keys(mod)); 
// });

// 2. ES module import failure caused by __toESM
import('./bug-repro.cjs').then(bugModule => {
    // output: [ '__esModule', 'bar', 'default' ]
    // missing foo
    console.log('Rolldown output (uses __toESM):', Object.keys(bugModule)); 
});

// 3. with CommonJS require works fine
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const bugModuleCJS = require('./bug-repro.cjs');
// // works fine
// // output: [ 'bar', 'foo' ]
// console.log('Same module via require():', Object.keys(bugModuleCJS));

