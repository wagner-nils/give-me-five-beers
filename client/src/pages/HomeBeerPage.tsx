import { useState } from 'react';

import { getChoice } from '../redux/configSlice';

import BeerOptions from '../components/BeerOptions';
import BeerInformationBox from '../components/BeerInformationBox';

import '../styles/homePage.css';

type Props = {};
const HomeBeerPage = (props: Props) => {
  // todo:
  // use context?
  // how to use choice and type; extremely ugly!
  const choice = getChoice();
  const [type, setType] = useState(choice ? choice : null);

  return (
    <div className="beer-section">
      {choice ? (
        <BeerInformationBox type={choice} />
      ) : (
        <BeerOptions setType={setType} />
      )}
      {/* {!type && <BeerOptions setType={setType} />}
      {type && <BeerInformationBox type={type} />} */}
      {/* {true && <BeerInformationBox type={'brewery'} />} */}
    </div>
  );
};
export default HomeBeerPage;
