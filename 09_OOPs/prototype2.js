// call, apply, and bind are very important in JS,

// call

function setUsername(username)
{
  this.username=username;
  console.log('called');
}

function getinfo(username,email,age)
{
  setUsername(username);
  this.email=email;
  this.age=age;
}

const user1=new getinfo('kunal','kunal@gmail.com',20);
console.log(user1);