import { useEffect } from 'react';
import {
  useGetRandomBarQuery,
  useGetChosenBarQuery,
  useGetRandomBreweryQuery,
  useGetChosenBreweryQuery,
  usePostBeerOptionMutation,
} from '../redux/apiSlice';

import Text from './Text';

import HazyIpa from '../assets/hazy-ipa.png';
import Brewery from '../assets/brewery.png';

import '../styles/BeerInformationBox.css';

type Props = {
  // todo
  hasChosen: Boolean;
  choice: any;
  type: string;
};

const BeerInformationBox = ({ hasChosen, choice, type }: Props) => {
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

  // const iconSrc = {
  //   bar: HazyIpa,
  //   brewery: Brewery,
  // };

  // todo: refactor
  // customize a hook?
  const useQuery = () => {
    let res;
    if (type === 'bar') {
      res = hasChosen
        ? useGetChosenBarQuery(choice.choiceId)
        : useGetRandomBarQuery();
    } else {
      res = hasChosen
        ? useGetChosenBreweryQuery(choice.choiceId)
        : useGetRandomBreweryQuery();
    }

    return res;
  };

  const { data: info, isSuccess } = useQuery();

  const [postBeerOption] = usePostBeerOptionMutation();

  useEffect(() => {
    if (isSuccess && !hasChosen) {
      const choice = {
        type,
        choiceId: type === 'bar' ? info._id : info.id,
        userId: '654ccba8c6e9472ee1acb431',
      };
      postBeerOption(choice);
    }
  }, [isSuccess]);

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
          {type === 'bar' && (
            <iframe
              width="90%"
              height="280px"
              style={{ border: 'none' }}
              src={`https://www.google.com/maps/embed/v1/place?key=${
                import.meta.env.VITE_GOOGLE_MAP_API_KEY
              }&q=place_id:${info.placeId}&zoom=14`}
            ></iframe>
          )}
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
