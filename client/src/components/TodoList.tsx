import moment from 'moment';

import Todo from './Todo';
import Reminder from './Reminder';

import { getTodos } from '../redux/todosSlice';
import { getTime } from '../redux/configSlice';

type Props = {};
const TodoList = (props: Props) => {
  const todos = getTodos();
  //? 为啥不会渲染空数组？

  //? how to compare time
  const time = getTime();
  const now = moment().format('HH:MM');

  const hasTodo = todos.length > 0;

  if (!hasTodo) {
    if (now <= time) {
      return <Reminder type="todo" />;
    } else {
      // todo, refactor, extract reminder outside of todolist
      return <Reminder type="beer" />;
    }
  }

  // console.log(todos);
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
