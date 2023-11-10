import Todo from './Todo';
import { getTodos } from '../redux/todosSlice';

type Props = {};
const TodoList = (props: Props) => {
  const todos = getTodos();
  //? 为啥不会渲染空数组？

  if (todos.length === 0) {
    return null;
  }

  return (
    <div>
      TodoList
      {todos.map(todo => (
        <Todo key={todo._id} content={todo.content} />
      ))}
    </div>
  );
};
export default TodoList;
