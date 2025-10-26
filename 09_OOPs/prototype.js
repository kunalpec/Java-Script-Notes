let Myname="kunal    ";

console.log(Myname.length);
// We want to make the method that can be use in all other string declared..

// Story-----------------------
let myHeros=["thor","ironman","spiderman"];

let heroPower={
  thor:"hammer",
  spiderman:"sling",
  ironman:"suit",

  getSpiderPower:function()
  {
    console.log(`Spider power is ${this.spiderman}`);
  }
};


// ------------------------
// if i want to add the function in Object Prototype

Object.prototype.kunal=function(){
  console.log('kunal is  coding....');
}

heroPower.kunal();
myHeros.kunal();


// -----------------
// inject function in Array Object

Array.prototype.HeyKunal=function(){
  console.log("Do change in Array...");
}

myHeros.HeyKunal(); // array can access
// heroPower.HeyKunal(); // object can access

// inheritance---------------------


const user ={
  name:"chai",
  email:"google.com",
}

const Teacher={
  makeVideo:true
}

const TeachingSupport={
  isAvailable:false
}

const TASupport={
  makeAssignment:'Js Assignment',
  fullTime:true,
  __proto__:TeachingSupport
}

Teacher.__proto__=user;

// -------------------new way to inheritance---------

Object.setPrototypeOf(TeachingSupport,Teacher);
// TeachingSupport access the properties of Teacher


let anotherusername="ChaiAurCode    ";

String.prototype.truetext=function()
{
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
}
anotherusername.truetext();