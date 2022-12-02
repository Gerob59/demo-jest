import temperaturePlusProcheDeZero from "./Exercice10";

describe("je vais verifier la fonction temperaturePlusProcheDeZero", () => {
  it("La fonction doit retourner: '-6'", () => {
    expect(temperaturePlusProcheDeZero(11, 82, -6, -8, -9, 18, -30)).toBe(-6);
  });
});
