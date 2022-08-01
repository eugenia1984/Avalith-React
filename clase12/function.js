// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;

// let suma;
// suma = a + b;
// console.log("Primera suma", suma);
// suma = c + d;
// console.log("Segunda suma", suma);

 function sum(a, b) {
  console.log("Suma de a + b", a + b);
}
sum(c, d); // 3

const sumWithArrowFunction = (a, b) => {
   return a + b;
};
console.log("Suma con arrow function", sumWithArrowFunction(a, b));

const sumImplicit = (c, d) => c + d;

console.log("Suma implicita", sumImplicit(c, d));