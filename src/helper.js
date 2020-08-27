//Diferencia de entre año actual y año del auto
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula el incremento
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;

    case "americano":
      incremento = 1.15;
      break;

    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Muestra la primer letra mayuscula
export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
