# Clase 09 * Viernes 21 de Julio

---

## Condicional IF

Sirve para ejecutar fragmentos de código siempre que se cumplan determinadas condiciones dadas.  

```JavaScript
if (condition) {
  // Do something
}
```

-> También se puede acompañar de else if & else



## Estructura de control FOR

Utilizado para iterar bajo alguna condicion dada

```JavaScript
for (condicion) {
  // hacer algo
}
```

-> Tambien existe **forEach** y **map**


## Continuación con métodos disponibles para manipulacion de arrays y objetos

---

## Tarea:

Crear un programa que pida dos números a través de un prompt, que los compare y que me indique cuál es mayor y si es un tipo de datos no válido, que lo indique por console/alert


```JavaScript
let firstValue = Number(prompt("Ingrese el primer valor: "));
let secondValue = Number(prompt("Ingrese el segundo valor: "));

if(firstValue > secondValue) {
    console.log("El Primer valor es mayor");
} else if(firstValue === secondValue) {
    console.log("Los valores son identicos");
} else {
    console.log("El Segundo valor es mayor");
}
```

Con ParseInt:

```JavaScript
firstValue = parseInt(firstValue,10);
secondValue = parseInt(secondValue,10);

if (firstValue === secondValue) {
    console.log("Los valores son identicos");
} else {
    console.log("Los valores no son identicos");
}

if(firstValue > secondValue) {
    console.log("El Primer valor es mayor");
} else if(firstValue === secondValue) {
    console.log("Los valores son identicos");
} else {
    console.log("El Segundo valor es mayor");
}
```
