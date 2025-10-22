const coding = ["js", "ruby", "java", "python", "c++", "go", "rust"];

coding.forEach((language, index) => {
  console.log(`Language at index ${index} is ${language}`);
})

function printMe(item)
{
  console.log(`Item: ${item}`);
}

coding.forEach(printMe); // we are giving reference of function printMe

coding.forEach((item,index,arr) => {
  console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});


// ++++++++++++++++++++
const MyCoding=[
  {
    languageName:"js",
    type:"frontend"
  },
  {    languageName:"ruby",
    type:"backend"
  },
  {
    languageName:"java",
    type:"backend"
  },
  {    languageName:"python",
    type:"both"
  } ,
  {    languageName:"c++",
    type:"both"
  },
  {    languageName:"go",
    type:"backend"    
  },
  {    languageName:"rust",
    type:"both"    
  }  
];
console.log("++++++++++++++");

MyCoding.forEach((langObj) => {
  console.log(`${langObj.languageName}`)
});