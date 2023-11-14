import { Link } from 'react-router-dom';

type Props = {};
const WishlistPage = (props: Props) => {
  return (
    <div>
      WishlistPage
      <div>
        <Link to={'/profile'}> Satisfied, go to profile</Link>
      </div>
    </div>
  );
};
export default WishlistPage;
