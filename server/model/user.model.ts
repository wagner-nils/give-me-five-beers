import { UserModel } from './index';

const getUser = async (id: string) => {
  return await UserModel.findOne({ _id: id }).populate('todo');
};

const createUser = async (user: any) => {
  return await UserModel.create(user);
};

export { getUser, createUser };
