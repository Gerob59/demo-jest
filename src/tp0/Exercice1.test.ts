import hello from "./Exercice1";

describe("Je vais tester la fonction Hello", () => {
  it("La fonction doit retourner: 'Bonjour Robin'", () => {
    const consoleSpy = jest.spyOn(console, "log");
    hello("Robin");
    expect(consoleSpy).toHaveBeenCalledWith("Bonjour Robin");
  });
});
