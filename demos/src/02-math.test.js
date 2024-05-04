import { suma, resta, multiplicacion, division, porcentaje } from "./02-math";

//el test se conforma del mensaje "add 1 + 2 to equal 3"}
//luego funcion flecha y dentro va el expect que es como la hipotesis de lo que sera el resultado de esa
//funcion que se esta probando en este caso, 1 y 2 como parametros se entiende que sera 3 que es el resultado de la
//prueba o lo que se espera que devuelva

describe("pruebas matematicas", () => {

  describe("pruebas sobre sumas",() => {
    test("adds 1 + 2 to equal 3", () => {
      expect(suma(1, 2)).toBe(3);
    });
  });


  describe("pruebas sobre multiplicacion",() => {
    test("multiply 2 * 2 to equal 4", () => {
      expect(multiplicacion(2, 2)).toBe(4);
    });
  });


  describe("pruebas sobre restas",() => {
    test("rest 5 - 3 to equal 2", () => {
      expect(resta(5, 3)).toBe(2);
    });
  });

  describe("pruebas sobre division",() => {
    test("division 9 / 3 to equal 3", () => {
      expect(division(9, 3)).toBe(3);
    });
  });

  describe("pruebas sobre porcentaje",() => {
    test("porcentaje 20 * 100 / 100 to equal 20", () => {
      expect(porcentaje(100, 20)).toBe(20);
    });
  });
});


//agrupado, se pueden agregar mas pruebas de cada uno, son sub grupos de un grupo general