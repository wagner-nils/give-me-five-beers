import { useEffect } from 'react';
import {
  useGetRandomBarQuery,
  useGetRandomBreweryQuery,
} from '../redux/apiSlice';

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
    <>
      <Text text={title[type]} />
      <Text text={text[type]} />
      {isSuccess && (
        <>
          <p>{info.name}</p>
          {/* <p>at</p>
          <a href={bar.url} target="_blank">
            here
          </a> */}
        </>
      )}
    </>
  );
};

export default BeerInformationBox;

// refactor: extract info?
