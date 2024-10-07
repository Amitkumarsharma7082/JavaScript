const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myObject) {
  //console.log(`${key} shortcut is ${myObject[key]}`);
}
const programming = ["js", "cpp", "rb", "java", "python"];
for (const key in programming) {
  //console.log(key); //Output is : 0,1,2,3,4
  /*
  why ? : 
  over the enumerable properties of an object. In the case of an array,
  it iterates over the indices (keys),
  console.log(programming[key]); // now print all value
  */
}
for (const key of programming) {
  //console.log(key); // but for of is work differnt
  /*
why ? :
  iterate over iterable objects, such as arrays.
  It gives you the values of the array elements directly,
  */
}

//Map
const map = new Map(); //apne aap main Map ek object
map.set("IN", "India");
map.set("US", "United States of America");
map.set("Fr", "France");
//if we repeat the value of 'IN', "India" in map.set that is not include because its
//depand on key value pair

for (const key in map) {
  console.log(key); // output : empty nothing run
}
