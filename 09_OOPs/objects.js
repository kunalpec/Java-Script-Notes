function multiple5(num){
  return num*5;
}

multiple5.power=2;
console.log("Calling the function: ",multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

// --------------------------------

function UserBill(produt,price){
  this.produt=produt;
  this.price=price;
}

UserBill.prototype.increment=function(){
  this.price++;
}

UserBill.prototype.PrintMe=function(){
  console.log(`${this.produt} = ${this.price}`);
}

const cu1=new UserBill("coffee",12);
const cu2=new UserBill("Tea",10);

cu1.PrintMe();
cu2.PrintMe();
