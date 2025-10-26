let anotherusername="ChaiAurCode    ";

String.prototype.truetext=function()
{
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
}
anotherusername.truetext();

// anotherusername is a primitive datatype so JS automatically wrap this into String Objrct useing String constructor.

// So internally, JS temporarily does this:
// new String("ChaiAurCode    ").truetext();


// Here this refers to that temporary String object, which when converted to a

const Data= new String('kunal  ');
console.log(Data);
console.log(Data.valueOf());


const obj = {
  name: "Kunal",
  Age:12,
  course:"CSE",
  show() {
    console.log(`${this}`);
  }
};

obj.show();

// Agar this ek normal object hai → " [object Object]"

// Agar this ek String object hai → primitive string value return hoti hai