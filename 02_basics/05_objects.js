// Destructuring Object

const course={
  coursename:"JS in Hindi",
  price:299,
  courseInstructor:"Kunal Singh",
}

// Destructuring
const { coursename, price, courseInstructor: Instructor } = course;
console.log("Course Name:", coursename);
console.log("Price:", price);
console.log("Instructor:", Instructor);

// Json data
// object data format
// {
//   "name": "Kunal Singh",
//   "age": 20,
//   "isLoggedIn": true,
//   "courses": ["JS", "React", "NodeJS"]
// }

// array of objects
// [
//   {},
//   {},
//   {}
// ]