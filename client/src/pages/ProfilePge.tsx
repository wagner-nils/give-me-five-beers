import { getUserId } from '../redux/configSlice';
import { useGetUserQuery } from '../redux/apiSlice';

import ProfileItem from '../components/ProfileItem';

import '../styles/ProfilePage.css';

type Props = {};
const ProfilePge = (props: Props) => {
  const userId = getUserId();

  const { data: user, isSuccess } = useGetUserQuery(userId);

  return (
    <div className="profile-page">
      ProfilePge
      {isSuccess && (
        <>
          <div className="personal-info">
            <p>name: {user.username}</p>
          </div>
          <div className="beer-info">
            <ProfileItem itemType="time" itemName={'beer time'} />
            <ProfileItem itemType="collection" itemName={'collection'} />
            <ProfileItem itemType="wishlist" itemName={'wishlist'} />
          </div>
        </>
      )}
    </div>
  );
};
export default ProfilePge;
