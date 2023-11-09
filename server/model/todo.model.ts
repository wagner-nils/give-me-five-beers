import { TodoModel, UserModel } from './index';

const getTodo = async (id: string) => {
  return await TodoModel.findOne({ _id: id }).populate('user');
  // populate('key name')
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

export { postTodo, getTodo };
