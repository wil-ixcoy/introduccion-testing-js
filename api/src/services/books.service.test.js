const BookService = require('./books.service');
const { generateManyBooks } = require('../fix/book.fake');

const mockGetAll = jest.fn();

// va a suplantar MongoLib

/*

const MongoLibStub = {
  // decimos que get all va a ser igual al espia, para ver el comportamiento.
  getAll: mockGetAll,
  create: () => {},
};
*/

// que genere una suplantación de esta libreria
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

// primera prueba
describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    // para limpiar todos los mocks y pasar a nuevos datos en caso sea necesario
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    /*

      //primera prueba
    test('should return a list book', async () => {
      //arrange
      //act
      const books = await service.getBooks({});
      console.log(books)
      //assert
      expect(books.length).toEqual(1);
    });

    //segunda prueba
    test('should return a list book and validate name', async () => {
      //arrange
      //act
      const books = await service.getBooks({});
      console.log(books)
      //assert
      expect(books[0].name).toEqual("Harry Potter");
    })

    */

    // tercera prueba
    test('should return a list book 3, items', async () => {
      const fakeBooks = generateManyBooks(20);
      // arrange

      // agregamos al espia los valores que va a usar para resolver
      mockGetAll.mockResolvedValue([...fakeBooks]);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
