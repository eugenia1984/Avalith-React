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
console.log(`One animal of the zoo: ${object.zoo[[2]]}`); // para ver un elemento del arrray
```

---

## :star:  Investigar que hacen y como funcionan los siguientes metodos

- ```.pop()```: removes the last element from an array and returns that element. This method changes the length of the array.  If you call pop() on an empty array, it returns undefined.

The shift() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the last element removed, you can use arr.slice(0, -1) instead.

````JavaScript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // expected output: "tomato"
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

- ```.shift()```removes the first element from an array and returns that removed element. This method changes the length of the array.  the removed value.

The shift() method is a mutating method. 

 In case you want the value of this to be the same, but return a new array with the first element removed, you can use arr.slice(1) instead.

```JavaSCript
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1); // expected output: Array [2, 3]

console.log(firstElement); // expected output: 1
```

- ```.push()```  adds one or more elements to the end of an array and returns the new length of the array. The elemnts I will add, are the parameters, they are separate by **,**


The push() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with elements appended to the end, you can use arr.concat([element0, element1, /* ... ,*/ elementN]) instead. Notice that the elements are wrapped in an extra array — otherwise, if the element is an array itself, it would be spread instead of pushed as a single element due to the behavior of concat().


```JavaScript
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // expected output: 4
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```



- ```.slice()```  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the  index of items in that array. The original array will not be modified.

```JavaScript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));  // expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));  // expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));  // expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));  // expected output: Array ["camel", "duck"]

console.log(animals.slice());  // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

Sintaxis:

```slice()```

```slice(start)```

```clise(start, end)```

**start**:

Zero-based index at which to start extraction.

A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If start is undefined, slice starts from the index 0.

If start is greater than the index range of the sequence, an empty array is returned.

**end**:

The index of the first element to exclude from the returned array. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

If end is omitted, slice extracts through the end of the sequence (arr.length).

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

**return value** -> A new array containing the extracted elements.
 
- ```.unshift()``` adds one or more elements to the beginning of an array and returns the new length of the array.

````JavaScript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));  // expected output: 5

console.log(array1); // expected output: Array [4, 5, 1, 2, 3]
```

Sintaxis:
```
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* ... ,*/ elementN)
```

**parameters** elementN -> The elements to add to the front of the arr

**return value** The new length property of the object upon which the method was called.

- ```.reverse()```  reverses an array in place. The first array element becomes the last, and the last array element becomes the first

```JavaScript
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed); // expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1); // expected output: "array1:" Array ["three", "two", "one"]
```

**syntax** reverse()

**return** The reversed array.

- ```.join()```  creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```JavaScript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // expected output: "Fire,Air,Water"

console.log(elements.join('')); // expected output: "FireAirWater"

console.log(elements.join('-')); // expected output: "Fire-Air-Water"
```

**Sintax**:
```
join()
join(separator)
```

**Parameters**: *separator* -> Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

**return value** -> A string with all array elements joined. If arr.length is 0, the empty string is returned.


- ```.concat()```  is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```JavaScript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // expected output: Array ["a", "b", "c", "d", "e", "f"]

**Syntax**:
```
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
```

**Parameters** -> *valueN* -> Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.


**return value** -> A new Array instance.


- ```.length()``` The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

```
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length); // expected output: 4
```

- ```.sort()```  sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
```

**Syntax**:
```
// Functionless
sort()

// Arrow function
sort((a, b) => { /* ... */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* ... */ })
```

**parameters**:

compareFn Optional -> Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

a -> The first element for comparison.

b -> The second element for comparison.

---

