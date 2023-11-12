import { Request, Response } from 'express';

import * as ChoiceModel from '../model/choice.model';

const postBeerOption = async (req: Request, res: Response) => {
  try {
    const {
      params: { type },
      body: { userId, choiceId },
    } = req;

    if (type !== 'bar' && type !== 'brewery') {
      throw new Error();
    }

    const choiceRes = await ChoiceModel.postBeerOption({
      type,
      userId,
      choiceId,
    });

    res.status(201).send(choiceRes);
  } catch (error) {
    console.log(error);
  }
};

export { postBeerOption };
