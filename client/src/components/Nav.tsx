import BeerTap from '../assets/beer-tap.png';

import '../styles/Nav.css';

type Props = {};
const Nav = (props: Props) => {
  return (
    <div className="nav">
      <div className="nav-icon">
        <img src={BeerTap} alt="beer todo tap" />
      </div>
    </div>
  );
};
export default Nav;
