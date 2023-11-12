import { Request, Response } from 'express';

import * as ChoiceModel from '../model/choice.model';

const postBeerOption = async (req: Request, res: Response) => {
  try {
    const {
      params: { type },
      body: { userId, choiceId },
    } = req;

    const choiceRes = await ChoiceModel.postBeerOption({
      type,
      userId,
      choiceId,
    });

    res.status(201).send(choiceRes);
  } catch (error) {}
};

export { postBeerOption };
