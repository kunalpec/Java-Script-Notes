// function_Name() | function execution
// function_Name | Reference 

// 1
function addTwoNumbers(num1,num2)
{
  console.log(num1+num2);
}
addTwoNumbers(5,7); // function execution

// 2
const result=addTwoNumbers(3,5); // function execution
console.log("Result:",result); // undefined beacuse function does not return anything

// 3
function addTwoNumbersReturn(num1,num2)
{
  return num1+num2;
}
const sum=addTwoNumbersReturn(10,15);
console.log("Sum:",sum); // 25

// 4 Function Expression
function loginUserMessage(username){
  return `${username} just logged in`;
}
console.log(loginUserMessage("Kunal")); // function execution

// 5 function undefined case
console.log("Function :", loginUserMessage()); // undefined because username is not 

// 6 Shopping Cart example use rest operator

function AddCartPrice(...num1)
{
  return num1;
}

console.log(AddCartPrice(200, 400, 500));

function AddCartPriceTotal(val1,val2,...num1)
{
  return num1;
}
console.log(AddCartPriceTotal(100,200, 400, 500,600));

// 7 Pass Object to Function
const user={
  username:"kunal",
  price:199,
};

function handleObject(anyobject)
{
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user); // function execution

// 8 pass array to function 

function handleArray(anyarray)
{
  anyarray.forEach((item) => {
    console.log(`Fruit: ${item}`);
  });
}
const fruits=["apple","banana","grapes"];
handleArray(fruits); // function execution   