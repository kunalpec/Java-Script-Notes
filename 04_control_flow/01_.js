// IF

const isUserLogginStatus = true;
if(isUserLogginStatus)
{
  console.log("This user is logged in");
}else{
  console.log("This user is NOT logged in");
}

// ++++++++++++++++++++ Operators in JS ++++++++++++++++++++ //
// ===========================
// 🧮  ARITHMETIC OPERATORS
// ===========================
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition (+):", a + b);        // 15
console.log("Subtraction (-):", a - b);     // 5
console.log("Multiplication (*):", a * b);  // 50
console.log("Division (/):", a / b);        // 2
console.log("Modulus (%):", a % b);         // 0 (remainder)
console.log("Exponentiation (**):", a ** b); // 100000
console.log("Increment (++a):", ++a);       // 11 (a becomes 11)
console.log("Decrement (--b):", --b);       // 4 (b becomes 4)

console.log("\n");


// ===========================
// ⚖️  COMPARISON OPERATORS
// ===========================
let x = 5;
let y = "5";

console.log("Comparison Operators:");
console.log("Equal (==):", x == y);         // true (value only)
console.log("Strict Equal (===):", x === y); // false (value + type)
console.log("Not Equal (!=):", x != y);     // false
console.log("Strict Not Equal (!==):", x !== y); // true
console.log("Greater Than (>):", 8 > 5);    // true
console.log("Less Than (<):", 3 < 5);       // true
console.log("Greater or Equal (>=):", 10 >= 10); // true
console.log("Less or Equal (<=):", 7 <= 5); // false

console.log("\n");


// ===========================
// ⚙️  ASSIGNMENT OPERATORS
// ===========================
let c = 10;
console.log("Assignment Operators:");
console.log("c =", c);       // 10
c += 5;  console.log("c += 5:", c); // 15
c -= 3;  console.log("c -= 3:", c); // 12
c *= 2;  console.log("c *= 2:", c); // 24
c /= 4;  console.log("c /= 4:", c); // 6
c %= 5;  console.log("c %= 5:", c); // 1
c **= 3; console.log("c **= 3:", c); // 1

console.log("\n");


// ===========================
// 🔗  LOGICAL OPERATORS
// ===========================
let p = true;
let q = false;

console.log("Logical Operators:");
console.log("AND (&&):", p && q);  // false
console.log("OR (||):", p || q);   // true
console.log("NOT (!):", !p);       // false

console.log("\n");


// ===========================
// 🧩  STRING OPERATORS
// ===========================
let str1 = "Hello";
let str2 = "World";

console.log("String Operators:");
console.log("Concatenation (+):", str1 + " " + str2); // Hello World
console.log("+= Operator:", str1 += " Everyone");     // Hello Everyone

console.log("\n");


// ===========================
// 🔢  TYPE OPERATORS
// ===========================
console.log("Type Operators:");
console.log("typeof 123:", typeof 123);       // number
console.log("typeof 'Kunal':", typeof "Kunal"); // string
console.log("typeof true:", typeof true);     // boolean

class MyClass {}
let obj = new MyClass();
console.log("obj instanceof MyClass:", obj instanceof MyClass); // true

console.log("\n");


// ===========================
// ❓  TERNARY OPERATOR
// ===========================
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Operator:", result); // Adult

console.log("\n");


// ===========================
// 🧠  BITWISE OPERATORS
// ===========================
let m = 5;   // 0101
let n = 3;   // 0011

console.log("Bitwise Operators:");
console.log("AND (&):", m & n);   // 1
console.log("OR (|):", m | n);    // 7
console.log("XOR (^):", m ^ n);   // 6
console.log("NOT (~):", ~m);      // -6
console.log("Left Shift (<<):", m << 1);  // 10
console.log("Right Shift (>>):", m >> 1); // 2


let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


