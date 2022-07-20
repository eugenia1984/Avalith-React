# Clase 07 * Lunes 18 de Julio

- Revision de Git / GitHub

- Introduccion a JavaScript

---

## :star: 5 - Introducción a JavaScript

###  ¿ Qué es JS y para que se puede usar ?

- lenguaje de programacion

- débilmente tipado, no requiere un tipo específico de dato al declarar una variable; la sintaxis no es estricta(por ejemplo: ;)

- tipado dinamico, el tipo de dato se asigna en tiempo de ejecucion y se puede cambiar por medio de reasignacion.


### Uso principal

- dinamismo e interactividad a la web del lado del cliente

- servidores en Node.js

- frameworks y librerías


### Otros usos

- juegos

- inteligencia artificial (tensorflow.js o brain.js)

- mobile apps con React Native

- smart contract (web3.js)

- domótica y IOT

- realidad aumentada (ar.js)

- electrónica (turf - espacial)

### Formas de trabajar con JavaScript

- Con archivos de extension **.js** enlazados:

```html
<script src="./index.js"></script>
```

- Otro modo es utilizando **requiere** cuando trabajamos con modulos

### Tipos de variables y conversiones de tipos

**variable**: es un espacio en memoria que contiene algún tipo de información.

```JavaScript
const myFirstVariable = "Hello world"
```

**const** -> es el tipo de variable, puede ser tambien **var** y **let**.

**myFirstVariable** -> es el nombre de la variable

**=** -> es para asignar

**"Hello world"** -> es el valor de la variable

### Tipos de variables (datos primitivos)

- **string**: Es una cadena de texto. Se coloca entre comillas ( “ “ )

- **number**: Sirve para representar valores numéricos comprendidos entre números entre -(253 - 1) y 253 - 1. Incluye los números con decimales (punto flotante) y valores como infinito o NaN

- **null**: vale justamente eso, null.

- **boolean**: acepta dos valores que son true y false. True == 1, false == 0

- **undefined**: Ocurre cuando a una determinada variable no se le asignó un valor determinado en tiempo de ejecución. 

#### Arrays

También denominado como lista es un tipo de variable estructurada. Se representa con [] y su contenido debe estar separado por comas.


#### Objeto

Es una coleccion de datos ordenados en formato **key:value,**.

Se representa con {} y se separa cada key: value con “,”



#### JS is weird

[jsisweird.com](https://www.jsisweird.com)


```
> 2 + 2
<- 4
> "2" + " 2"
<- "22"  // porque infiere que son string y los concatena
> 2 + 2 - 2
<- 2 // son todos number
> "2" + "2" - "2"
<- 20 // "2" + "2" los concatena como un string y tiene "22" pero luego con el - 2 parsea a number y hace la resta
```

---

## Scoope local y global
 
 Ejemplo con codigo:
 
 ```JavaScript
 var number = 5; // scoope global
 
 function sum() { // local scoope
  const arr = [1, 2, 3]; // function scoope
  let sum = 0; // function scoope
  
  for (let i = 0; i < arr.length, i++) { // blck scoope
    sum = sum + arr[i];
  }
 }
 ```

---

## Practica de JavaScript

- Crear una variable que contenga tu nombre

- Crea una variable que contega tu edad

- Crea una variable que indique si estás en pareja (true 7 false)

- Crea una variable que contenga un array con los numeros del 1 al 10

- Crea una variable que contenga un array con los 5 nombres de 5 skillers

- Crea un objeto que contenga el valor de todas las varaibles anteriores (sin llamar a esas variables, es decir hadle-made).

-> Todas deben ser de tipo **conts**

-> Todas las variables deben mostrarse con console.log

-->> [Haciendo click aca lo podes ver](https://github.com/eugenia1984/Avalith-React/blob/main/clase07/practica.js)

---
