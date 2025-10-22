// for 
const Array=['apple','banana','cherry'];
for(let index=0;index<Array.length;index++){
    const element=Array[index];
    console.log(`${index}: ${element.toUpperCase()}`);
    
}
// while
let count=0;
while(count<5){
    console.log(`Count is: ${count}`);
    count++;
}

// do...while
let number=0;
do{
    console.log(`Number is: ${number}`);
    number++;
}while(number<3);

// for...of
const fruits=['mango','orange','grape'];
for(const fruit of fruits){
    console.log(fruit);
}

// for...in
const person={name:'John',age:30,city:'New York'};
for(const key in person){
    console.log(`${key}: ${person[key]}`);
}


const array1=['a','b','c'];
for(const index in array1){
    console.log(`Index: ${index}, Value: ${array1[index]}`);
}

// break and continue
for(let i=0;i<10;i++){
    if(i===5){
        break; // exit loop when i is 5
    }
    if(i%2===0){
        continue; // skip even numbers
    }
    console.log(i);
}

// nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// labeled statements
outerLoop:
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        if(i===2 && j===2){
            break outerLoop; // exit both loops
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Maps
const map=new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');
map.set('IN', 'India'); // duplicate key

console.log('Map:', map);


for (const [key, value] of map) {
    console.log('Key:', key);
    // console.log('Value:', value);
}