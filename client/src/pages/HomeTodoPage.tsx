import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

type Props = {};

const HomeTodoPage = (props: Props) => {
  return (
    <div>
      HomeTodoPage
      <TodoInput />
      <TodoList />
    </div>
  );
};
export default HomeTodoPage;
