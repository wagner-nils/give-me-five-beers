import moment from 'moment';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Reminder from '../components/Reminder';

import { getTime } from '../redux/configSlice';
import { getTodos } from '../redux/todosSlice';

import '../styles/TodoSection.css';

type Props = {};
const TodoSection = (props: Props) => {
  const todos = getTodos();

  const hasTodo = todos.length > 0;
  //? how to compare time properly
  const time = getTime();
  const now = moment().format('HH:MM');
  const reminderType = now <= time ? 'todo' : 'beer';

  return (
    <div className="todo-section">
      {/* {!hasTodo && <Reminder type={reminderType} />} */}
      <Reminder type={reminderType} />
      {reminderType === 'todo' && <TodoInput />}
      <TodoList />
    </div>
  );
};
export default TodoSection;
