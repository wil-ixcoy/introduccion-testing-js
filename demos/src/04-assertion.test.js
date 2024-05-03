//testing de objeto, cuando se trabaja con objetos se usa toEqual
test("test object", () => {
  const data = { name: "Wiliams" };
  data.lastname = "Tzoc";
  expect(data).toEqual({ name: "Wiliams", lastname: "Tzoc" });
});

//testing para validar valores nulos, se espera que sea nulos
test("null values", () => {
  const data = null;
  //que sea nulo
  expect(data).toBeNull();
  //que sea definido
  expect(data).toBeDefined();
  //que no sea indefinido
  expect(data).not.toBeUndefined();
});


//testing de valores boleanos, 
test("booleans", () => {
  //si es true se espera que sea igual a true
  expect(true).toEqual(true);
  //o si es false que sea igual a false
  expect(false).toEqual(false);
  //si es cero, se entiende como falso, por lo que tambien se valida si es falso
  expect(0).toBeFalsy();
  //vacio igual
  expect("").toBeFalsy();
  //o false tambien sera false
  expect(false).toBeFalsy();
});

//testing de valores string
test("string", () => {
  //se valida que en el string Christoph haga match con stop, es decir que contiene esa palabra
  expect("Christoph").toMatch(/stop/);
});

//testing de listas o arrays
test("list / arrays", () => {
  const numbers = [1, 2, 3, 4];
  //verifica si el array contiene el valor 3
  expect(numbers).toContain(3);
});
