let myName = "Amit";

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHero = ["Thor", "Spiderman"];

let heroPower = {
  Thor: "Hammer",
  Spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.Spiderman}`);
  },
};
Object.prototype.amit = function () {
  console.log(`Amit is present in all objects`);
};
Array.prototype.heyAmit = function () {
  console.log(`Amit says Hello`);
};
//heroPower.amit();
// myHero.amit();
// myHero.heyAmit();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
// OutDated Code/Approach

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True Length is : ${this.trim().length}`);
};
anotherUserName.trueLength();
"amit".trueLength();
"iceTea".trueLength();
