import Todo from './Todo';
import Bridge from './Bridge';
import { getTodos } from '../redux/todosSlice';

import '../styles/TodoList.css';

type Props = {};
const TodoList = (props: Props) => {
  const todos = getTodos();
  //? 为啥不会渲染空数组？

  const progressTodo = todos.filter(todo => todo.status === 'progress');
  const hasProgressTodo = progressTodo.length > 0;

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="todo-list-section">
      {/* {hasProgressTodo ? ( */}
      {progressTodo.map(todo => (
        <Todo key={todo._id} id={todo._id} content={todo.content} />
      ))}
      {/* ) : ( */}
      <Bridge />
      {/* ) */}
    </div>
  );
};
export default TodoList;
