import Text from './Text';

type Props = {
  type: 'bar' | 'brewery';
};

const BeerInformationBox = ({ type }: Props) => {
  const title = {
    bar: 'fancy a drink',
    brewery: 'explore the world',
  };

  const text = {
    bar: 'go to this bar',
    brewery: 'look at this brewery',
  };

  return (
    <>
      <Text text={title[type]} />
      <Text text={text[type]} />
    </>
  );
};

export default BeerInformationBox;

// todo:
// rename
// refactor home beer page structure
