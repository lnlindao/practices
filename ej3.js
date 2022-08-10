function suma(a, b, c) {
  return a + b + c;
}
suma(1, 2, 3);

class Coche {
  constructor(puertas) {
    this.puertas = puertas;
  }
  sumarPuertas() {
    this.puertas++;
  }
  getPuertas() {
    return this.puertas;
  }
}

let miCoche = new Coche(6);
miCoche.sumarPuertas();
console.log(miCoche.getPuertas());
