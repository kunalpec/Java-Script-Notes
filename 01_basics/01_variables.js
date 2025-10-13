// ===================================================
// 📝 JavaScript Variable Declarations
// ===================================================
//
// There are 3 main ways to declare variables in JavaScript:
// 1️⃣ var
// 2️⃣ let
// 3️⃣ const
// ===================================================


// ---------------------------------------------------
// 🔹 1️⃣ const → Used for constants (fixed values)
// ---------------------------------------------------
const accountIdName = 123334; // Value cannot be changed once assigned
// accountIdName = 54321; ❌ Error: const variables cannot be reassigned


// ---------------------------------------------------
// 🔹 2️⃣ let → Used for variables that can change later
// ---------------------------------------------------
let accountEmail = "kunal2612004@gmail.com"; // Initial value
accountEmail = "kunal@example.com"; // ✅ Reassigning is allowed


// ---------------------------------------------------
// 🔹 3️⃣ var → Old way to declare variables (avoid in modern JS)
// ---------------------------------------------------
var accountPassword = "123456";
accountPassword = "654321"; // ✅ Reassigning allowed
var accountPassword = "999999"; // ✅ Redeclaration allowed (unsafe practice)


// ---------------------------------------------------
// ⚠️ Declaring without var/let/const (Bad Practice)
// ---------------------------------------------------
accountCity = "Punjab"; // ❌ Automatically becomes a global variable — avoid this


// ---------------------------------------------------
// 🔹 Example of Undefined
// ---------------------------------------------------
let accountState; // Variable declared but not assigned → undefined by default
console.log("Account State:", accountState); // Output: undefined


// ---------------------------------------------------
// ✅ Output Section
// ---------------------------------------------------
console.log(accountIdName, accountEmail, accountPassword, accountCity, accountState);
console.table({ 
  Account_ID: accountIdName, 
  Email: accountEmail, 
  Password: accountPassword, 
  City: accountCity,
  State: accountState 
});


// ---------------------------------------------------
// 🧠 Summary Notes
// ---------------------------------------------------
/*
const → Fixed value, cannot be reassigned.
let   → Block-scoped, can be reassigned.
var   → Function-scoped, can be redeclared (avoid using).
undefined → Value automatically assigned to uninitialized variables.

✅ Best Practice:
Prefer to avoid using 'var' to prevent scope and redeclaration issues.
Always use 'const' for fixed values and 'let' for changeable ones.
*/
// ===================================================
