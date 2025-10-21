// ++++++++ interesting case ++++++++++

function addone(num)
{
  return num+1;
}
addone(5);
console.log(addone(5));

const addTwo= function(num){
  return num+2;
}
addTwo(5);
console.log(addTwo(5));

// +++++++++ arraow function ++++++++++

const user={
  username:"kunal",
  price:999,

  welcomeMessage: function(){
    console.log(this);
    return `Welcome ${this.username} to our website`;

  }
}

console.log(user.welcomeMessage());
console.log(this);


// // 1
// function chai(){
//   console.log(this);
// }
// chai();

// // 2
// function chai1(){
//   let username="Kunal";
//   console.log(this.username);
// }
// chai1();

// 3
const chai2=()=>{
  console.log(this);
}
chai2();

// 4
const addnumber=(num1,num2)=>{
  return num1+num2; // explicit return
}
console.log(addnumber(5,10));

const addnumber2=(num1)=> (num1+100); // implicit return
console.log(addnumber2(50));