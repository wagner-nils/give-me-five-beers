import { useNavigate } from 'react-router-dom';

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
        <div className="welcome-options">
          <button onClick={() => handleClick('login')}>log in</button>
          <button onClick={() => handleClick('signup')}>sign up</button>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
