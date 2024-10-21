const User = {
  _eamil: "a@amit.com",
  _password: "abc",

  get email() {
    return this._eamil.toUpperCase();
  },
  // email is property
  // array is .length property get&set in built property
  set email(value) {
    this._email = value;
  },
};

// Factory function
const tea = Object.create(User);
console.log(tea.email); // A@AMIT.COM (Output)
