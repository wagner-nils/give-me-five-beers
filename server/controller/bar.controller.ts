import { Request, Response } from 'express';

import * as BarModel from '../model/bar.model';

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
  } catch (error) {}
};

export { getRandomBar };
