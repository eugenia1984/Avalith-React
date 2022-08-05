// Exercise Asynchronism

console.log("1");
setTimeout(function () {
  console.log("2");
 }, 3000);
 console.log("3");
 setTimeout(function () {
     console.log("4");
 }, 1000);
// Expected output: 1 3 4 2