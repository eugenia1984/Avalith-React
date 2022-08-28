const d = document;

const mayorNumero = (num1, num2) => {
  let text = "";
  if( num1 === num2) {
    text = "Ingresaste dos numeros iguales"
    return text
  }
  if( num1 > num2 ) {
    text=`${num1} es el mayor`;
    return text;
  } else {
    text=`${num2} es el mayor`;
    return text;
  }
}

function getMayorValueInput() {
  let firstNumber = Number(d.getElementById("firstNumber").value);
  let secondNumber = Number(d.getElementById("secondNumber").value);
  let text = mayorNumero(firstNumber, secondNumber);
  d.getElementById("mayor").innerHTML = `<h3>${text}</h3>`
}