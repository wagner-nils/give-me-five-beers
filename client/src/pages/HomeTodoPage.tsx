import { useEffect } from 'react';
import TodoSection from '../components/TodoSection';

import { useAppDispatch } from '../redux/hooks';
import { getUserId } from '../redux/configSlice';
import { useGetTodosQuery } from '../redux/apiSlice';
import { addTodos } from '../redux/todosSlice';

// import { Todo } from '../types';

type Props = {};

const HomeTodoPage = (props: Props) => {
  const userId = getUserId();
  const { data: todos = [] } = useGetTodosQuery(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addTodos(todos));
  }, [todos]);

  return (
    <>
      <TodoSection />
    </>
  );
};
export default HomeTodoPage;
