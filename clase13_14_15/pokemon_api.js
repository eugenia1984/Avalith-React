const URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/1";

// Exercise for Promise with .then() and -fetch()
fetchPokemon = fetch(URL_GET_POKEMON);
fetchPokemon
  .then((response) => response.json()) // asynchronous operation
  .then(data=> showPokemon(data));  // asynchronous operation

function showPokemon(pokemon) {
  console.log(`Pokemon ${pokemon}`);
  let body = '';
  body += `
    <h3>${pokemon.name}</h3>
    <p>${pokemon.name} pesa ${pokemon.weight}</p>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
  `
  document.getElementById("pokemon").innerHTML = body;
}  

/*
Para utilizar query params y ver que Pokemon usar:
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
*/


// Exercise for Promise with Async and Await
const fetchPokemonAsyncAwait = async() => {
  const pokemon = await fetch(URL_GET_POKEMON);
  const pokemonJson = pokemon.json();
  console.log(`Pokemon async await ${pokemonJson}`);

};

fetchPokemonAsyncAwait();


// Using axios
const fetchedPokemonWithAxios = axios.get(URL_GET_POKEMON);
const responseAPIAxios = fetchedPokemonWithAxios.then((response) => {
  console.log(`Pokemon in Axios: ${response.data}`);
  const { name, weight,  sprites } = response.data;
  let body = '';
  body += `
    <h3>${pokemon.name}</h3>
    <p>${pokemon.name} pesa ${pokemon.weight}</p>
    <img src="${pokemon.sprites}" alt="${pokemon.name}" />
  `
  document.getElementById("pokemon-axios").innerHTML = body;
  
})

// hacer este mismo pedido con async y await
