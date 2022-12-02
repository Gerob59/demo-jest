import calculerBenefice from "./Exercice3";

describe("Je vais tester la fonction calculerBenefice", () => {
  //===========================//
  describe("Je vais tester un benefice", () => {
    it("La fonction doit retourner: '10'", () => {
      expect(calculerBenefice(20, 10)).toBe(
        "Gain de 10€, j'aime l'argent ! <3"
      );
    });
  });
  //===========================//
  describe("Je vais tester une perte", () => {
    it("La fonction doit retourner: '10'", () => {
      expect(calculerBenefice(10, 20)).toBe("Perte de 10€, ALED");
    });
  });
  //===========================//
  describe("Je vais tester une egalité", () => {
    it("La fonction doit retourner: '0'", () => {
      expect(calculerBenefice(20, 20)).toBe(
        "Vive le bénévolat ! J'ai l'impression d'être un stagiaire."
      );
    });
  });
  //===========================//
});
