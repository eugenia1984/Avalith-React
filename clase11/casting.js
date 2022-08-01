// NaN = Not a Number​
const string = "Hello World";
const numberAsString = "123.45";

// Casting​
const stringToNumber = Number(string);
console.log("Parse string to number: ", stringToNumber); //No debería poder
​
const toNumber = Number(numberAsString);
console.log("Parse number: ", toNumber); //Debería poder
​
const parseToNumber = parseInt(numberAsString);
console.log("Parse number with parseInt: ", parseToNumber); //Debería poder
​
const parseToFloat = parseFloat(numberAsString);
console.log("Parse number with parseFloat: ", parseToFloat); //Debería poder

// Numero = 123,4563
// Truncado a enteros = 123
// Truncado a dos decimales = 123.45
// Truncado a un decimal = 123.4
// Math.ceil ==> Redondea hacia arriba. Hay que indicarle cuántos decimales
// Math.floor ==> Redondea hacia abajo
​
// Redondeado a dos decimales = 123.46
// Redondeado a tres decimal = 123.456
​
const number = "123";
const toParseFloat = parseFloat(number);
console.log("PARSEFLOAT", toParseFloat);