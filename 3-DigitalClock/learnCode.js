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
