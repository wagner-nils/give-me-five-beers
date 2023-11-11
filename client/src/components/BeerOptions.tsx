type Props = {
  setType: Function;
};
const BeerOptions = ({ setType }: Props) => {
  return (
    <div>
      <button onClick={() => setType('bar')}>fancy a drink</button>
      <button onClick={() => setType('brewery')}>explore the world</button>
    </div>
  );
};

export default BeerOptions;
