// ================== Singleton and Non-Singleton Objects ==================

// Singleton object (created using Object constructor)
const tinderUser = new Object();  

// Non-singleton object literal
// const tinderUser = {}; 

// Adding properties
tinderUser.name = "Kunal Singh";
tinderUser.age = 20;
tinderUser.isLoggedIn = true;
tinderUser.getCourseCount = 5;

// Adding a method
tinderUser.greetUser = function() {
  console.log("Hello", this.name, "Welcome back!");
};

// Example call
// tinderUser.greetUser();


// ================== Nested Object Example ==================
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Kunal",
      lastname: "Singh"
    }
  }
};

// Accessing nested property
// console.log(regularUser.fullname.userfullname.firstname);


// ================== Object Merging Examples ==================
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// Using Object.assign() → {} is target, others are source
const newObject = Object.assign({}, obj1, obj2);

// Using spread operator
const object3 = { ...obj1, ...obj2 };


// ================== Array of Nested Objects ==================
const users = [
  { userId: 1, userName: "Kunal" },
  { userId: 2, userName: "Tony" },
  { userId: 3, userName: "Steve" }, 
  { userId: 4, userName: "Bruce" },
];

// Accessing property in nested array of objects
// console.log(users[1].userName);


// ================== Object Utility Methods ==================

// Get all keys
console.log("Keys:", Object.keys(tinderUser));

// Get all values
console.log("Values:", Object.values(tinderUser));

// Get key-value pairs
console.log("Entries:", Object.entries(tinderUser));

// Check if property exists
console.log("Has 'age' property:", tinderUser.hasOwnProperty("age"));


// ================== Advanced Object Methods ==================

// Freeze an object → cannot add, remove, or modify properties
Object.freeze(tinderUser);
// tinderUser.age = 25; // ❌ won't work after freeze
// console.log("After freeze:", tinderUser);

// Seal an object → can modify existing properties, but cannot add/remove
Object.seal(tinderUser);
tinderUser.age = 21; // ✅ works
// tinderUser.city = "Dehrabassi"; // ❌ cannot add new property
// console.log("After seal:", tinderUser);

// Create a new object with prototype
const student = Object.create(tinderUser);
student.name = "Mini Singh";
student.age = 18;
// console.log("Student:", student.name, "Prototype:", student.__proto__.name);

// Define new property with configuration
Object.defineProperty(tinderUser, "country", {
  value: "India",
  writable: false,     // cannot modify
  enumerable: true,    // will appear in keys
  configurable: false  // cannot delete
});
// console.log(tinderUser.country);

// Get all property names (including non-enumerable)
console.log("Property names:", Object.getOwnPropertyNames(tinderUser));

// Get property descriptor
console.log("Descriptor of 'country':", Object.getOwnPropertyDescriptor(tinderUser, "country"));

// Get prototype of object
console.log("Prototype of student:", Object.getPrototypeOf(student));

// Prevent extensions (cannot add new properties)
Object.preventExtensions(tinderUser);
console.log("Is extensible:", Object.isExtensible(tinderUser));


// ================== Looping Over Objects ==================

// Using for...in loop
for (let key in tinderUser) {
  console.log(`${key}: ${tinderUser[key]}`);
}

// Using Object.entries() with for...of
for (let [key, value] of Object.entries(tinderUser)) {
  console.log(`Key: ${key}, Value: ${value}`);
}
