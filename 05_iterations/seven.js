const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((nums) => {
//   return nums + 10;
// });

// chaining method
//map and map also add filter method thats call chaining method
//filter based on condition
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums);
