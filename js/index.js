//**12. Programa una funcion Boleana, que determine si un numero es primo(aquel que solo es divisible por si mismo y 1) */

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Digite un numero");
  if (numero === 0) return console.warn("Numero no puede ser 0");
  if (numero < 0) return console.warn("Numero no puede ser Negativo");
  if (typeof numero !== "number")
    return console.error("Digite un numero valido");

  let divible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      //con que sea divisible con cualerquier otro numero diferente a 1 o si mismo deja de ser PRIMO
      divible = true;
      break;
    }
  }
  return divible === true
    ? console.log(`El numero ${numero} NO es primo`)
    : console.log(`El numero ${numero} ES primo`);
};

numeroPrimo(7);
