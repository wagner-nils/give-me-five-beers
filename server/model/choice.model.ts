import { ChoiceModel, UserModel } from './index';

type Choice = {
  type: string;
  userId: string;
  choiceId: string;
};

const postBeerOption = async ({ type, userId, choiceId }: Choice) => {
  const choiceRes = await ChoiceModel.create({ user: userId, type, choiceId });
  console.log(choiceRes);

  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $push: { choice: choiceId } }
  );

  return choiceRes;
};

export { postBeerOption };
