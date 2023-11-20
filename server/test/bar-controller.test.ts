import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';

let con: any;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    con = await request(app);
  });


describe('getRandomBar controller', () => {
    it('Responds with status code 200', async () => {
        const res = await con.get('/choice/bar');
        expect(res.status).toBe(200);
    })


})

describe('getChosenBar controller', () => {
    it('Responds with status code 200', async () => {
        const res = await con.get('/choice/bar/6556300d1774242995441f70');
        expect(res.status).toBe(200);
    })


    // THIS WORKS, JUST HAVE TO ADD ERROR HANDLING IN BAR.CONTROLLER
    // it('Throws an error when ID does not exist', async () => {
    //     // const con = await request(app)
    //     const res = await con.get('/choice/bar/6556300d1774985793485739847')
    //     console.log('TEXT:', res.status)
    //     expect(res.status).not.toBe(200)
    // })
})

afterAll(() => {
    mongoose.disconnect()
})