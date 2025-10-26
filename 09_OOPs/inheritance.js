class User{
  constructor(username){
    this.username=username;
  }

  logMe()
  {
    return `USERNAME is ${this.username}`;
  }
}

class Teacher extends User
{
  constructor(username,email,password){
    super(username); //inherit the User all method and attributes
    this.email=email;
    this.password=password;
  }

  addCourse(){
    console.log(`A new courses was added by ${this.usernamename}`);
  }
}

const chai=new Teacher('chai','kunal@gmail.com','12329iuhg5');

chai.addCourse();
console.log(chai);
console.log(chai.logMe());


console.log(chai instanceof User);