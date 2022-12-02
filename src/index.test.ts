import bonjour from ".";

describe("Je vais tester la fonction Bonjour", () => {
  it("La fonction doit retourner Bonjour: 'Bonjour'", () => {
    expect(bonjour()).toBe("Bonjour");
  });
});
