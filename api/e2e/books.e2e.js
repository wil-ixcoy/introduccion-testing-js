const request = require('supertest');
const { MongoClient } =require("mongodb")
const {config} = require("../src/config/index")
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl

describe('Test for books endpoints', () => {
    let app = null;
    let server = null;
    let database = null;

    beforeAll( async () => {
        app = createApp();
        server = app.listen(3004)

        //conexion a la bd de pruebas 
        const client = new MongoClient(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        await client.connect();
        database = client.db(DB_NAME)
    });

    afterAll( async () => {
        await server.close();
        await database.close();
        //una vez termine de usarse la bd se borra
        await database.dropDatabase()
    });

    describe('test for [GET] /api/v1/books', () => {

        test('should return a list books',async () => {            
            //arrange
            
            //semilla de informacion
            const seedData = await database.collection('books').insertMany([
                {
                    name:'libro 1',
                    year:1998,
                    author:'Wiliams'
                },
                {
                    name:'libro 2',
                    year:1998,
                    author:'Wiliams'
                }
            ])

            //act
            return request(app).get('/api/v1/books').expect(200).then(({body}) => {
                //assert
                expect(body.length).toEqual(seedData.insertedCount);
            })
        });
    });
})