import { useState } from 'react';

import BeerOptions from '../components/BeerOptions';
import BeerInformationBox from '../components/BeerInformationBox';

import '../styles/homePage.css';

type Props = {};
const HomeBeerPage = (props: Props) => {
  // todo:
  // use context?
  // save type in redux / db
  const [type, setType] = useState(null);

  return (
    <div className="beer-section">
      {!type && <BeerOptions setType={setType} />}
      {type && <BeerInformationBox type={type} />}
      {/* {true && <BeerInformationBox type={'brewery'} />} */}
    </div>
  );
};
export default HomeBeerPage;
