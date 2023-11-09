import Todo from './Todo';
import Reminder from './Reminder';

type Props = {};
const TodoList = (props: Props) => {
  return (
    <div>
      EmptyList
      <Reminder type="todo" />
      <Reminder type="beer" />
      TodoList
      <Todo />
      <Todo />
    </div>
  );
};
export default TodoList;
