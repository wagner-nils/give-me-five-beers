import Todo from './Todo';
import Bridge from './Bridge';
import { getTodos } from '../redux/todosSlice';
import '../styles/TodoList.css';
import { Todo as TodoType } from '../types';
// Refactored and made logic simpler, removed, unread props 

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








// type Props = {};
// const TodoList = (props: Props) => {
//   const todos = getTodos();
//   //? 为啥不会渲染空数组？

//   const progressTodo = todos.filter(todo => todo.status === 'progress');
//   const hasProgressTodo = progressTodo.length > 0;

//   if (todos.length === 0) {
//     return null;
//   }

//   return (
//     <div className="todo-list-section">
//       {hasProgressTodo ? (
//         progressTodo.map(todo => (
//           <Todo key={todo._id} id={todo._id} content={todo.content} />
//         ))
//       ) : (
//         <Bridge />
//       )}
//     </div>
//   );
// };
// export default TodoList;
