// stack memeory(Primitives/values)
let x = 10;
let y = x; 
y = 20;

console.log(x); // 10 ✅ (unchanged)

// heap memory(non-primitives/objects/references)
let obj1 = { name: "Kunal" };
let obj2 = obj1;
obj2.name = "Rahul";

console.log(obj1.name); // Rahul ⚠️
