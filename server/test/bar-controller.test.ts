import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';
import * as BarModel from '../model/bar.model';

let con: any;

jest.mock('../model/bar.model', () => ({
    getRandomBar: jest.fn(),
    getChosenBar: jest.fn(),
}))


beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    con = await request(app);
  });


describe('getRandomBar controller', () => {
    const bar = {
        _id: '6556300d1774242995441f70',
        formattedAddress: 'C/ de Còrsega, 611, 08025 Barcelona, Spain',
        name: 'La Cerveseria Clandestina',
        placeId: 'ChIJD1IZ2tqipBIRoUD-UMvz4nw',
        url: 'https://maps.google.com/?cid=8999023060002422945',
        website: 'https://m.facebook.com/LaCerveseriaClandestina/?locale2=ca_ES',
        wheelchairAccessibleEntrance: true,
        city: 'Barcelona',
        country: 'spain',
        __v: 0
      };

    (BarModel.getRandomBar as jest.Mock).mockResolvedValue(bar);

    it('Responds with status code 200', async () => {
        const res = await con.get('/choice/bar');
        expect(res.status).toBe(200);
    }, 70000);

    it('Responds with the bar', async () => {
        const res = await con.get('/choice/bar');
        console.log(res.body)
        expect(res.body).toStrictEqual(bar)
    }, 70000);
});

describe('getChosenBar controller', () => {
    it('Responds with status code 200', async () => {
        const res = await con.get('/choice/bar/6556300d1774242995441f70');
        expect(res.status).toBe(200);
    }, 70000);


    // THIS WORKS, JUST HAVE TO ADD ERROR HANDLING IN BAR.CONTROLLER
    // it('Throws an error when ID does not exist', async () => {
    //     // const con = await request(app)
    //     const res = await con.get('/choice/bar/6556300d1774985793485739847')
    //     console.log('TEXT:', res.status)
    //     expect(res.status).not.toBe(200)
    // })
});

afterAll(async () => {
    await mongoose.disconnect()
})