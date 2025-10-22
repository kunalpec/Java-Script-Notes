const myNums=[1,2,3]; 

// const myTotal=myNums.reduce(function(acc,cur){
//   console.log(`acc: ${acc} and cur: ${cur}`);
//   return acc+cur;
// },0);

// console.log(myTotal);


const myTotal=myNums.reduce((acc,cur)=>acc+cur,0);
console.log(myTotal);


const shoppingCart=[
  {itemName:"Book",price:200},
  {itemName:"Laptop",price:30000},
  {itemName:"Mobile",price:20000},
  {itemName:"Headphones",price:2000},
];

const totalAmount=shoppingCart.reduce((acc,cur)=>acc+cur.price,0);
console.log(`Total Amount: ${totalAmount}`);
