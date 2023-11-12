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
      select: 'date type',
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

const createUser = async (user: any) => {
  return await UserModel.create(user);
};

export { getUser, createUser };
