import { useEffect, useState } from 'react';
import moment from 'moment';

import HomeTodoPage from './HomeTodoPage';
import HomeBeerPage from './HomeBeerPage';

import { useAppDispatch } from '../redux/hooks';
import { useGetUserQuery } from '../redux/apiSlice';
import {
  setTime,
  setHomePage,
  setChoice,
  getHomePageType,
  getUserId,
} from '../redux/configSlice';

import '../styles/HomePage.css';

type Props = {};
const HomePage = (props: Props) => {
  const [type, setType] = useState('');

  const userId = getUserId();
  const homePageType = getHomePageType();

  const { data: user, isSuccess } = useGetUserQuery(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const time = user?.config?.time;
    const todos = user?.todo;
    const choice = user?.choice;

    if (time) {
      dispatch(setTime(time));
    }

    const hasTodo = todos?.length;
    const hasTodoInProgress = todos?.some(todo => todo.status === 'progress');

    console.log(todos);
    console.log('has tpdp', hasTodo);
    console.log('has tpdp in pg', hasTodoInProgress);

    // has choice

    // const todayChoice = choice?.filter(c => moment().isSame(c.date, 'date'));
    const hasChoice = choice?.length;

    // 第一次 login 时也能看见
    // if (hasTodo && !hasTodoInProgress) {
    if (hasChoice) {
      dispatch(setHomePage('beer'));
      dispatch(
        setChoice({ type: choice[0].type, choiceId: choice[0].choiceId })
      );
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
        Hello, November <br />
        Give Me 5 Beers
      </h1>
      {type === 'todo' ? <HomeTodoPage /> : <HomeBeerPage />}
    </div>
  );
};
export default HomePage;
