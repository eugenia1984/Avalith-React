
const users = [
  {
      userName: "Fabi",
      userLastName: "Tureo",
  },
  {
      userName: "Melina",
      userLastName: "Lencinas",
  },
  {
      userName: "Guillermo",
      userLastName: "Scharf",
  },
  {
      userName: "Emi",
      userLastName: "Salias",
  },
];
​
const usersNames = [];
​
for (let i = 0; i < users.length; i++) {
  usersNames.push(users[i].userName);
}
console.log("Array de Nombres", usersNames);
​
const usersNamesMap = users.map((user) => {
  return user.userName;
});
console.log("Username con map", usersNamesMap);
​
const usersNamesMapImplicit = users.map((user) => user.userName);
console.log("Implicit", usersNamesMapImplicit);
​
const usersLastNames = users.map(
  (user) => `${user.userName} ${user.userLastName}`
);
console.log("Users", usersLastNames);