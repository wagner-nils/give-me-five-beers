import { useState } from 'react';

import BeerOptions from '../components/BeerOptions';
import BeerInformationBox from '../components/BeerInformationBox';

type Props = {};
const HomeBeerPage = (props: Props) => {
  // todo:
  // use context?
  // save type in redux / db
  const [type, setType] = useState(null);

  return (
    <div>
      HomeBeerPage
      {!type && <BeerOptions setType={setType} />}
      {type && <BeerInformationBox type={type} />}
    </div>
  );
};
export default HomeBeerPage;
