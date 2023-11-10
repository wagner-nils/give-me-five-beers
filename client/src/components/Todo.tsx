import AffirmationBox from './AffirmationBox';

type Props = {
  content: string;
};

const Todo = ({ content }: Props) => {
  return (
    <div>
      <p>{content}</p>
      <div>
        <button>completed</button>
        <button>not completed, let it go</button>
        <button>move to tomorrow</button>
      </div>
      <AffirmationBox />
    </div>
  );
};
export default Todo;
