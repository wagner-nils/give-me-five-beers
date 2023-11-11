import Text from './Text';

import '../styles/Affirmation.css';

type Props = {
  display: boolean;
  setDisplay: Function;
  setSeen: Function;
};
const AffirmationBox = ({ display, setDisplay, setSeen }: Props) => {
  // todo: define different types of affirmation

  if (!display) {
    return null;
  }

  const handleClick = () => {
    setDisplay(false);
    setSeen(true);
  };

  return (
    <div className="affirmation-box">
      <Text text="You are the best!" large />
      <button className="affirmation-btn" onClick={() => handleClick()}>
        I KNOW
      </button>
    </div>
  );
};
export default AffirmationBox;
