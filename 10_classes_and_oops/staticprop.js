class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  //static word use not access to
  static createId() {
    return `123`;
  }
}
const amit = new User("amit");
//console.log(amit.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.createId());
