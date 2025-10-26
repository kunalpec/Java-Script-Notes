// A Promise is an object in JavaScript that represents 
// the eventual result of an asynchronous operation.

// A Promise can be in one of three states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: operation completed successfully
// 3. rejected: operation failed

// -------------------------
// Promise 1
const promiseOne = new Promise(function (resolve, reject) {
  // Simulate an async task (e.g., DB call, network request)
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // mark the Promise as fulfilled
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// -------------------------
// Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(); // mark the Promise as fulfilled
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// --------------------------
// promise 3

const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"chai",email:"chai@gmail.com"});
  },1000);
});

promiseThree.then(function(user){
  console.log(user);
});

// ----------------------------
// promise 4

const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username:"kunal",password:"123"});
    }else{
      reject('Error: Somthing went wrong');
    }
  },1000);
});

promiseFour
.then(function(user){
  console.log(user);
  return user.username;
})
.then(function(username){
  console.log(username);
})
.catch(function(err){
  console.log(err);
}).finally(function(){
  console.log("Promise finally finished");
})

// ------------------------
// promise 5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // try changing it to false to see resolve
    if (!error) {
      resolve({ username: "kunal", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


// ----------------------
 async function getAllUser(){
  try{
  const url='https://randomuser.me/api/';
  const response=await fetch(url);
  const data=await response.json()
  console.log(data.results[0].gender);
  }catch(error){
    console.log(error);
  }
 }

 getAllUser();