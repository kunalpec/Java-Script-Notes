// ======================= Basic Array Creation =======================

const myArr = [10, 20, 30, 40, 50];

// Accessing elements
console.log("First Element:", myArr[0]); // 10
console.log("Third Element:", myArr[2]); // 30


// ======================= Copy Concepts =======================

// Shallow copy
// "A shallow copy copies only the top-level properties of an object.
// If the object has nested objects, both copies share the same reference.
// So, changing a nested value in one object also changes it in the other."

// Deep copy
// "A deep copy creates a completely independent copy of an object, 
// including all nested objects. Changes made to the copy do not affect 
// the original object because they don’t share any references."


// ======================= More Arrays =======================

const myHeros = ["Spiderman", "Ironman", "Thor", "Hulk"];
const myVillains = ["Loki", "Thanos", "Green Goblin"];

const myArr2 = new Array(1, 2, 3, 4, 5, "kunal");
console.log("Array using new keyword:", myArr2);


// ======================= Array Methods =======================

const arr = [];

// push() → Add element at end
arr.push(100);
console.log("After push:", arr);

// pop() → Remove last element
arr.pop();
console.log("After pop:", arr);

// unshift() → Add element at start
arr.unshift(200);
console.log("After unshift:", arr);

// shift() → Remove element from start
arr.shift();
console.log("After shift:", arr);

// includes() → Check if value exists
console.log("present at index 2?", myHeros.includes("Thor"));

// indexOf() → Find index of value
console.log("Index of Hulk:", myHeros.indexOf("Hulk"));

// join() → Convert array to string
const newArray = myHeros.join(" * ");
console.log("Joined String:", newArray);

// concat() → Combine arrays
const myNewArray = myHeros.concat(myVillains);
console.log("Concatenated Array:", myNewArray);


// ======================= slice() vs splice() =======================

console.log("A", myArr);

// slice() → Returns part of array without changing original
const slicedArray = myArr.slice(1, 4);
console.log("Sliced Array (1 to 4):", slicedArray);
console.log("Original Array after slice:", myArr);

// splice() → Removes/adds elements and changes original array
console.log("B", myArr);
const splicedArray = myArr.splice(1, 2, 99, 100);
console.log("Spliced Array (removed elements):", splicedArray);
console.log("Original Array after splice:", myArr);