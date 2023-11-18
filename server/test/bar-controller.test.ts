// TODO Happy route: tests for expected input
import request from 'supertest'
import app from '../index'

import mongoose from 'mongoose'

let con: any;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    con = await request(app)
  });


describe ('Endpoint /choice', () => {
    it('Gets a random bar', async () => {
        const res = await con.get('/choice/bar')
        // console.log('res')
        expect(res.status).toBe(200)
    })
    it('Gets a chosen bar', async () => {
        // const con = await request(app)
        const res = await con.get('/choice/bar/6556300d1774242995441f70')
        // console.log('TEXT:', res.text)
        expect(res.status).toBe(200)
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