const mockGetAll = jest.fn();
const request = require('supertest');

const createApp = require('../src/app');


const { generateManyBooks } = require('../src/fix/book.fake');




jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  })));


describe('Test for books endpoints', () => {
  let app = null;
    let server = null;
    beforeAll( () => {
    app = createApp();
    server = app.listen(3004)
    });

    afterAll(async()=>{
        await server.close();
    });

    describe('test for [GET] /api/v1/books', () => {
        test('should return a list books', () => {
            const fakeBooks = generateManyBooks(3);
            
            mockGetAll.mockResolvedValue([...fakeBooks]);

            //el slash al principio de api es importante para las pruebas asi debe quedar /endpoint
            return request(app).get('/api/v1/books').expect(200).then(({body}) => {
                expect(body.length).toEqual(fakeBooks.length);
            })
        });
    });
})