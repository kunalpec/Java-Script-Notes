class user{
  constructor(email,password)
  {
    this.email=email;
    this.password=password;
  }
  get email()
  {
    return this._email.toUpperCase();
  }
  set email(value)
  {
    this._email=value;
  }
  get password()
  {
    return this._password.toUpperCase();
  }

  set password(value)
  {
    this._password=value;
  }
}

// this.password = password in constructor calls this setter.

// It stores the value in _password, which is a "hidden/internal" property.

// This is a common pattern to avoid infinite recursion (this.password = value would call setter again if we didn’t use _password).

const user1=new user("kunal@gmail.com","12345ok@");
console.log(user1);

user1.email="kunal.bt23cseds@pec.edu.in";
console.log(user1);

console.log(user1._email);
