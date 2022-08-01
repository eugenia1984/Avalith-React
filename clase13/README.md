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

Ahora voy a querer vincular lo que obtuve con el DOM.

