const URL_USERS = "https://jsonplaceholder.typicode.com/users";

// metodo .then()
/* Primer ejemplo

fetch(URL_USERS) // infiere en que el pedido es un GET
  .then((response) => response.json())
  .then( (data) => console.table(data));
*/

fetch(URL_USERS) // infiere en que el pedido es un GET
  .then((response) => response.json())
  .then( (data) => showData(data)); // nested Promises

  function showData(data) {
    console.log("Data", data);
    let body = ``;
    for(let i=0; i<data.length; i++) { // para iterar lo que tengo en data
      console.log(data[i]);
    }
  }

/* Con:
.then((response) => console.log(response.json()));
En consola veo
Promise {<pending>}
  [[Prototype]]: Promise
    catch: ƒ catch()
    constructor: ƒ Promise()
    finally: ƒ finally()
    then: ƒ then()
    Symbol(Symbol.toStringTag): "Promise"[[Prototype]]: Object
  [[PromiseState]]: "fulfilled"
  [[PromiseResult]]: Array(10)
*/  