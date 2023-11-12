import { useEffect } from 'react';
import {
  useGetRandomBarQuery,
  useGetRandomBreweryQuery,
  usePostBeerOptionMutation,
} from '../redux/apiSlice';

import Text from './Text';

import HazyIpa from '../assets/hazy-ipa.png';
import Brewery from '../assets/brewery.png';

import '../styles/BeerInformationBox.css';

type Props = {
  // todo
  type: string;
};

const BeerInformationBox = ({ type }: Props) => {
  let title = '',
    text = '',
    iconSrc = '';
  switch (type) {
    case 'bar':
      title = 'Fancying a drink';
      text = 'go to this bar';
      iconSrc = HazyIpa;

      break;
    case 'brewery':
      title = 'Exploring the world';
      text = 'look at this brewery';
      iconSrc = Brewery;

      break;

    default:
      break;
  }

  // const title = {
  //   bar: 'Fancying a drink',
  //   brewery: 'Exploring the world',
  // };

  // const text = {
  //   bar: 'go to this bar',
  //   brewery: 'look at this brewery',
  // };

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

  const [postBeerOption] = usePostBeerOptionMutation();

  useEffect(() => {
    if (isSuccess) {
      const choice = {
        type,
        choiceId: type === 'bar' ? info._id : info.id,
        userId: '654ccba8c6e9472ee1acb431',
      };
      postBeerOption(choice);
    }
  }, [isSuccess]);

  // const iconSrc = {
  //   bar: HazyIpa,
  //   brewery: Brewery,
  // };

  return (
    <div className="beer-information-box">
      <Text large bold underline text={title} />
      <Text text={text} />
      {isSuccess && (
        <div className="beer-information">
          <img className="icon" src={iconSrc} alt="" />
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
