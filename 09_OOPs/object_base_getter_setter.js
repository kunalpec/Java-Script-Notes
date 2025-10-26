const User={
  _email:'h@hc.com',
  _password:'123esxdr43ws',

  get email(){
    return this._email.toUpperCase();
  },
  set email(value)
  {
    this._email=value;
  }
}

const tea =Object.create(User);
// means userObject ke base pa object defind kar rhe ha  
console.log(tea.email);
console.log(tea._email)