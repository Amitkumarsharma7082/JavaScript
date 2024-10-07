//reduce method
const myNums = [1, 2, 3];
/* Normal with function */

// acc = accumulator, currval = currentValue
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`Accumulator is ${acc} and CurrentValue is : ${currval}`);
//  *****Note**** first time accumulator empty intital 0 and
// currentValue is 1 return 0+1
//   return acc + currval;
// }, 0); //0 is intial value might be change like : 3
// console.log(myTotal);

//Arrow function
const myTotal = myNums.reduce((acc, currval) => {
  return acc + currval;
}, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
