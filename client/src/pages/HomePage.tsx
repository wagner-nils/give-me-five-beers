import { useEffect, useState } from 'react';

import HomeTodoPage from './HomeTodoPage';
import HomeBeerPage from './HomeBeerPage';

import { useAppDispatch } from '../redux/hooks';
import { useGetUserQuery } from '../redux/apiSlice';
import { setTime, setHomePage, getHomePageType } from '../redux/configSlice';

type Props = {};
const HomePage = (props: Props) => {
  const [type, setType] = useState('');
  const { data: user } = useGetUserQuery();
  const dispatch = useAppDispatch();
  const homePageType = getHomePageType();

  useEffect(() => {
    const time = user?.config?.time;
    const todos = user?.todo;

    if (time) {
      dispatch(setTime(time));
    }

    const hasTodo = todos?.length;
    const hasCompletedAll = todos?.every(todo => todo.status === 'completed');

    if (hasTodo && hasCompletedAll) {
      dispatch(setHomePage('beer'));
    } else {
      dispatch(setHomePage('todo'));
    }
  }, [user]); // ?what dependency to use

  useEffect(() => {
    setType(homePageType);
  }, [homePageType]);

  if (!type) {
    return 'loading';
  }

  return <div>{type === 'todo' ? <HomeTodoPage /> : <HomeBeerPage />}</div>;
};
export default HomePage;
