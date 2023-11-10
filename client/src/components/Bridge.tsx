// todo: rename

import { useAppDispatch } from '../redux/hooks';
import { setHomePage } from '../redux/configSlice';

type Props = {};
const Bridge = (props: Props) => {
  const useDispatch = useAppDispatch();
  const handleClick = () => {
    useDispatch(setHomePage('beer'));
  };
  return (
    <div>
      <button onClick={() => handleClick()}>go to beer optioins</button>
    </div>
  );
};
export default Bridge;
