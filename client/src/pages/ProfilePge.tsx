import '../styles/ProfilePage.css';

type Props = {};
const ProfilePge = (props: Props) => {
  return (
    <div className="profile-page">
      ProfilePge
      <div className="personal-info">
        <p>name</p>
      </div>
      <div className="beer-info">
        <p>beer time</p>
        <p>wishlist</p>
        <p>collection</p>
      </div>
    </div>
  );
};
export default ProfilePge;
