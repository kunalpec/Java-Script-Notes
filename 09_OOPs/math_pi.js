const description = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(description);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// in this Writable=false means it can't be over write

const chai = {
  name: "ginger-chai",
  price: 250,
  isAvailable: true,
};

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// fix the values
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperties(chai, {
  name: {
    writable: false,
    enumerable: false,
    configurable: false,
  },
  price: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
  isAvailable: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
});

chai.price=12345678;
console.log(chai.price);

// write:Can we change the value of the property?
// ✅ true → You can change it
// ❌ false → You cannot change it


// enumerable:Can the property be seen in loops or Object.keys()?
// ✅ true → Visible in loops
// ❌ false → Hidden from loops


// configurable:Can the property be deleted or redefined later?
// ✅ true → You can delete or change its descriptor
// ❌ false → You cannot delete or modify descriptor