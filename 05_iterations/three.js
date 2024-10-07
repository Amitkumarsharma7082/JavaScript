// for of loop

// ["", "", ""];
// [{},{},{}];

const arr = [1, 2, 3, 4, 5];
//for(const iteration of object) > object mean that in which array contain on loop
for (const num of arr) {
  //console.log(num);
}

//char by char loop > output looks different
const greetings = "Hello World!";
for (const greet of greetings) {
  //char by char
  if (greet == " ") {
    continue;
  }
  //console.log(`Each char : ${greet}`);
  //output>>>>
  // Each char : W
  // Each char : o
  // Each char : r
  // Each char : l
  // Each char : d
  // Each char : !
}

//Maps >> is depand on [key, value] pair
const map = new Map(); //apne aap main Map ek object
map.set("IN", "India");
map.set("US", "United States of America");
map.set("Fr", "France");
//if we repeat the value of 'IN', "India" in map.set that is not include because its
//depand on key value pair

for (const [key, value] of map) {
  //console.log(key, ":-", value);
}

//Object
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
