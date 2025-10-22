const Email="Kunal2612004@gmail.com"

if(Email){
    console.log("Got Email Value")
}else{
    console.log("Don't Got Email Value")
}

// =============================
// 💡 Truthy and Falsy Examples
// =============================

// Falsy values in JavaScript
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

console.log("❌ Falsy Values Test:");
falsyValues.forEach((value) => {
  if (value) {
    console.log(value, "➡️ Truthy");
  } else {
    console.log(value, "➡️ Falsy");
  }
});

console.log("\n");

// Truthy values in JavaScript
let truthyValues = [
  true,
  1,
  -5,
  "hello",
  " ",
  [],
  {},
  function() {},
  Infinity,
  -Infinity
];

console.log("✅ Truthy Values Test:");
truthyValues.forEach((value) => {
  if (value) {
    console.log(value, "➡️ Truthy");
  } else {
    console.log(value, "➡️ Falsy");
  }
});

console.log("\n");

// Bonus: Convert any value to Boolean
console.log("🔁 Boolean Conversion Test:");
console.log(Boolean(""));        // false
console.log(Boolean("Kunal"));   // true
console.log(Boolean(0));         // false
console.log(Boolean(10));        // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false


// Nullish Coalescing Operator (??) in JavaScript

// 1
let name = null;
let userName = name ?? "Guest";

console.log(userName); // Output: Guest

// 2
let count = 0;
let finalCount = count ?? 100;

console.log(finalCount); // Output: 0 ✅

// other condition operator

// condition ? false :true;

const number=10

console.log(number > 5 ? "Greater than 5" : "Less than or equal to 5");