var prompt = require("prompt-sync")(); // This is a simple Node.js program to check if a user is eligible to vote based on their age.
// It uses the prompt-sync package to take user input synchronously.
// let a = 10;
// let b = 20;
// let c = a + b;
// //To run code we use node file name like node index.js
// console.log(`The sum of ${a} and ${b} is ${c}.`);
// console.log("Let's learn nodejs");
let age = prompt("Enter your age: "); // to input from user we we prompt-sync package first of all we have to install npm install prompt-sync then add var prompt = require("prompt-sync")(); on top of the file
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
