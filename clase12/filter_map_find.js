const users = [
  {
    id: 1,
    userName: "Fabi",
    userLastName: "Tureo",
  },
  {
    id: 2,
    userName: "Melina", // Le Aplico toLowerCase -- melina
    userLastName: "Lencinas",
  },
  {
    id: 3,
    userName: "Guillermo",
    userLastName: "Scharf",
  },
  {
    id: 4,
    userName: "Emi",
    userLastName: "Salias",
  },
];

const usersNames = [];

// Using FOR
for (let i = 0; i < users.length; i++) {
  usersNames.push(users[i].userName);
}
console.log("Array de Nombres", usersNames);

// using MAP
const usersNamesMap = users.map((user) => {
  return user.userName;
});
console.log("Username con map", usersNamesMap);

const usersNamesMapImplicit = users.map((user) => user.userName);
console.log("Implicit", usersNamesMapImplicit);

const usersLastNames = users.map(
  (user) => `${user.userName} ${user.userLastName}`
);
console.log(`Users ${usersLastNames}`);

// Usinf FILTER
const usersLessThanThree = users.filter((user) => user.id < 3);
console.log("Users less than 3", usersLessThanThree);

const usersGreaterThanTwo = users.filter((user) => 2 < user.id);
console.log("Users greater than 2", usersGreaterThanTwo);

const obtainUser = users.filter(
  (user) => user.userName.toLowerCase() === "guillermo"
);
console.log("ObtainUser", obtainUser);

const gameList = [
  {
    id: 1,
    title: "Returnal",
    platform: "PS5",
    price: 79,
  },
  {
    id: 2,
    title: "Resident Evil Village",
    platform: "PC",
    price: 59,
  },
  {
    id: 3,
    title: "Little Nightmares 2",
    platform: "PC",
    price: 20,
  },
  {
    id: 4,
    title: "Returnal",
    platform: "PS5",
    price: 179,
  },
];

// Using MAP
const gameTitles = gameList.map((game) => game.title);
console.log(`Game Titles ${gameTitles}`);

// Using FILTER
const gamePrices = gameList.filter((game) => game.price < 60);
console.log(`Game Prices ${gamePrices}`);

// Using filter and map
const gamesForBuy = gameList
  .filter((game) => game.price < 60)
  .map((game) => game.title);

console.log(`Games for buy ${gamesForBuy}`);

// Using FIND
const obtainReturnal = gameList.find(
  (game) => game.title.toUpperCase() === "RETURNAL"
);
console.log("Obtain Returnal", obtainReturnal);

const names = ["Fabi", "Melina", "Guillermo", "Emi"];

const firstPosition = names[0];
const secondPosition = names[1];
const thirdPosition = names[2];
const fourthPosition = names[3];

console.log("First Position", firstPosition);
console.log("Second Position", secondPosition);
console.log("Third Position", thirdPosition);
console.log("Fourth Position", fourthPosition);