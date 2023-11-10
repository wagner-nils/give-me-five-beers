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
    <div>
      <p>You are the best</p>
      <button onClick={() => handleClick()}>I know</button>
    </div>
  );
};
export default AffirmationBox;
