class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  // password ni btna customized code
  // get define so setter also define
  get password() {
    return `${this._password}amit`;
    // Power to show value different and save old
  }
  // Maximum call stack is exceeded
  set password(value) {
    // new password variable
    this._password = value;
  }
}

const amit = new User("a@amit.ai", "abc");
console.log(amit.password);
console.log(amit.email);
