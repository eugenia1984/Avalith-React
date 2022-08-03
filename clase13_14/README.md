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

Modelo de Paralelismo
Dos o más tareas ocurren simultáneamente


#### Operaciones sincrónicas y asincrónicas

####  Event Loop

####  Callbacks y promesas

####  Práctica HTML/CSS/JS






