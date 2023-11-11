import '../styles/BeerOptions.css';

type Props = {
  setType: Function;
};
const BeerOptions = ({ setType }: Props) => {
  return (
    <div className="beer-options">
      <button className="beer-option-btn" onClick={() => setType('bar')}>
        Fancy a drink
      </button>
      <button className="beer-option-btn" onClick={() => setType('brewery')}>
        Explore the world
      </button>
    </div>
  );
};

export default BeerOptions;
