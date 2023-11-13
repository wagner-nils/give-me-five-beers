import { useNavigate } from 'react-router-dom';

type Props = {};
const WelcomePage = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick('login')}>log in</button>
        <button onClick={() => handleClick('signup')}>sign up</button>
      </div>
    </>
  );
};
export default WelcomePage;
