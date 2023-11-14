import { useNavigate } from 'react-router-dom';

import BeerGoodLogo from '../assets/beer-like-logo.png';

import '../styles/WelcomePage.css';

type Props = {};
const WelcomePage = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <div className="welcome-page">
        <img src={BeerGoodLogo} alt="good beer is good" />
        <div className="welcome-options">
          <button onClick={() => handleClick('login')}>log in</button>
          <button onClick={() => handleClick('signup')}>sign up</button>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
