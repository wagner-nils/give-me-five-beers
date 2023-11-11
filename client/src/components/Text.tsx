import classNames from 'classnames';

import '../styles/Text.css';

type Props = {
  text: string;
  light?: Boolean;
  large?: Boolean;
  underline?: Boolean;
};
const Text = ({ text, light, large, underline }: Props) => {
  const classnames = classNames({
    light,
    large,
    underline,
  });

  return (
    <>
      <p className={`text ${classnames}`}>{text}</p>
    </>
  );
};

export default Text;
