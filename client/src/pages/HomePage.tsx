import HomeTodoPage from './HomeTodoPage';
import HomeBeerPage from './HomeBeerPage';

type Props = {};
const HomePage = (props: Props) => {
  return (
    <div>
      HomePage
      <HomeTodoPage />
      <HomeBeerPage />
    </div>
  );
};
export default HomePage;
