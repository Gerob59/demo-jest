export default class Calculatrice {
  /**
   * Effectue un calcul a l'aide de la fonction eval()
   * @param operation opération à effectuer
   * @returns résultat de l'opération
   */
  public calculer(operation: string): number {
    return eval(operation);
  }
}
