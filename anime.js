let hamburger = document.querySelector("#hamburger");
// console.log(hamburger);
let bars = document.querySelector("#bars");
let list = document.querySelector("#list");
let soon = document.getElementById("soon");
hamburger.addEventListener("click", () => {
  console.log("called");
  list.classList.toggle("classlist-active");
  bars.classList.toggle("fa-xmark");
});
let moon = document.getElementById("moon");
moon.addEventListener("click", () => {
  document.body.classList.toggle("theme");
  soon.classList.toggle("fa-moon");
});

// import { asynchandler } from "./public/asynchandler.js";
// asynchandler();
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Shiyaan", sayBye);

// function greet(name, callback) {
//   console.log("hlw" + name);
//   callback();
// }
// function set() {
//   console.log("good bye");
// }
// greet("shiyaan", set);
