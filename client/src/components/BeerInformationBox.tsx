import {
  useGetRandomBarQuery,
  useGetRandomBreweryQuery,
} from '../redux/apiSlice';

import Text from './Text';

import '../styles/BeerInformationBox.css';

type Props = {
  type: 'bar' | 'brewery';
};

const BeerInformationBox = ({ type }: Props) => {
  const title = {
    bar: 'Fancying a drink',
    brewery: 'Exploring the world',
  };

  const text = {
    bar: 'go to this bar',
    brewery: 'look at this brewery',
  };

  // todo: refactor
  // customize a hook?
  const useQuery = () => {
    let res;
    if (type === 'bar') {
      res = useGetRandomBarQuery();
    } else {
      res = useGetRandomBreweryQuery();
    }

    return res;
  };

  const { data: info, isSuccess } = useQuery();

  return (
    <div className="beer-information-box">
      <Text large bold underline text={title[type]} />
      <Text text={text[type]} />
      {isSuccess && (
        <div className="beer-information">
          <p>{info.name}</p>
          <p>
            {type === 'bar'
              ? info.formattedAddress.split(',').slice(0, 2).join(',')
              : info.address_1}
          </p>
          <a
            href={type === 'bar' ? info.website : info.website_url}
            target="_blank"
          >
            website
          </a>
          <p>
            {info.city} {info.country}
          </p>
        </div>
      )}
      <div>
        <Text text="It' s really good. Trust me." />
        <Text text="Have a well deserved night!" />
      </div>
    </div>
  );
};

export default BeerInformationBox;

// refactor: extract info?
