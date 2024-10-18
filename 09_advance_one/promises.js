// fetch('https://google.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network call
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
// consume the Promise
// then() resolve
promiseOne.then(function () {
  // return the value of Promise
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//Data Consumation
const promiseThree = new Promise(function (resolve, reject) {
  // Network se data aaya ho
  setTimeout(function () {
    resolve({ username: "learn", email: "aksharma7404@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// then and catch
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // mtlb error hai
    // error ko check kar ke btauga
    let error = true;
    // agr error ni hai to
    if (!error) {
      resolve({ username: "Amit", password: "123" });
    } else {
      //reject ek error dega
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// promiseFour.then().catch()
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // mtlb error hai
    // error ko check kar ke btauga
    let error = true;
    // agr error ni hai to
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      //reject ek error dega
      reject("ERROR : JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("error");
  }
}
consumePromiseFive();

// With JSON

// async function getAllUsers() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR : ", error);
//   }
// }
// getAllUsers();

// issi method ko then and catch

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
