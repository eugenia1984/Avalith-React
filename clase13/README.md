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

