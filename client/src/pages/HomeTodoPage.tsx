import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

import { useGetTodosQuery } from '../redux/apiSlice';

type Props = {};

const HomeTodoPage = (props: Props) => {
  const { data: todos } = useGetTodosQuery();
  console.log(todos);
  return (
    <div>
      HomeTodoPage
      <TodoInput />
      <TodoList />
    </div>
  );
};
export default HomeTodoPage;
