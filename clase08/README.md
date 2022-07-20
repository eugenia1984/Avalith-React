# Clase 08 * Miércoles 20 de Julio * JavaScript

---

Buscar sitios creados con la librería **three.js** para sitios con cosas en 3D.

---

## Manipulacion de tipo de datos * CONVERSION

- **toString**: convierte números a cadena de texto

- **Number**: convierte cadena de textos a Numeros -> investigar si funciona con todos los tipos de números

- **parseInt**: convierte cadena de texto a números enteros.

- **parseFloat**: convierte una cadena de texto a números con punto flotante (con coma, decimal).

-> parsear es cambiar de un tipo de dato a otro.

Ejemplo en codigo:

```JavaScript
const string = "Hello world!";
const numberAsString = "123";

const StringToNumber = Number(string);
console.log(`Parse string to number: ${StringToNumber}`); // no deberia poder

const toNumber = Number(NumberAsString);
console.log(`Parse number: ${toNumber}`); // deberia poder

const parseNumber = parseInt(numberAsString);
console.log(`Parse number with parseInt: ${parseToNumber}`); // deberia poder

const parseFloat = parseFloat(numberAString);
console.log(`Parse number with parseFloat: ${parseFLoat}`); // deberia poder

// Numero = 123,456
// Truncado a enteros = 123
// Truncado a dos decimales = 123,45
// Truncado a un decimal = 123,4
// Math.ceil --> Redondeo hacia arriba, hay que indicarle cuantos decimales
// Math.floor --> Redondeo hacia abajo
```

---

¿Sabes que se puede escribir la palabra "banan" con inferencia de datos?

```JavaScript
// write banana with JavaScript
const word = "b" + "a" + + "a";
console.log(word);
```

Empieza con "b" y "a" que al ser String con **+** las va a concatenar, sigue con el espacio vacio que es un **NaN** y lo concatena y luego como tiene la "a" con el **+** tambien lo concatena.

---

## Distintos console

```JavaScript
console.log();
colsole.info();
console.warning();
console.error();
console.table();
```
---

```JavaScript
const object = {
  zoo : ["Panda", "Tiger", "Jirafe"],
  username: "Fabian",
  age: 20,
  isSingle : true,
  array : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
console.log(object.username); // usamos DOT NOTATION
console.log(object["username"]); // no uso dot notation, sino que entre "" muestro de que key voy a buscar el value
console.log(`Animals zoo: ${object.zoo}`);
console.log(`One animal of the zoo: ${object.zoo[[2]]}`); // para ver un elemento dle arrray
```
