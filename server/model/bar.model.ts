import { BarModel } from './index';

const getRandomBar = async () => {
  const bar = await BarModel.find({});

  const index = Math.floor(Math.random() * 30);

  return bar[index];
};

const getChosenBar = async (id: string) => {
  const bar = await BarModel.findOne({ _id: id });

  console.log(bar);

  return bar;
};

export { getRandomBar, getChosenBar };
