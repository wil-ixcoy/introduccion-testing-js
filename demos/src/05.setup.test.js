// "describe" reune un conjunto de pruebas, esto puede ser aninado, en donde dentro de un describe haya otro
//anidandose

describe("grupo 1", () => {
  //es una sentencia que corre antes que todas las pruebas, sirve para realizar acciones antes de hacer pruebas
  //por ejemplo antes de  este grupo de pruebas, tiene que levantar una bd, hacer un registro, hacer login y obtener
  //el token, etc

  //el beforeAll respeta en que describe este, en caso de que este en otro describe, se ejecutara al principio
  //del grupo dentro del general, el grupo 1 correrá antes del beforeAll del grupo 2 o sub grup
  beforeAll(() => {
    console.log("beforeAll, antes de todo");
  });

  //este corre antes de cada caso de prueba, es decir antes de cada test, test 1,2, 3 y 4. Existe
  //uno por cada test, antes.
  beforeEach(() => {
    console.log("beforeEach, antes de cada prueba");
  });

    //este corre despues de cada caso de prueba, es decir despues de cada test, test 1,2, 3 y 4. Existe
  //uno por cada test, despues.
  afterEach(() => {
    console.log("beforeEach, antes de cada prueba");
  });

  //es una sentencia que se ejecuta al final de todas las pruebas, con la misma logica de beforeAll pero se ejecuta
  //despue de todo
  afterAll(() => {
    console.log("afterAll, despues de todo");
  });

  test("case 1", () => {
    console.log("case 1");
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    console.log("case 2");
    expect(1 + 3).toBe(4);
  });

  describe("grupo 2", () => {
    test("case 3", () => {
      console.log("case 3");
      expect(1 + 1).toBe(2);
    });
    test("case 4", () => {
      console.log("case 4");
      expect(1 + 3).toBe(4);
    });
  });
});
