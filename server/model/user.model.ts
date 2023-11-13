import moment from 'moment';
import bcrypt from 'bcrypt';

import { UserModel } from './index';

const getUser = async (id: string) => {
  const todos = await UserModel.findOne({ _id: id })
    .populate({
      path: 'todo',
      select: 'content status',
      match: {
        date: {
          $gte: moment().startOf('date'),
          $lte: moment().endOf('date'),
        },
      },
    })
    .populate({
      path: 'choice',
      select: 'date type choiceId',
      match: {
        date: {
          $gte: moment().startOf('date'),
          $lte: moment().endOf('date'),
        },
      },
    })
    .exec();

  console.log(todos);

  return todos;
};

const loginUser = async (user: any) => {
  const { username, password } = user;

  const res = await UserModel.findOne({ username });
  if (!res) {
    return null;
  }

  const matchPassword = await bcrypt.compare(password, res?.password || '');
  if (!matchPassword) {
    return null;
  }

  return res;
};

const createUser = async (user: any) => {
  const { username, password } = user;
  const currentUser = await UserModel.findOne({ username });
  if (currentUser) {
    return currentUser;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const res = await UserModel.create({ ...user, password: hashedPassword });

  return res;
};

const editConfig = async (config: any) => {
  const { userId, type, value } = config;

  // todo?: how to use $set to update nested fields
  await UserModel.findOneAndUpdate({ _id: userId }).set('config', {
    [type]: value,
  });

  const updatedConfig = await UserModel.findOne({ _id: userId }, 'config');

  return updatedConfig;
};

export { getUser, loginUser, createUser, editConfig };
