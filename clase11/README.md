# Clase 11 * Miercoles 27 de Julio

---

## Función

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



