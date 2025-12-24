let a = Array.isArray([1, 100, 50]);
let b = Array.isArray({id: 1, color: "green"});
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);