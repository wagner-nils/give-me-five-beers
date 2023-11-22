import Todo from './Todo';
import Bridge from './Bridge';
import { getTodos } from '../redux/todosSlice';
import '../styles/TodoList.css';
import { Todo as TodoType } from '../types';

const TodoList = () => {
  const todos = getTodos();

  if (!todos || !todos.length) {
    return <div className="todo-list-section">No todos available</div>;
  }

  const progressTodo = todos.filter((todo: TodoType) => todo.status === 'progress');

  return (
    <div className="todo-list-section">
      {progressTodo.length > 0 ? (
        progressTodo.map((todo: TodoType) => (
          <Todo key={todo._id} id={todo._id} content={todo.content} />
        ))
      ) : (
        <Bridge />
      )}
    </div>
  );
};

export default TodoList;