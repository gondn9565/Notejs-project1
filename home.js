console.log("Server file is running...");
console.log(
  "This is a simple Node.js program to check if a user is eligible to vote based on their age."
);
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// To run this file, use the command: npx nodemon server.js

//callback function
function callback() {
  console.log("you are calling a callback function");
}
const add = function (a, b, callback) {
  var result = a + b;
  console.log("The sum of a and b is: " + result);
  callback();
};
add(10, 20, () => {
  console.log("sum is calculated successfully.");
}); //callback function is called after the main fu
