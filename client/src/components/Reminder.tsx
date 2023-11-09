import Text from './Text';

type Props = {
  type: 'todo' | 'beer';
};

const Reminder = ({ type }: Props) => {
  if (type === 'todo') {
    return (
      <div>
        <Text text="Add your dreams of the day, you day dreams" />
        <Text text="It is ok not to." />
        {/* make it small */}
      </div>
    );
  }

  if (type === 'beer') {
    return (
      <div>
        <Text text="It is night time, you have had a long day." />
        <Text text="go straight for beer." />
        <button>ok</button>
      </div>
    );
  }
};

export default Reminder;
