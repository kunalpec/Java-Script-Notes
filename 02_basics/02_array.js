const marvel_heros = ["Spiderman", "Ironman", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Wonder Woman","Flash"];

1// Using concat() to combine two arrays
console.log("Concatenated Array:", marvel_heros.concat(dc_heros));

// 2 spread operator to combine two arrays
console.log("Comvined array using spread operator:", [...marvel_heros, ...dc_heros]);

// 3 Using push() with spread operator to add elements of one array to another
marvel_heros.push(...dc_heros);
console.log("Marvel heros after push:", marvel_heros);

// 4 Another array
const another_array = [1, 2, 3,[4, 5, 6], 7, [8, 9, [10 , 11,12,99]]];
// Flattening the array using flat()
console.log("Flattened Array (depth 1):", another_array.flat());
console.log("Flattened Array (depth 2):", another_array.flat(2));


// 5 while data scraping we often get data in form of array of arrays
console.log(Array.isArray("Kunal"));
console.log(Array.isArray(["Kunal", "is", "a", "good"]));

console.log(Array.from("Kunal"));
console.log(Array.from({name:"kunal", age: 22, role: "developer"})); // important

// 6 Creating array using Array.of()
const score1=100;
const score2=200;
const score3=300;

const scores = Array.of(score1, score2, score3);
console.log("Scores Array using Array.of():", scores);

// 7 map method

const prices = [100, 200, 300, 400, 500];
const discountedPrices = prices.map((price) => price * 0.9);
console.log("Original Prices:", prices);
console.log("Discounted Prices (10% off):", discountedPrices);

const numbers = [1, 2, 3, 4, 5,100];
// filter() → Filter values based on condition
const filtered = numbers.filter(num => num > 20);
console.log("Filtered (>20):", filtered);


// reverse() → Reverse array order
const reversed = [...numbers].reverse();
console.log("Reversed Array:", reversed);

// sort() → Sort elements
const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted Array:", sorted);

// reduce() → Reduce array to single value
// accumulator
// currentValue
// intialValue of accumulator = 0;
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum);