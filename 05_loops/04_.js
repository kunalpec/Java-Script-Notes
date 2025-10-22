const MyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newnums = MyNumber.map((num)=>{return num+10});
console.log(newnums);


// chaining

const newnums2=MyNumber
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>{return num>=40});

console.log(newnums2);