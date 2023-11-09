import AffirmationBox from './AffirmationBox';

type Props = {};
const Todo = (props: Props) => {
  return (
    <div>
      Todo
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
