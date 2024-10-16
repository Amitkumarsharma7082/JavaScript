# Projects related to DOM

## Project link

[Click here]()

# Solution code

## Project 1 Background color change

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

## Project 2 BMI Calculator

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
