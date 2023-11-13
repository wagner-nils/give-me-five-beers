import moment from 'moment';
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
  if (!res || res.password !== password) {
    return null;
  }

  return res;
};

const createUser = async (user: any) => {
  // { username, password }
  const res = await UserModel.create(user);

  return res.id;
};

export { getUser, loginUser, createUser };
