setTimeout(function () {
  console.log("Hello in 3 seconds");
}, 1000); // 3 seconds

setTimeout(() => {
  console.log("Hello in 5 seconds");
}, 5000); // 5 seconds

// Exercise console.log()

setTimeout(function () {
  console.log("First console.log()");
    setTimeout(function () {
       console.log("Second console.log()");
       setTimeout(function () {
          console.log("Third console.log()");
         }, 3000);
     }, 1000);
}, 5000);