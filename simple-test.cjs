Object.defineProperty(exports, '__esModule', { value: true });

exports.foo = function() { return 'foo'; };

// this property will be missing in the ES module import
Object.defineProperty(exports, 'bar', {
  get: function() { 
    return function() { return 'bar'; }; 
  },
  enumerable: true
});

