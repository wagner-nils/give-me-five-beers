import Todo from './Todo';
import Reminder from './Reminder';

import { useAppSelector } from '../redux/hooks';

type Props = {};
const TodoList = (props: Props) => {
  const todos = useAppSelector(state => state.todos);
  //? 为啥不会渲染空数组？

  // console.log(todos);
  return (
    <div>
      EmptyList
      <Reminder type="todo" />
      <Reminder type="beer" />
      TodoList
      {todos.map(todo => (
        <Todo key={todo._id} content={todo.content} />
      ))}
    </div>
  );
};
export default TodoList;
