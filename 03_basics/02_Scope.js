if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);

// nested scope

function one(){
  const username ="kunal";
  function two(){
    const website="YouTube";
    console.log(username);
  }
  // console.log(website);
  two();

};
one();


