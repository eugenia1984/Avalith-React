# Clase 13 * Lunes 1 de Agosto

---

## Fetch


La API va a estar conectada a una BASE DE DATOS

``` 
          GET/ POST/
          PUT / DELETE  
        --------------->           ----->
Cliente                   REST API       DATABASE
         <-------------            <-----
          JSON / XML
```

**JSON**  JavaScript Object Notation

**XML**
---

## Promesas y asincronismo

Se puede trabajar de cuatro modos :

... Fetch con .then()

... Fetch con async /await

... axios y async/await

... Promise

---

## Fetch y Then

```JavaSCript
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
// metodo .then()
fetch(URL_USERS) // infiere en que el pedido es un GET
  .then((response) => response.json())
  .then( (data) => console.table(data)); // nested Promises
```

Ahora voy a querer vincular lo que obtuve con el DOM con **showData**

```JavaScript
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

fetch(URL_USERS) // infiere en que el pedido es un GET
  .then((response) => response.json()) 
  .then( (data) => showData(data)); // nested Promises

function showData(data) {
  console.log("Data", data);
  let body = ``;
  for(let i=0; i<data.length; i++) { // para iterar lo que tengo en data
    //console.log(data[i]);
    body += `
      <h2>${data[i].name}</h2>
      <p>UserName: ${data[i].userName}</p>
    `
    document.getElementById("fetch-petition").innerHTML = body;
  }
}
```

->> Se pueden ver ejemeplos de clase en **ejemplo.clase.js**

----

# Clase 14 * Miércoles 3 de Agosto

---

### tEMAS:

1. ¿Qué es el asincronismo en JavaScript? 

2. Objeto Promise

3. Fetch + Async/Await

4. Práctica

---

### ASINCRONISMO

#### Antes de empezar: setTimeOut

El método setTimeOut es (ni más ni menos) un temporizador. Este método permite ejecutar un callback luego de que haya transcurrido un determinado tiempo. Los dos parámetros más importantes a tener en cuenta son: la function a ejecutar y el time (en ms) que debe esperar para ejecutarse

**Sintaxis de setTimeOut**

```JavaScxript
setTimeOut(function (){
	// Do something
}, time)

In arrow function format
setTimeOut(() => {
	//Do Something
}, time)

```

### Asincronismo

Aprender a trabajar con asincronismo en JavaScript nos permitirá ejecutar tareas tengan un tiempo diferido respecto al tiempo de ejecución hasta que se consideren finalizadas. 
Pero ¿por qué necesitamos saber esto?

- JavaScript => Lenguaje Monohilo (Single-thread).

- Significa que solo puede hacer una tarea a la vez (secuencial)
 
- Aunque no sea multitarea (mejor llamado multi-thread), puede delegar la ejecución a otros procesos. 

```
Modelo de                  Modelo de
concurrencia               Paralelismo
(2 o  + tareas      VS     (2 o + tareas
progresan                    ocurren
simultáneamente)           simultaneamente)
```

#### Consurrencia vs Paralelismo

```
    THREAD UNICO              MULTIPLES THREADS
S      |                       |            |
E      |                       |            |
C    Task1                     |            |
U      |                       |            |
E      |                     Task1        Task2
N    Task2                     |            |
C      |                       |            |
I      |                       |            |
A      |                       |            |
L      |                       |            |
```


```
    THREAD UNICO              MULTIPLES THREADS
E      |                       |            |
N      |                       |            |
T    Task1--                 Task2--        |
R      |                       |            |
E    Task2--                 Task1--      Task2----
L      |                       |            |
A    Task2----               Task2------   Task1----
Z      |                       |            |
A    Task1----                 |          Task1------
D      |                       |            |
O    Task2------               |            |
       |                       |            |
     Task1------               |            |
```


### Operaciones sincrónicas y asincrónicas

#### Entonces ¿redefinimos JS?

JavaScript es un lenguaje concurrente, asíncrono, no bloqueante, interpretado, de alto nivel, monohilo.

- Monohilo: Tiene un único hilo de ejecución

- Concurrente: Permite el avance de tareas de forma simultánea

- No bloqueante: Permite derivar procesos para seguir ejecutándose

- Asíncrono: Ejecuta código que tarda más tiempo “en otro lado”


####  Event Loop y Call Stack


¿Cómo maneja el asincronismo, la concurrencia y el no-bloqueo si es single-thread?

Mecanismo Event Loop

JavaScript posee una pila de ejecución llamada Call Stack donde coloca las llamadas a funciones según el orden en que deban ejecutarse 
Cada línea de ejecución se lee de forma secuencial pero, cuando una función llama a otra, entonces esa tarea se agrega a la pila hasta que termina de ejecutarla y luego la elimina de la pila


####  Callbacks y promesas

Un Callback es una función que recibe como parámetro a otra función

Cuando una función llama a otra función y esta última se resuelve, será agregada al Callback Queue. Esto indica que JS sigue ejecutando todas las demás tareas sincrónicas y, cuando se quede sin funciones a ejecutar en la pila de ejecución, allí agregará la información obtenida desde la cola de tareas


####  Práctica HTML/CSS/JS






