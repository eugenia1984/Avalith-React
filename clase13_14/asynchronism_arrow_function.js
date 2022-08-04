// Exercise console.log() with Arrow Function Format
setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
    setTimeout(() => {
      console.log("Third");
    }, 3000);
  }, 1000);
}, 5000);