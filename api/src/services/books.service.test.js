const BookService = require('./books.service');


const fakeBooks = [
  {
    _id: 1,
    name: "Harry Potter",
  },
];


//va a suplantar MongoLib
const MongoLibStub={
getAll:()=>[...fakeBooks],
create:()=>{}
}
//que genere una suplantación de esta libreria
jest.mock("../lib/mongo.lib",()=> jest.fn().mockImplementation(()=>MongoLibStub));


//primera prueba
describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    //para limpiar todos los mocks y pasar a nuevos datos en caso sea necesario
    jest.clearAllMocks();
  });

  describe('test for getBooks',()=>{
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
  })
});



