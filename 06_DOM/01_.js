function add() {
  // return 2 + 3;
  console.log(2 + 3);
}

console.log(add);   // 👉 function reference
console.log(add()); // 👉 function call, returns 5
setInterval(add, 1000); // 👉 calls add every second