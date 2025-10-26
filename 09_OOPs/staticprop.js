class User{
  constructor(username)
  {
    this.username=username;
  }

  logMe()
  {
    console.log(`Username : ${this.username}`);
  }

  static createId()
  {
    return '133';
  }
}

const kunal=new User("kunal");
console.log(kunal.createId());

class Teacher extends User{
  constructor(username,email)
  {
    super(username);
    this.email=email;
  }
}

const iphone=new Teacher("iphone","qwer@gmail.com");
console.log(iphone.createId()); //error