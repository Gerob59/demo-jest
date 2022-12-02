import { verifierNote } from "./Exercice6";
import { calculerMoyenne } from "./Exercice6";
import { definirMention } from "./Exercice6";
import { bulletin } from "./Exercice6";

describe("je vais verifier la fonction verifierNote", () => {
  //------------------------------//
  describe("note est trop élève", () => {
    it("La fonction doit retourner: 'False'", () => {
      expect(verifierNote(21)).toBe(false);
    });
  });
  //------------------------------//
  describe("la note est trop faible", () => {
    it("La fonction doit retourner: 'false'", () => {
      expect(verifierNote(-2)).toBe(false);
    });
  });
  //------------------------------//
  describe("la note est correct", () => {
    it("La fonction doit retourner: 'true'", () => {
      expect(verifierNote(15)).toBe(true);
    });
  });
});

//------------------------------//

describe("je vais verifier la fonction calculerMoyenne", () => {
  //------------------------------//
  describe("Les notes sont corrects", () => {
    it("La fonction doit retourner: '6'", () => {
      expect(calculerMoyenne(5, 6, 7)).toBe(6);
    });
  });
  //------------------------------//
  /*
  describe("une des notes n'est pas corrects", () => {
    it("La fonction doit retourner une erreur", () => {
      const consoleSpy = jest.spyOn(console, "log");
      calculerMoyenne(25, 10);
      expect(consoleSpy).toBe(
        "La note 25 a été ignorée car non valide ! DSL GROS, DES BISOUS <3"
      );
    });
  });
  */
  //------------------------------//
  describe("une des notes n'est pas corrects", () => {
    it("La fonction doit retourner: '5'", () => {
      expect(calculerMoyenne(25, 10)).toBe(5);
    });
  });
});

//------------------------------//

describe("je vais verifier la fonction definirMention", () => {
  //------------------------------//
  describe("une test une note catastrophique", () => {
    it("la mention doit retourner : 'catastrophique'", () => {
      expect(definirMention(3)).toBe("catastrophique :'(");
    });
  });
  //------------------------------//
  describe("une test une note insuffisant", () => {
    it("la mention doit retourner : 'insuffisant'", () => {
      expect(definirMention(8)).toBe("insuffisant :/");
    });
  });
  //------------------------------//
  describe("une test une note Bien", () => {
    it("la mention doit retourner : 'Bien'", () => {
      expect(definirMention(13)).toBe("Bien mais pas top :|");
    });
  });
  //------------------------------//
  describe("une test une note bonne", () => {
    it("la mention doit retourner : 'bonne'", () => {
      expect(definirMention(17)).toBe("Pas mal, gj ! :) <3");
    });
  });
  //------------------------------//
  describe("une test une note exellente", () => {
    it("la mention doit retourner : 'exellente'", () => {
      expect(definirMention(19)).toBe("Tu déchires gros ! :D <3 <3 <3");
    });
  });
});

//------------------------------//

describe("je vais verifier la fonction bulletin", () => {
  //------------------------------//
  describe("Theodule a un bulletin catastrophique", () => {
    it("le resultat de theodule est catastrophique", () => {
      expect(bulletin("Théodule", 1, 2, 3)).toBe(
        "Théodule a une moyenne de 2, son travail est donc catastrophique :'( !"
      );
    });
  });
  //------------------------------//
  describe("Theodule a un bulletin insuffisant", () => {
    it("le resultat de theodule est insuffisant", () => {
      expect(bulletin("Théodule", 5, 6, 7)).toBe(
        "Théodule a une moyenne de 6, son travail est donc insuffisant :/ !"
      );
    });
  });
  //------------------------------//
  describe("Theodule a un bon bulletin", () => {
    it("le resultat de theodule est Bien", () => {
      expect(bulletin("Théodule", 5, 12, 19)).toBe(
        "Théodule a une moyenne de 12, son travail est donc Bien mais pas top :| !"
      );
    });
  });
  //------------------------------//
  describe("Theodule a un très bon bulletin", () => {
    it("le resultat de theodule est très bon", () => {
      expect(bulletin("Théodule", 16, 17, 18)).toBe(
        "Théodule a une moyenne de 17, son travail est donc Pas mal, gj ! :) <3 !"
      );
    });
  });
  //------------------------------//
  describe("Theodule a un excellent bulletin", () => {
    it("le resultat de theodule est excellent", () => {
      expect(bulletin("Théodule", 18, 19, 20)).toBe(
        "Théodule a une moyenne de 19, son travail est donc Tu déchires gros ! :D <3 <3 <3 !"
      );
    });
  });
});
