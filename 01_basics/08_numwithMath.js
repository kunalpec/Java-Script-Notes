const Score=400;
console.log(Score);

const balance= new Number(500);
console.log(balance);

console.log("String balance:", balance.toString());
console.log("Balance fixed (2):", balance.toFixed(2));
console.log("Balance value:", balance.valueOf());

const otherNumber = new Number(60.78990);
console.log("Other number:", otherNumber.toPrecision(3));

const Hundreds = 1000000;
console.log("Hundreds toLocaleString:", Hundreds.toLocaleString('en-IN'));

console.log("Max Value:", Number.MAX_VALUE);
console.log("Min Value:", Number.MIN_VALUE);
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);
console.log("NaN (Not a Number):", Number.NaN);


// ++++++++++++++ Math Object Examples ++++++++++++++
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);

console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.ceil(4.2):", Math.ceil(4.2));

console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.round(4.4):", Math.round(4.4));


console.log("Math.max(10, 20, 5):", Math.max(10, 20, 5));
console.log("Math.min(10, 20, 5):", Math.min(10, 20, 5));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.random():", Math.random());
console.log("Math.floor(Math.random() * 100) + 1:", Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100


let min=10
let max=50
console.log("Random number between 10 and 50:", Math.floor(Math.random() * (max - min + 1)) + min);