const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);
// output : {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* Output:
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
// multiple properties allowed
Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: false, // mean repeat
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// agr ab koi use karega to usko change ni kar paayega

for (let [key, value] of Object.entries(chai)) {
  if (typeof vlaue !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// chai not iterable
// check imp or code
