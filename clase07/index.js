// primer array de numeros
const myFirstArray = [1, 2, 3, 4, 5];
// segundo array de letras
const mySecondArray = ["a", "b", "c", "d", "e"];
// un objeto
const myFirstObject = {
  name: "Juan",
  age: 30,
  inMarried: true
}

console.log(typeof myFirstArray); // object
console.log(Array.isArray(myFirstArray)); // true
console.log(typeof myFirstObject);
console.log(Array.isArray(myFirstObject)); // false
console.log("Aca mostramos el array miFirstArray", myFirstObject);