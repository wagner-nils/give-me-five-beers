import { useEffect } from 'react';
import TodoSection from '../components/TodoSection';

import { useAppDispatch } from '../redux/hooks';
import { useGetTodosQuery } from '../redux/apiSlice';
import { addTodos } from '../redux/todosSlice';

// import { Todo } from '../types';

type Props = {};

const HomeTodoPage = (props: Props) => {
  const { data: todos = [] } = useGetTodosQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addTodos(todos));
  }, [todos]);

  return (
    <div>
      HomeTodoPage
      <TodoSection />
    </div>
  );
};
export default HomeTodoPage;
