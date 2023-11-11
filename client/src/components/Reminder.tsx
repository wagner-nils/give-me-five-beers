import Text from './Text';

import '../styles/Reminder.css';

type Props = {
  type: 'todo' | 'beer';
};

const Reminder = ({ type }: Props) => {
  if (type === 'todo') {
    return (
      <div className="reminder-section">
        <Text text="Add your dreams of the day" />
        <Text text="-> you day dreams" />
        <Text text="It is ok not to." light />
        {/* make it small */}
      </div>
    );
  }

  if (type === 'beer') {
    return (
      <div className="reminder-section">
        <Text text="It is night time," />
        <Text text="go straight for beer." />
        <button className="reminder-btn">ok</button>
      </div>
    );
  }
};

export default Reminder;
