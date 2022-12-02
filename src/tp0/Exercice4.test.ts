import plusGrandNombre from "./Exercice4";

describe("Je vais tester la fonction plusGrandNombre", () => {
  //----------------------------------------------------------------//
  describe("Le plus grand nombre est en premier", () => {
    it("La fonction doit retourner: '15'", () => {
      expect(plusGrandNombre(15, 10, 5)).toBe("Le plus grand nombre est 15 <3");
    });
  });
  //----------------------------------------------------------------//
  describe("Le plus grand nombre est en deuxieme", () => {
    it("La fonction doit retourner: '15'", () => {
      expect(plusGrandNombre(10, 15, 5)).toBe("Le plus grand nombre est 15 <3");
    });
  });
  //----------------------------------------------------------------//
  describe("Le plus grand nombre est en dernier", () => {
    it("La fonction doit retourner: '15'", () => {
      expect(plusGrandNombre(10, 5, 15)).toBe("Le plus grand nombre est 15 <3");
    });
  });
});
