console.log(typeof "hello" === "string");
console.log(typeof 10 === "number");
console.log(typeof true === "boolean");
console.log(typeof undefined === "undefined");
console.log(typeof Symbol() === "symbol");
console.log(typeof 10n === "bigint");
console.log(typeof function () {} === "function");

console.log(typeof null === "object"); // true

// correct way for checking null
//console.log(value === null)

console.log("array check::", Array.isArray([]));

console.log("wrong array check::", typeof [] === "object");

// plain objects check

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
console.log("object check::", isObject({}));
