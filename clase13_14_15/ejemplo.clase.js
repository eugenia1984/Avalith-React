// Fetch con .then()
// Fetch con async/await
// Axios async/await
// Promise

const URL_USERS2 = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS2) // Infiere en que el pedido es un GET
  .then((response) => response.json())
  .then((data) => showData(data)); //Nested Promises

// // Paint the data in the DOM with FOR
// function showData(data) {
//     console.log("Data", data);
//     let body = ``;
//     for (let i = 0; i < data.length; i++) {
//         // console.log(data[i]);
//         body += `
//             <h2>${data[i].name}</h2>
//         `;
//     }
//     document.getElementById("fetch-petition").innerHTML = body;
// }

// Paint the data in the DOM with MAP and Arrow Function Format
/*
const showData = (data) => {
  console.log("Data", data);
  let body = ``;
  data.map((user) => {
    return (body += `
      <h2>Username: ${user.name}</h2>
    `);
  });

  document.getElementById("fetch-petition").innerHTML = body;
};
*/

// Paint the data in the DOM with MAP and Arrow Function Format + Destructuring
// const showData = (data) => {
//     console.log("Data", data);
//     let body = ``;
//     data.map(({ name, email }) => {
//         return (body += `
//                 <h2>Username: ${name}</h2>
//                 <h2>Email: ${email}</h2>
//             `);
//     });
//     document.getElementById("fetch-petition").innerHTML = body;
// };