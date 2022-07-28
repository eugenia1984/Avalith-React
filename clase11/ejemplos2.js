const a = 1;
const b = 2;
const c = 3;
const d = 4;
​
let suma;
suma = a + b;
console.log("Primera suma", suma);
suma = c + d;
console.log("Segunda suma", suma);
​
function sum(a, b) {
    console.log("Suma de a + b", a + b);
}
sum(c, d); // 3
​
const sumWithArrowFunction = (a, b) => {
    return a + b;
};
console.log("Suma con arrow function", sumWithArrowFunction(a, b));
​
const sumImplicit = (c, d) => c + d;
​
console.log("Suma implicita", sumImplicit(c, d));
​
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