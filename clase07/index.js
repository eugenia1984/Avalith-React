// alert("Hola, estás en la web");
// tipos de datos primitivos
const myFirstVariable = "Hello World";
const numberAsString = "5";
const numberAsNumber = 5;
const boolean = true; //true or false
const nullValue = null;
const undefinedValue = undefined;
// muestro todo con console.log
console.log(myFirstVariable);
console.log(numberAsNumber);
console.log(typeof myFirstVariable);
console.log(typeof numberAsString);
console.log(typeof numberAsNumber);
console.log(typeof boolean);
console.log(typeof nullValue);
console.log(typeof undefinedValue);


// primer array de numeros
const myFirstArray = [1, 2, 3, 4, 5];
// segundo array de letras
const mySecondArray = ["a", "b", "c", "d", "e"];
console.log(myFirstArray.length);
console.log(mySecondArray);

const lengthOfFirstArray = myFirstArray.length;
console.log(lengthOfFirstArray);

// un objeto
const myFirstObject = {
  name: "Juan",
  age: 30,
  isMarried: true
}

console.log(typeof myFirstArray); // object
console.log(Array.isArray(myFirstArray)); // true
console.log(typeof myFirstObject);
console.log(Array.isArray(myFirstObject)); // false
console.log("Acá mostramos el objeto", myFirstObject);
console.log("Acá mostramos el array", myFirstArray);

const theObject = {
    name: "Tomi",
};
