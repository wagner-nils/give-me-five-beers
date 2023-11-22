import { useState } from 'react';

import { getChoice } from '../redux/configSlice';

import BeerOptions from '../components/BeerOptions';
import BeerInformationBox from '../components/BeerInformationBox';

import '../styles/homePage.css';

const HomeBeerPage = () => {
  const choice = getChoice();
  const hasChosen = !!choice.choiceId;
  const [type, setType] = useState(null);
  console.log(choice, hasChosen, type);

  return (
    <div className="beer-section">
      {hasChosen || type ? (
        <BeerInformationBox
          hasChosen={hasChosen}
          choice={choice}
          type={choice.type}
        />
      ) : (
        <BeerOptions setType={setType} />
      )}
    </div>
  );
};
export default HomeBeerPage;
