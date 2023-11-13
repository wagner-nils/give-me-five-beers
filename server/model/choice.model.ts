import moment from 'moment';

import { ChoiceModel, UserModel } from './index';

type Choice = {
  type: string;
  userId: string;
  choiceId: string;
};

const postBeerOption = async ({ type, userId, choiceId }: Choice) => {
  const todayChoice = await ChoiceModel.find({
    date: { $gte: moment().startOf('date'), $lte: moment().endOf('date') },
  });

  if (todayChoice) {
    // prevent multiple choice requests
    return null;
  }

  const choiceRes = await ChoiceModel.create({ user: userId, type, choiceId });

  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $push: { choice: choiceRes.id } }
  );

  return choiceRes;
};

export { postBeerOption };
