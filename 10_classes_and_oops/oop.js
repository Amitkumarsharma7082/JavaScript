// Object literal
const user = {
  username: "Amit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Get user details from database");
    //console.log(`Username: ${this.username}`);
    //console.log(this);
  },
};

console.log(user.loginCount);
//console.log(user.getUserDetails());
console.log(this); //output : {} in google window > global main bhut saari cheeze hai

// map() method uses in both 2 array so how we defined it to use
// this method comes to solve problem

// constructor function

//const promiseOne = new Promise();
//const date = new Date();
//new keyword > new context > constructor function
//constructor function ek hi object se multiple intance bna sko

function User(username, loginCount, isLoggedIn) {
  // this. variable = pass karke de rhe ho
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // return this by default hota hai
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Amit", 12, true);
const userTwo = new User("chaiAurcode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
