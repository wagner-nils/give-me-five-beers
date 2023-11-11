import { useEffect, useState } from 'react';

import HomeTodoPage from './HomeTodoPage';
import HomeBeerPage from './HomeBeerPage';

import { useAppDispatch } from '../redux/hooks';
import { useGetUserQuery } from '../redux/apiSlice';
import { setTime, setHomePage, getHomePageType } from '../redux/configSlice';

import '../styles/HomePage.css';

type Props = {};
const HomePage = (props: Props) => {
  const [type, setType] = useState('');
  const { data: user, isSuccess } = useGetUserQuery();
  const dispatch = useAppDispatch();
  const homePageType = getHomePageType();

  useEffect(() => {
    const time = user?.config?.time;
    const todos = user?.todo;

    if (time) {
      dispatch(setTime(time));
    }

    const hasTodo = todos?.length;
    const hasTodoInProgress = todos?.some(todo => todo.status === 'progress');

    console.log(todos);
    console.log('has tpdp', hasTodo);
    console.log('has tpdp in pg', hasTodoInProgress);

    // 第一次 login 时也能看见
    if (hasTodo && !hasTodoInProgress) {
      dispatch(setHomePage('beer'));
    } else {
      dispatch(setHomePage('todo'));
    }
  }, [isSuccess]); // ?what dependency to use

  useEffect(() => {
    setType(homePageType);
  }, [homePageType]);

  if (!type) {
    return 'loading';
  }

  return (
    <div>
      <h1 className="home-title">
        hello, november <br />
        give me five beers
      </h1>
      {type === 'todo' ? <HomeTodoPage /> : <HomeBeerPage />}
    </div>
  );
};
export default HomePage;
