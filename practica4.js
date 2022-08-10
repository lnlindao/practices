let numeroIf = 0;

if (numeroIf > 0) {
  console.log(`${numeroIf} es positivo`);
} else if (numeroIf < 0) {
  console.log(`${numeroIf} es negativo`);
} else {
  console.log(`${numeroIf} es 0`);
}

let numeroWhile = 0;
while (numeroWhile < 3) {
  console.log(numeroWhile++);
}

let numeroWhile = 3;
do {
  console.log(numeroWhile++);
} while (numeroWhile < 3);

for (let numeroFor = 1; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

let estacion = "verano";
switch (estacion) {
  case "verano":
    console.log("Es verano");
    break;
  case "invierno":
    console.log("Es invierno");
    break;
  case "otono":
    console.log("Es otono");
    break;
  case "primavera":
    console.log("Es primavera");
    break;
  default:
    console.log("No es una estacion");
}
