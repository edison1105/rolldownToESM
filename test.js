// SyntaxError: Named export 'foo' not found.
import { foo } from './bug-repro.cjs'
console.log(foo)

// works fine
// import { bar } from './bug-repro.cjs'
// console.log(bar)