import { BarModel } from './index';

const getRandomBar = async () => {
  const bar = await BarModel.find({});

  const index = Math.floor(Math.random() * 20);

  return bar[index];
};

export { getRandomBar };
