## :star: Clase 16 * Manejo de errores

---

## Try - Catch

- Son dos bloques de código que nos permitirán controlar la forma en que se ejecuta nuestro script

- Dentro del TRY guardaremos el código que intentaremos que se ejecute para lograr un comportamiento

- Dentro del CATCH capturaremos los errores y los manipularemos

- Si pasa el TRY, ignora lo que contenga el CATCH.


El **CATCH** será quien se encargue de ejecutar una fracción de código que está realizada con el error. Al menos cuenta con dos propiedades: name y message. Generalmente, son un buen punto de partida para pensar en la UX. 

También podemos gestionar un nuevo error a través de throw new Error

---

### Codigo que se corta en la tercer linea

```JavaScript
try {
  const onIncorrectFunction = null;
  console.log("Console.log before execute function");
  onIncorrectFunction();
  console.log("Console.log after execute function");
} catch (error) {
  console.log(`Error : ${error}`);
  console.log("Console.log in catch");
  console.log(`Error Name : ${error.name}`);
  console.log(`Error Message: ${error.message}`);
}
console.log("Console.log after try-catch");
```

### Otro ejemplo en código

```JavaSCript
const getNumberPokemon = prompt("Ingrese el número de pokemon");
const URL_GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/${getNumberPokemon}`;

const getPokemon = async () => {
  try {
    if (getNumberPokemon > 25)
      throw new SyntaxError("El número debe ser menor a 25");
    const pokemon = await axios.get(URL_GET_POKEMON);
    console.log(`Pokemon ${pokemon.data}`);
    console.log("Last line in try");
  } catch (error) {
      console.log(`Error ${error}`);
      console.log(`Error Name ${error.name}`);
      alert("No existen registros mayores a 25");
  }
};
getPokemon();
```
---
