const user={
  username:"kunal",
  loginCount:8,
  signedIn:true,

  getUserDetail: function(){
    console.log(`Got ${this.username} details from databases..`);
  }
}

console.log(user.getUserDetail());


// -------------------------
// new

function User(username,loginStatus,loginCount){
  this.username=username;
  this.loginStatus=loginStatus;
  this.loginCount=loginCount;

  this.greeting=function(){
    console.log(`Welcome ${this.username}`);
  }

  return this;
}

const userOne= new User("Hitesh",true,12);
const userTwo= new User("Kunal",true,22);
console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

// instance of function 