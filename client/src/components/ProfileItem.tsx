import { useNavigate } from 'react-router-dom';

import BeerOpener from '../assets/beer-opener.png';

import '../styles/ProfileItem.css';

type Props = {
  itemName: string;
  itemType: string;
};

const ProfileItem = ({ itemName, itemType }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (itemType === 'time') {
      navigate('/config/time');
    }
  };

  return (
    <div className="profile-item" onClick={handleClick}>
      <p>{itemName} </p>
      <img src={BeerOpener} alt="beer opener" />
    </div>
  );
};
export default ProfileItem;
