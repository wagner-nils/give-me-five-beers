import moment from 'moment';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Reminder from '../components/Reminder';
import { getTime } from '../redux/configSlice';
import '../styles/TodoSection.css';

const TodoSection = () => {
  const time = getTime();
  const now = moment().format('HH:MM');
  const reminderType = now <= time ? 'todo' : 'beer';

  return (                                              // entirely simplifyyed this section
    <div className="todo-section">
      <Reminder type={reminderType} />
      {reminderType === 'todo' && <TodoInput />}
      <TodoList />
    </div>
  );
};

export default TodoSection;















// OLD VERISON:

// import moment from 'moment';
// import TodoInput from '../components/TodoInput';
// import TodoList from '../components/TodoList';
// import Reminder from '../components/Reminder';
// import { getTime } from '../redux/configSlice';

// import '../styles/TodoSection.css';

// type Props = {};
// const TodoSection = (props: Props) => {
//   //todo: time gap when rendering

//   //? how to compare time properly
//   const time = getTime();
//   const now = moment().format('HH:MM');
//   const reminderType = now <= time ? 'todo' : 'beer';

//   return (
//     <div className="todo-section">
//       {/* {!hasTodo && <Reminder type={reminderType} />} */}
//       <Reminder type={reminderType} />
//       {reminderType === 'todo' && <TodoInput />}
//       <TodoList />
//     </div>
//   );
// };
// export default TodoSection;
