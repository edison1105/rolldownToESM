Object.defineProperty(exports, '__esModule', { value: true });

exports.foo = function() { return 'foo'; };

Object.defineProperty(exports, 'bar', {
  get: function() { return function() { return 'bar'; }; },
  enumerable: true
});

