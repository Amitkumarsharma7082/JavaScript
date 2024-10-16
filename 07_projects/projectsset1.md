# Projects related to DOM

## Project link

[Click here]()

# Solution code

## Project-1 Background color change

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //HTML attribute
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project-2 BMI Calculator

```javascript
const form = document.querySelector("form");
// form when we submit post type and get type form URL send in
// hold the value of form

form.addEventListener("submit", function (e) {
  //preventDefault is hold the value for sometime because value send in the URL
  e.preventDefault();

  //ParseInt in the document.querySelector height is in the String the value
  // convert as a INT with the help parseInt
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //add the value in innerText

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  //show the result
  //results.innerHTML = `<span>${bmi}</span><br>`;

  if (bmi < 15) {
    results.innerHTML = `<strong>${bmi}</strong><br>Under Weight`;
  } else if (bmi > 18 && bmi < 25) {
    results.innerHTML = `<strong>${bmi}</strong><br>Normal Range`;
  } else if (bmi > 25) {
    results.innerHTML = `<strong>${bmi}</strong><br>Overweight`;
  }

  //   ## height and weight IN the form or OUT the Form what happen ?
  //   when i click the get value store in the form but OUT of define the value
  //   when user reload the page automatically default value > null selected
});
```

## Project-3 Digital Clock

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

// Update on run time
// setInterval is that run program continuosly time we give
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true, // 12-hour format
  timeZone: "Asia/Kolkata", // Indian Standard Time
};
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  // Node(Document) Update every 1 second
  clock.innerHTML = date.toLocaleTimeString("en-IN", options);
}, 1000);
```

## Project-4 Guess The Number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```
