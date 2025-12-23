Object.defineProperty(exports, '__esModule', { value: true });
//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (all, symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion


//#region packages/foo/src/baz.js
var baz_exports = /* @__PURE__ */ __export({ baz: () => baz });
const baz = "baz";

//#endregion
//#region packages/foo/src/foo.js
function foo() {
	return { "bar": baz_exports };
}

//#endregion
exports.foo = foo;
var bar = require("bar");
Object.keys(bar).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return bar[k]; }
  });
});
