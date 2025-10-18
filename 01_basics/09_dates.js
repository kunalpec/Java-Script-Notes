// # Create a Date Object
// Current date and time
let now = new Date();
console.log("Current Date & Time:", now.toDateString());

// Specific date (YYYY, MM, DD)
let d1 = new Date(2025, 9, 18); // month is 0-based (9 = October)
console.log("Specific Date:", d1.toDateString());

// Specific date and time
let d2 = new Date(2025, 9, 18, 15, 45, 30);
console.log("Specific Date & Time:", d2.toDateString());

// From a date string
let d3 = new Date("2025-10-18T15:45:30");
console.log("From String:", d3.toLocaleString());

// Time Stamp
let myTimestamp = new Date();
console.log("Timestamp (ms since Jan 1, 1970):", myTimestamp.getTime());


// 2. Get Date Components

let date = new Date();

console.log("Year:", date.getFullYear());
console.log("Month (0–11):", date.getMonth());   // January = 0
console.log("Date:", date.getDate());
console.log("Day (0–6):", date.getDay());        // Sunday = 0
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());
console.log("Milliseconds:", date.getMilliseconds());


// 3. Set Date Components
let setDate = new Date();
setDate.setFullYear(2030);
setDate.setMonth(11);  // December
setDate.setDate(25);
console.log("Updated Date:", setDate.toLocaleString());

console.log("Updated Date:", setDate.toLocaleString("en-US", {
  weekday: "long",   // "Monday"
  year: "numeric",   // "2025"
  month: "long",     // "October"
  day: "numeric",    // "18"
  hour: "2-digit",   // "04"
  minute: "2-digit", // "30"
  second: "2-digit", // "15"
  hour12: true       // 12-hour format
}));

// Only date
console.log(setDate.toLocaleString("en-IN", { dateStyle: "full" }));

// Only time
console.log(setDate.toLocaleString("en-IN", { timeStyle: "medium" }));
