import { getTime } from '../redux/configSlice';
import { getTodos } from '../redux/todosSlice';

import Text from './Text';

import '../styles/Reminder.css';

type Props = {
  type: 'todo' | 'beer';
};

const Reminder = ({ type }: Props) => {
  const todos = getTodos();

  const hasTodo = todos.length > 0;
  const time = getTime();

  if (type === 'todo') {
    return (
      <div className="reminder-section">
        <Text text="Add your dreams of the day" />
        <Text text="-> you day dreams" />
        {hasTodo ? (
          <Text text={`Come back at ${time} for the cheering for it`} light />
        ) : (
          <Text text="It is ok not to." light />
        )}
        {/* make it small */}
      </div>
    );
  }

  if (type === 'beer') {
    if (hasTodo) {
      return null;
    } else {
      return (
        <div className="reminder-section">
          <Text text="It is night time," />
          <Text text="go straight for beer." />
          <button className="reminder-btn">ok</button>
        </div>
      );
    }
  }
};

export default Reminder;
