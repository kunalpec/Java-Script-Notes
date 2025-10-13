"use strict"; // treate the all js code as new version

// alert( 3 + 3) // we sre using node.js , not the browser..

// ===================================================
// 📝 JavaScript Data Types
// ===================================================
//
// JavaScript has two main categories of data types:
// 1️⃣ Primitive Data Types
// 2️⃣ Non-Primitive (Reference) Data Types
// ===================================================


// ===================================================
// 🔹 1️⃣ Primitive Data Types
// These hold single values, not objects.
// There are 7 primitive data types in JavaScript.
// ===================================================


// ---------------------------------------------------
// 🔸 String → Sequence of characters, enclosed in "" or ''
// ---------------------------------------------------
let name = "Kunal"; // or 'Kunal'
console.log("String:", name, "| Type:", typeof name);

// ---------------------------------------------------
// 🔸 Number → Numeric values (integer or float)
// ---------------------------------------------------
let age = 19;
let marks = 89.5;
console.log("Number:", age, marks, "| Type:", typeof age);

// ---------------------------------------------------
// 🔸 Boolean → true or false values
// ---------------------------------------------------
let isStudent = true;
let hasJob = false;
console.log("Boolean:", isStudent, hasJob, "| Type:", typeof isStudent);

// ---------------------------------------------------
// 🔸 Undefined → Variable declared but not assigned any value
// ---------------------------------------------------
let city;
console.log("Undefined:", city, "| Type:", typeof city);

// ---------------------------------------------------
// 🔸 Null → Represents an intentional empty value (object type)
// ---------------------------------------------------
let car = null;
console.log("Null:", car, "| Type:", typeof car); // typeof null is 'object' (JS quirk)

// ---------------------------------------------------
// 🔸 Symbol → Used for unique identifiers
// ---------------------------------------------------
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id1 === id2, "| Type:", typeof id1); // false (unique)

// Two types of symbol datatypes-> normal and Global:
// Using global Symbols (Symbol.for())

// ---------------------------------------------------
// 🔸 BigInt → For very large integers beyond Number limit
// ---------------------------------------------------
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);


// ===================================================
// 🔹 2️⃣ Non-Primitive (Reference) Data Types
// These can hold multiple values and are mutable.
// ===================================================


// ---------------------------------------------------
// 🔸 Object → Collection of key-value pairs
// ---------------------------------------------------
let student = {
  name: "Kunal",
  age: 19,
  course: "Data Science",
};
console.log("Object:", student, "| Type:", typeof student);

// ---------------------------------------------------
// 🔸 Array → Ordered collection of values
// ---------------------------------------------------
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits, "| Type:", typeof fruits);

// ---------------------------------------------------
// 🔸 Function → Block of reusable code
// ---------------------------------------------------
function greet() {
  return "Hello, Kunal!";
}
console.log("Function:", greet(), "| Type:", typeof greet);


// ===================================================
// ✅ Displaying All Data Types Together (in Table)
// ===================================================
console.table({
  String: name,
  Number: age,
  Boolean: isStudent,
  Undefined: city,
  Null: car,
  Symbol: id1.toString(),
  BigInt: bigNumber,
  Object: JSON.stringify(student),
  Array: fruits.join(", "),
  Function: greet(),
});


// ===================================================
// 🧠 Summary Notes
// ===================================================
/*
📘 Primitive Data Types (Stored directly in memory)
1. String    → "Hello" or 'Hello'
2. Number    → 10, 10.5
3. Boolean   → true / false
4. Undefined → Declared but not assigned
5. Null      → Intentionally empty
6. Symbol    → Unique value for object properties
7. BigInt    → Large integers (end with 'n')

📗 Non-Primitive (Reference) Data Types (Stored by reference)
1. Object    → { key: value }
2. Array     → [item1, item2, ...]
3. Function  → function myFunc() {}

⚠️ Note:
typeof null → 'object' (This is a known JavaScript bug)
Everything else except primitive types is an Object in JS.
*/
// ===================================================
