let a = 10;
let b = 20;
let c = "10";

console.log(a == c);    // true (values are same, type ignored)
console.log(a === c);   // false (types differ)
console.log(a != b);    // true
console.log(a !== c);   // true
console.log(a > b);     // false
console.log(a < b);     // true
console.log(a >= 10);   // true
console.log(b <= 15);   // false
console.log(a != c);    // false (values are same, type ignored)

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(null == 0);          // false
console.log(undefined == 0);     // false

console.log(NaN == NaN);        // false
console.log(NaN === NaN);       // false  

console.log(typeof(NaN));       // "number"
console.log(isNaN(NaN));       // true

console.log(isNaN("hello"));   // true
console.log(isNaN("123"));     // false
console.log(isNaN(123));       // false

console.log(null > 0);      // false
console.log(null >= 0);     // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log(undefined >= 0); // false 
console.log(undefined <= 0); // false

console.log(null <= 0); // true