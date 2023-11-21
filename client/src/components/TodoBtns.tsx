import StatusBtn from './SatusBtn';

type Props = {
  type: string;
  handleClick: (type: string) => void;
};
const TodoBtns = ({ type, handleClick }: Props) => {
  if (!type) {
    return (
      <>
        <StatusBtn type="complete" handleClick={handleClick} />
        <StatusBtn type="abandon" handleClick={handleClick} />
        <StatusBtn type="tomorrow" handleClick={handleClick} />
      </>
    );
  }

  return <StatusBtn type={type} clicked handleClick={handleClick} />;
};
export default TodoBtns;
