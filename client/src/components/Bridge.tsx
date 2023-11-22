// todo: rename

import { useAppDispatch } from '../redux/hooks';
import { setHomePage } from '../redux/configSlice';

import '../styles/Bridge.css';

type Props = {};
const Bridge = (props: Props) => {
  const useDispatch = useAppDispatch();
  const handleClick = () => {
    useDispatch(setHomePage('beer'));
  };
  return (
    <div className="bridge">
      <button className="bridge-btn" onClick={() => handleClick()}>
        Go to beer optioins 🍻
      </button>
    </div>
  );
};
export default Bridge;