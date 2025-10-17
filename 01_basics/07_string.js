const name="kunal";
const repoCount=5;
const isLoggedIn=true;

console.log(name+repoCount+isLoggedIn); // kunal5true


// string interpolation
console.log( `Hello ${name} 
You have ${repoCount} repos
Logged In status: ${isLoggedIn}` ); 

// # other way to assign string to variable
const fullName = new String("Kunal Sharma");
console.log(fullName);


console.log( fullName.toUpperCase() );
console.log( fullName.toLowerCase() );
console.log( fullName.length );
console.log( fullName.charAt(0));
console.log( fullName.indexOf("Sharma"));
console.log( fullName.includes("Kunal") );
console.log( fullName.startsWith("Kun") );
console.log( fullName.endsWith("rma") );
console.log( fullName.replace("Kunal", "Rahul") );
console.log( fullName.trim() ); // removes extra spaces
console.log( fullName.split(" ") ); // splits into array based on space
console.log( fullName.valueOf() ); // primitive value of string object
console.log( typeof(fullName) ); // object

const newString=fullName.substring(0,5);
console.log(newString);

console.log(fullName.slice(0,5));
console.log(fullName.slice(-5)); // last 5 characters