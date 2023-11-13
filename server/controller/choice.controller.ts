import { Request, Response } from 'express';

import * as ChoiceModel from '../model/choice.model';

const postBeerOption = async (req: Request, res: Response) => {
  try {
    const {
      params: { type },
      body: { userId, choiceId },
    } = req;

    if (type !== 'bar' && type !== 'brewery') {
      throw 'not the right type of drink';
    }

    const choiceRes = await ChoiceModel.postBeerOption({
      type,
      userId,
      choiceId,
    });

    if (!choiceRes) {
      throw 'only one drink per day';
    }

    res.status(201).send(choiceRes);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { postBeerOption };
