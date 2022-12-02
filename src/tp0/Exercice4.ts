/**
 * Retourne le plus grand nombre dans une pitite phrase
 * @param nombre1 un nombre
 * @param nombre2 un autre nombre
 * @param nombre3 encore un nombre
 * @returns le plus grand nombre
 */
export default function plusGrandNombre(
  nombre1: number,
  nombre2: number,
  nombre3: number
): string {
  if (nombre1 >= nombre2 && nombre1 >= nombre3) {
    return `Le plus grand nombre est ${nombre1} <3`;
  } else if (nombre2 >= nombre3) {
    return `Le plus grand nombre est ${nombre2} <3`;
  } else {
    return `Le plus grand nombre est ${nombre3} <3`;
  }
}

console.log(plusGrandNombre(3, 8, 90));
