import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//styles
import Profilepic from "../../../Picture1.png";
import { BiArrowBack } from "react-icons/bi";
import {
  ProfileBGDiv,
  ProfilePicImg,
  ProfileUserDiv,
  ProfileUserH,
  ProfileBioH,
  SignOutBtn,
} from "../../../styles";
//components
import { signOut } from "../../../store/actions/authActions";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => dispatch(signOut(history));

  return (
    <ProfileBGDiv>
      <Link to="room">
        <BiArrowBack
          style={{
            color: "red",
            height: "42px",
            width: "42px",
          }}
        />
      </Link>
      <ProfilePicImg src={Profilepic} />
      <ProfileUserDiv className="container">
        <ProfileUserH>Username</ProfileUserH>
      </ProfileUserDiv>
      <div className="container">
        <ProfileBioH>Bio </ProfileBioH>
      </div>
      <Link to="/">
        <SignOutBtn
          type="button"
          className="btn btn-danger"
          onClick={handleSignOut}
        >
          Log Out
        </SignOutBtn>
      </Link>
    </ProfileBGDiv>
  );
};
export default ProfileSettings;
