import { startOfToday, endOfToday } from 'date-fns';
import { TodoModel, UserModel } from './index';

const getTodo = async (id: string) => {
  const todos = await TodoModel.find(
    {
      user: id,
      date: {
        $gte: startOfToday(),
        $lte: endOfToday(),
      },
    },
    'content' // todo: how to select 2 fields
  );
  // .populate('user');
  // populate('key name')

  console.log(todos);
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
