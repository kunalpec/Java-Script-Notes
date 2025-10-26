function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}
const user1 = new User("kunal@gmail.com", "12345ok@");

// reading email
console.log(user1.email); // shows "KUNAL@GMAIL.COM"

// changing email
user1.email = "new@gmail.com"; // updates _email
console.log(user1.email); // shows "NEW@GMAIL.COM"



// here the email is virtual property ok..
// The setter takes that value and stores it in _email.

