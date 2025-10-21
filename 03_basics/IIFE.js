// Immediately Invoked Function Expression (IIFE)


// Named function IIFE
(function chai (){
  console.log("DB CONNECTED");
})(); // function execution


// unnamed function IIFE
(()=>{ console.log("DB CONNECTED"); })(); // arrow function IIFE


((name)=>{
  console.log(`DB TWO CONNECTED BY ${name}`)
})("kunal");