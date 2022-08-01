const names = ["Fabi", "Melina", "Guillermo", "Emi"];

const firstPosition = names[0];
const secondPosition = names[1];
const thirdPosition = names[2];
const fourthPosition = names[3];

console.log("First Position", firstPosition);
console.log("Second Position", secondPosition);
console.log("Third Position", thirdPosition);
console.log("Fourth Position", fourthPosition);

//ECMAScript 6
// Destructuring of an array
const [first, second, third, fourth] = names;

console.log("First Position", first);
console.log("Second Position", second);
console.log("Third Position", third);
console.log("Fourth Position", fourth);

const userGuille = {
  id: 3,
  userName: "Guillermo",
  userLastName: "Scharf",
};

const idDestructuring = userGuille.id;
const userNameDestructuring = userGuille.userName;
const userLastNameDestructuring = userGuille.userLastName;

console.log("Id", idDestructuring);
console.log("User Name", userNameDestructuring);
console.log("User Last Name", userLastNameDestructuring);

const { id: idUser, userName, userLastName } = userGuille;

// console.log("Id ", id);
console.log("idUser", idUser);
console.log("User Name ", userName);
console.log("User Last Name ", userLastName);

function getUser(user) {
  return `${user.userName} ${user.userLastName}`;
}

function getUserDestructuring2(user) {
  const { userName, userLastName } = user;
  return `${userName} ${userLastName}`;
}

function getUserDestructuring({ userName, userLastName }) {
  return `${userName} ${userLastName}`;
}

const namesSkillers = ["Fabi", "Melina", "Guillermo", "Emi"];
const otherNames = ["Sofia", "Fabricio", "Deborah", "Nacho"];
const otherNamesAgain = ["Paloma", "Fernando", "Celeste", "Javier"];

const totalNames = namesSkillers.concat(otherNamesAgain, otherNames);
console.log("Total Names", totalNames);

const totalNamesSpread = [...namesSkillers, ...otherNames, ...otherNamesAgain];
console.log(totalNamesSpread);

const updateGuille = {
  ...userGuille,
  userEmail: "guille@skillfactory.com",
};

console.log("Update Guille", updateGuille);