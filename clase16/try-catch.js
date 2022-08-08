// Código que se corta en la tercera línea
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