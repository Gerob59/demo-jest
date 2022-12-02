import plusGrandNombreDeux from "./Exercice5";

describe("Je vais tester la fonction plusGrandNombre", () => {
  it("La fonction doit retourner: '50'", () => {
    expect(plusGrandNombreDeux(10, 15, 5, 50, -100, 0)).toBe(50);
  });
});
