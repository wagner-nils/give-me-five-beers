import { Request, Response } from 'express';

import * as BarModel from '../model/bar.model';

// Load bars to DB
// const insertBar = (req: Request, res: Response) => {
//   try {
//     BarModel.insertMany([]);

//     res.status(201).send('done');
//     console.log('inserted');
//   } catch (error) {}
// };

const getRandomBar = async (req: Request, res: Response) => {
  try {
    const bar = await BarModel.getRandomBar();
    res.status(200).send(bar);
  } catch (error) {
    res.status(500).send(`Error when getting bars: ${error} `)
  }
};

const getChosenBar = async (req: Request, res: Response) => {
  try {
    const {
      params: { type, id },
    } = req;

    if (type === 'bar') {
      const bar = await BarModel.getChosenBar(id);

      res.status(200).send(bar);
    }
  } catch (error) {
    res.status(500).send(`Error when getting bars: ${error} `)
  }
};

export { getRandomBar, getChosenBar };
