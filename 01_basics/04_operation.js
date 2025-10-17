// ==========================
// 1️⃣ Arithmetic Operators
// ==========================
let a = 10, b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000
console.log("++a =", ++a); // 11
console.log("--b =", --b); // 2

// ==========================
// 2️⃣ Assignment Operators
// ==========================
let c = 5;
c += 3; console.log("c += 3:", c); // 8
c -= 2; console.log("c -= 2:", c); // 6
c *= 2; console.log("c *= 2:", c); // 12
c /= 3; console.log("c /= 3:", c); // 4
c %= 3; console.log("c %= 3:", c); // 1

// ==========================
// 3️⃣ Comparison Operators
// ==========================
console.log("5 == '5':", 5 == '5'); // true
console.log("5 === '5':", 5 === '5'); // false
console.log("5 != 3:", 5 != 3); // true
console.log("5 !== '5':", 5 !== '5'); // true
console.log("5 > 3:", 5 > 3); // true
console.log("5 < 3:", 5 < 3); // false
console.log("5 >= 5:", 5 >= 5); // true
console.log("5 <= 3:", 5 <= 3); // false

// ==========================
// 4️⃣ Logical Operators
// ==========================
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true
console.log("!true:", !true); // false

// ==========================
// 5️⃣ Bitwise Operators
// ==========================
console.log("5 & 1 =", 5 & 1); // 1
console.log("5 | 1 =", 5 | 1); // 5
console.log("5 ^ 1 =", 5 ^ 1); // 4
console.log("~5 =", ~5); // -6
console.log("5 << 1 =", 5 << 1); // 10
console.log("5 >> 1 =", 5 >> 1); // 2
console.log("-5 >>> 1 =", -5 >>> 1); // 2147483645

// ==========================
// 6️⃣ String Operators
// ==========================
let str = "Hello";
str += " World";
console.log(str); // "Hello World"
console.log("Kunal " + "Sharma"); // "Kunal Sharma"

// ==========================
// 7️⃣ Ternary (Conditional) Operator
// ==========================
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote?", canVote); // "Yes"

// ==========================
// 8️⃣ Type Operators
// ==========================
console.log("typeof 123:", typeof 123); // "number"
console.log("typeof 'abc':", typeof 'abc'); // "string"
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("{} instanceof Object:", {} instanceof Object); // true
