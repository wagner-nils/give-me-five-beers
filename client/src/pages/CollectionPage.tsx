import { Link } from 'react-router-dom';

type Props = {};
const CollectionPage = (props: Props) => {
  return (
    <div>
      CollectionPage
      <div>
        <Link to={'/profile'}> Satisfied, go to profile</Link>
      </div>
    </div>
  );
};
export default CollectionPage;
