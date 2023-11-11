import moment from 'moment';
import { TodoModel, UserModel } from './index';

const getTodo = async (id: string) => {
  const todos = await TodoModel.find(
    {
      user: id,
      date: {
        $gte: moment().startOf('date'),
        $lte: moment().endOf('date'),
      },
    },
    'content status' // todo: how to select 2 fields elegantly
  );
  // .populate('user');
  // populate('key name')

  return todos;
};

const postTodo = async (todo: any) => {
  const newTodo = await TodoModel.create(todo);
  console.log(newTodo);
  const userId = todo.user;
  const todoId = newTodo.id;

  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $push: { todo: todoId } }
  );

  return newTodo;
};

const markTodo = async (id: string, status: string) => {
  const updatedTodo = await TodoModel.findOneAndUpdate(
    { _id: id },
    { status },
    {
      new: true,
    }
  );

  return updatedTodo;
};

export { postTodo, getTodo, markTodo };
