/**
 * Retourne la température la plus proche de zéro !
 * @param temperatures liste de températures
 * @returns température
 */
export default function temperaturePlusProcheDeZero(
  ...temperatures: number[]
): number {
  let plusProcheDeZero = temperatures[0];
  for (let temperature of temperatures) {
    if (Math.abs(temperature) < Math.abs(plusProcheDeZero)) {
      plusProcheDeZero = temperature;
    }
  }
  return plusProcheDeZero;
}
console.log(temperaturePlusProcheDeZero(11, 82, -6, -8, -9, 18, -30));
