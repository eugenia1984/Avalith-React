const URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/1";

// Exercise for Promise with .then() and .fetch()
fetchPokemon = fetch(URL_GET_POKEMON);
fetchPokemon
  .then((response) => response.json()) // asynchronous operation
  .then(data=> showPokemon(data));  // asynchronous operation

function showPokemon(pokemon) {
  // console.log(`Pokemon ${pokemon}`);
  let body = ``;
  body += `
    <h3>${pokemon.name}</h3>
    <p>${pokemon.name} pesa ${pokemon.weight}</p>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
  `;
  document.getElementById("pokemon-then-fetch").innerHTML = body;
}  

/*
Para utilizar query params y ver que Pokemon usar:
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
*/


// Exercise for Promise with Async and Await
const fetchPokemonAsyncAwait = async() => {
  const pokemon = await fetch(URL_GET_POKEMON);
  const pokemonJson = await pokemon.json(); // Execution time
  showDataWithAsyncAwait(pokemonJson);
  
  console.log(`Pokemon async await ${pokemonJson}`);
};

fetchPokemonAsyncAwait();

const showDataWithAsyncAwait = async (pokemon) => {
  console.log("Pokemon in Async Await", pokemon);
  let body = ``;
  body += `
    <h3>${pokemon.name}</h3>
    <p>${pokemon.name} pesa: ${pokemon.weight}kg</p>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
  `;
  document.getElementById("pokemon-async-await").innerHTML = body;
};

// Using axios
const fetchedPokemonWithAxios = axios.get(URL_GET_POKEMON);
const responseAPIAxios = fetchedPokemonWithAxios.then((response) => {
  console.log(`Pokemon in Axios: ${response.data}`);
  console.log(`Response ${response}`);
  const { name, weight,  sprites } = response.data;
  let body = ``;
  body += `
    <h3>${name}</h3>
    <p>pesa : ${weight}</p>
    <img src="${sprites.front_default}" alt="${name}" />
  `;
  document.getElementById("pokemon-axios").innerHTML = body; 
})

