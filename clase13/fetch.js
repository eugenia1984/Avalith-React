const URL_USERS = "https://jsonplaceholder.typicode.com/todos";

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
    for(let i=0; i<data.length; i++) { 
      body += `
      <div class="card">
        <h2>Id: ${data[i].id}</h2>
        <p>Title: ${data[i].title}</p>
        <p>Completed: ${data[i].completed}</p>
      </div>
        
      `
      document.getElementById("fetch-petition").innerHTML = body;
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