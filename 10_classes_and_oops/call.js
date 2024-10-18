function SetUsername(username) {
  // Complex DB Call
  this.username = username;
  console.log("Called");
}
function createUser(username, email, password) {
  // Direct call mat karwa method call karwao
  //SetUsername(username);
  // kiye ko lagat Exceution context bhi aajyega

  // ****** But i wat outSource the name SetUsername

  SetUsername.call(this, username);

  //**** refernce Hold the .call */
  //   this.username = username;
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@facebook.com", 123);
console.log(chai); // createUser { email: 'chai@facebook.com', password: 123 }
