# Clase 11 * Miercoles 27 de Julio * Funciones

---

## :star: JS Intermedio

### Funciones en JavaScript

¿Qué es una función ?

- Es un conjunto de instrucciones agrupadas

- Sirve para evitar escribir repetidamente una fracción del código de nuestro proframa

- Tiene una finalidad en particular y permite la reutilización

```JavaScript
function nameFunction( parameters ) {
  // body function
}

nameFunction()
```

**DRY** -> Don´t repeat yourself

**KISS** -> Keep it simple, stupid!

---

## Sintaxis de una funcion ECMA6

```JavaScript
function nameFunction( parameters ) {
  // body function
}

nameFunction()
```

```JavaScript
name nameFunction = ( parameters ) => {
  // body function
}

nameFunction()
```

---

Si una arrow function posee una única instrucción, se puede utilizar un retorno implísito:

```JavaScript
const sum = (a, b) => {
  return a+b
}
```

Se puede poner asi:
```JavaScript
const sum = (a, b) =>  a+b
```

---

## :star: Manipulación de arrays y objetos


## Map, filter, find

Junto con **reduce** son los métodos modernos para la manipulación de elementos iterables y se los considera fundamentales en la programación funcional.

Tanto **map** como **find** y **filter** devuelven un nuevo array -> util para la inmutabilidad de los datos

-> todas heredan de **Array.prototype**

## map

El método map nos permite iterar por cada elemento de un determinado array y nos devolverá otro array luego de haber procesado las instrucciones que le pedimos


Se utiliza para hacer operaciones, como sumar valores, multiplicar, agregar key a un objeto, etc
```JavaScript
const newArray = arrayToProcess.map(function callback (element, index, array)) => {
  // new values
}
```

#### Map vs For

```JavaSCript
const users = [
    {
        userName: "Fabi",
        userLastName: "Tureo",
    },
    {
        userName: "Melina",
        userLastName: "Lencinas",
    },
    {
        userName: "Guillermo",
        userLastName: "Scharf",
    },
    {
        userName: "Emi",
        userLastName: "Salias",
    },
];
```

-Quiero obtener solo los nombres

```JavaScript
// Usando un For
const userNames = [];
for (let i = 0; i < users.length; i++) {
    userNames.push(users[i].userName);
}
console.log(userNames);

// Usando map
const userNamesMap = users.map((user) => {
    return user.userName;
});
console.log("map", userNamesMap);

//Map en una línea
const userNamesMap = users.map((user) => user.userName);
console.log("map one line", userNamesMap);
```

---

