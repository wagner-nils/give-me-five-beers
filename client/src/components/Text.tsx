import classNames from 'classnames';

import '../styles/Text.css';

type Props = {
  text: string;
  light?: boolean;
  large?: boolean;
  underline?: boolean;
  bold?: boolean;
};
const Text = ({ text, light, large, underline, bold }: Props) => {
  const classnames = classNames({
    light,
    large,
    underline,
    bold,
  });

  return (
    <>
      <p className={`text ${classnames}`}>{text}</p>
    </>
  );
};

export default Text;
