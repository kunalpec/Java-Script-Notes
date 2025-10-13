let score = 33;
let score1 = "33";
let score2 = "33asd";
let score3 = "";   // empty string
let score4 = null;
let score5 = undefined;

// ----------------------------
// Check original types
// ----------------------------
console.log(typeof(score));  // number
console.log(typeof(score1)); // string
console.log(typeof(score2)); // string
console.log(typeof(score3)); // string
console.log(typeof(score4)); // object
console.log(typeof(score5)); // undefined

// ----------------------------
// String → Number
// ----------------------------
let valueNumber = Number(score1);   // 33
console.log(typeof(valueNumber), valueNumber);

let valueNumber1 = Number(score2);  // NaN (invalid conversion)
console.log(typeof(valueNumber1), valueNumber1);

let valueNumber2 = Number(score3);  // 0
console.log(typeof(valueNumber2), valueNumber2);

let valueNumber3 = Number(score4);  // 0
console.log(typeof(valueNumber3), valueNumber3);

let valueNumber4 = Number(score5);  // NaN
console.log(typeof(valueNumber4), valueNumber4);

// ----------------------------
// Number → String
// ----------------------------
let valueString = String(score);  // "33"
console.log(typeof(valueString), valueString);

// Boolean → Number/String
let bool1 = true;
let bool2 = false;

console.log(Number(bool1), Number(bool2)); // 1 0
console.log(String(bool1), String(bool2)); // "true" "false"

// String → Boolean
console.log(Boolean(""), Boolean("0"), Boolean("hello")); // false true true
console.log(Boolean(0), Boolean(123), Boolean(null), Boolean(undefined)); // false true false false

// 1=>true ; 0=> false
// "" =>false;
// "hitesh"->true;

// ----------------------------
// ParseInt / ParseFloat
// ----------------------------
console.log(parseInt(score1), parseFloat(score1));     // 33 33
console.log(parseInt(score2), parseFloat(score2));     // 33 33 (parses until invalid char)
console.log(parseInt("123.45"), parseFloat("123.45")); // 123 123.45
