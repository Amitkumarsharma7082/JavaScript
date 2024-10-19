// ES6 after
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsernam() {
    return `${this.username.toUpperCase()}`;
  }
}
const chai = new User("chai", "chai@email.com", "123");
//console.log(chai.encryptPassword()); // o/p : 123abc
console.log(chai.changeUsernam());

// Behind  the scene

function UserOne(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
UserOne.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const chaiOne = new UserOne("chai", "chai@email.com", "123");
console.log(chaiOne.encryptPassword());
