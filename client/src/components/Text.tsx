import classNames from 'classnames';

import '../styles/Text.css';

type Props = {
  text: string;
  light?: Boolean;
  large?: Boolean;
};
const Text = ({ text, light, large }: Props) => {
  const classnames = classNames({
    light,
    large,
  });

  return (
    <>
      <p className={`text ${classnames}`}>{text}</p>
    </>
  );
};

export default Text;
