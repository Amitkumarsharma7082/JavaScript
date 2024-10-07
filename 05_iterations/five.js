//forEach Loop
const coding = ["js", "ruby", "java"];

// coding.forEach(function (item) { // call back function no name required
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val); //Arrow callBack function used
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe); // create a function send reference

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr); // js 0 [ 'js', 'ruby', 'java' ]
// });

//Array of Object >

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];
//forEach function is used for call Back arrow function
myCoding.forEach((item) => {
  console.log(item.languageName);
});
