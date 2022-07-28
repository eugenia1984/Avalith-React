// const username = "Fabián";
// const age = 28;
// const isSingle = true;
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arraySkillers = ["Adrian", "Williams", "Gonzalo", "Sofía", "Mariano"];
// const object = {
//     username: "Fabian",
//     age: 28,
//     isSingle: true,
//     array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     arraySkillers: ["Adrian", "Williams", "Gonzalo", "Sofía", "Mariano"],
// };
​
// console.log(username);
// console.log(age);
// console.log(isSingle);
// console.log(array);
// console.log(arraySkillers);
// console.log(object);
​
// NaN = Not a Number
​
// const string = "Hello World";
// const numberAsString = "123.45";
​
// const stringToNumber = Number(string);
// console.log("Parse string to number: ", stringToNumber); //No debería poder
​
// const toNumber = Number(numberAsString);
// console.log("Parse number: ", toNumber); //Debería poder
​
// const parseToNumber = parseInt(numberAsString);
// console.log("Parse number with parseInt: ", parseToNumber); //Debería poder
​
// const parseToFloat = parseFloat(numberAsString);
// console.log("Parse number with parseFloat: ", parseToFloat); //Debería poder
​
// // Numero = 123,4563
// // Truncado a enteros = 123
// // Truncado a dos decimales = 123.45
// // Truncado a un decimal = 123.4
// // Math.ceil ==> Redondea hacia arriba. Hay que indicarle cuántos decimales
// // Math.floor ==> Redondea hacia abajo
​
// // Redondeado a dos decimales = 123.46
// // Redondeado a tres decimal = 123.456
​
// const number = "123";
// const toParseFloat = parseFloat(number);
// console.log("PARSEFLOAT", toParseFloat);
​
// //Write word "Banana" with JavaScript
​
// const word = "b" + "a" + +"a" + "a";
​
// // output: baNaNa
​
// console.log(word);
​
// const arraySkillers = [
//     "Adrian",
//     "Williams",
//     "Gonzalo",
//     "Sofía",
//     "Mariano",
//     "Melina",
// ];
// const object = {
//     zoo: ["Lion", "Tiger", "Bear", "Panda"],
//     username: "Fabian",
//     age: 28,
//     isSingle: true,
//     array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     arraySkillers: ["Adrian", "Williams", "Gonzalo", "Sofía", "Mariano"],
// };
​
// console.log(object);
​
// console.log(arraySkillers);
// console.table(arraySkillers);
​
// console.warn("NO SEAN ANSIOSOS");
// console.error("TE APURASTE MAS DE LA CUENTA");
​
// console.log(arraySkillers[9]);
​
// console.log("Acá debería aparecer el nombre", object.username); // Fabian // Sugiero
// console.log(object["username"]); // Solamente en casos excepcionales
​
// // Watch de array of animals
​
// console.log("Are animals here?", object.zoo);
​
// // Watch "Bear" in console
​
// console.log("Is this a bear?", object.zoo[2]);
​
// const data = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//             geo: {
//                 lat: "-37.3159",
//                 lng: "81.1496",
//             },
//         },
//         phone: "1-770-736-8031 x56442",
//         website: "hildegard.org",
//         company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real-time e-markets",
//         },
//     },
//     {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv",
//         address: {
//             street: "Victor Plains",
//             suite: "Suite 879",
//             city: "Wisokyburgh",
//             zipcode: "90566-7771",
//             geo: {
//                 lat: "-43.9509",
//                 lng: "-34.4618",
//             },
//         },
//         phone: "010-692-6593 x09125",
//         website: "anastasia.net",
//         company: {
//             name: "Deckow-Crist",
//             catchPhrase: "Proactive didactic contingency",
//             bs: "synergize scalable supply-chains",
//         },
//     },
//     {
//         id: 3,
//         name: "Clementine Bauch",
//         username: "Samantha",
//         email: "Nathan@yesenia.net",
//         address: {
//             street: "Douglas Extension",
//             suite: "Suite 847",
//             city: "McKenziehaven",
//             zipcode: "59590-4157",
//             geo: {
//                 lat: "-68.6102",
//                 lng: "-47.0653",
//             },
//         },
//         phone: "1-463-123-4447",
//         website: "ramiro.info",
//         company: {
//             name: "Romaguera-Jacobson",
//             catchPhrase: "Face to face bifurcated interface",
//             bs: "e-enable strategic applications",
//         },
//     },
//     {
//         id: 4,
//         name: "Patricia Lebsack",
//         username: "Karianne",
//         email: "Julianne.OConner@kory.org",
//         address: {
//             street: "Hoeger Mall",
//             suite: "Apt. 692",
//             city: "South Elvis",
//             zipcode: "53919-4257",
//             geo: {
//                 lat: "29.4572",
//                 lng: "-164.2990",
//             },
//         },
//         phone: "493-170-9623 x156",
//         website: "kale.biz",
//         company: {
//             name: "Robel-Corkery",
//             catchPhrase: "Multi-tiered zero tolerance productivity",
//             bs: "transition cutting-edge web services",
//         },
//     },
//     {
//         id: 5,
//         name: "Chelsey Dietrich",
//         username: "Kamren",
//         email: "Lucio_Hettinger@annie.ca",
//         address: {
//             street: "Skiles Walks",
//             suite: "Suite 351",
//             city: "Roscoeview",
//             zipcode: "33263",
//             geo: {
//                 lat: "-31.8129",
//                 lng: "62.5342",
//             },
//         },
//         phone: "(254)954-1289",
//         website: "demarco.info",
//         company: {
//             name: "Keebler LLC",
//             catchPhrase: "User-centric fault-tolerant solution",
//             bs: "revolutionize end-to-end systems",
//         },
//     },
//     {
//         id: 6,
//         name: "Mrs. Dennis Schulist",
//         username: "Leopoldo_Corkery",
//         email: "Karley_Dach@jasper.info",
//         address: {
//             street: "Norberto Crossing",
//             suite: "Apt. 950",
//             city: "South Christy",
//             zipcode: "23505-1337",
//             geo: {
//                 lat: "-71.4197",
//                 lng: "71.7478",
//             },
//         },
//         phone: "1-477-935-8478 x6430",
//         website: "ola.org",
//         company: {
//             name: "Considine-Lockman",
//             catchPhrase: "Synchronised bottom-line interface",
//             bs: "e-enable innovative applications",
//         },
//     },
//     {
//         id: 7,
//         name: "Kurtis Weissnat",
//         username: "Elwyn.Skiles",
//         email: "Telly.Hoeger@billy.biz",
//         address: {
//             street: "Rex Trail",
//             suite: "Suite 280",
//             city: "Howemouth",
//             zipcode: "58804-1099",
//             geo: {
//                 lat: "24.8918",
//                 lng: "21.8984",
//             },
//         },
//         phone: "210.067.6132",
//         website: "elvis.io",
//         company: {
//             name: "Johns Group",
//             catchPhrase: "Configurable multimedia task-force",
//             bs: "generate enterprise e-tailers",
//         },
//     },
// ];
​
// console.log(data);
// console.log(data[0].address.street);
​
// // for(condition){
// //     //Do Something
// // }
​
// // a = inicialización de la variable
// // b = analice una condición
// // c = haga algo con la variable a
​
// const username = "Fabi";
​
// for (let i = 0; i < 5; i++) {
//     // console.log("CICLO FOR");
//     // console.log(i);
​
//     console.log("For", i);
//     console.log("For" + " " + i);
//     console.log(`Hola, ${username}, For with Sugar Syntax ${i}`); // ECMAScript 6 Template String
// }
// // const for = "Una string" // Esto falla porque "for" es una palabra reservada
​
// if (condition) {
//     //Do Something
// } else if (condition) {
//     //Do Other Something
// } else {
//     //Do Something else
// }
​
const arraySkillers = ["Adrian", "Williams", "Gonzalo", "Sofía", "Mariano"];
console.log(arraySkillers.slice(3));