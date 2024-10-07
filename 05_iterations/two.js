//While or do while loop
let i = 0;
while (i <= 10) {
  //console.log(`Value of index is ${i}`);
  i = i + 2;
}
//Array in while
let arr = 0;
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
while (arr < myArray.length) {
  //console.log(`${myArray[arr]}`);
  arr = arr + 1;
}

//Do While loop first work then condition
let score = 11;
do {
  console.log(`Score is : ${score}`);
  score++;
} while (score <= 10);
