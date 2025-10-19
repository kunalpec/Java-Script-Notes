// singleton

// object literals

// Symbol type
const mySym=Symbol("myKey1");


const JsUser={
  name:"Kunal",
  "Full Name":"Kunal Singh",
  [mySym]:"myValue1",
  age:20,
  location:"Punjab",
  email:"kunal2612004@gmail.com",
  isLoggedIn:true,
  lastLoginDays:["Monday", "Friday", "Saturday"],
}

// error
// console.log(JsUser.Full Name);

// corrected way
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);


// Object.freeze(JsUser);
JsUser.age=21;
console.log(JsUser.age);

console.log(JsUser)

// JsUser Greetings function
JsUser.greetUser=function(){
  console.log("Hello ", this.name, "Welcome back!");
}
console.log(JsUser.greetUser);

// JsUser Greetings function
JsUser.greetUserTwo=function(){
  console.log(`Hello ${this.name}, Welcome back!`);
}
JsUser.greetUserTwo();