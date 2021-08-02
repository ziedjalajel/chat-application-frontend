import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchProfiles } from "../../../store/actions/authActions";
import { useEffect } from "react";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const users = useSelector((state) => state.authReducer.user);
  // .map((profile)=>)
  const handleSignOut = () => dispatch(signOut(history));
  useEffect(() => {
    console.log("user id :", users.id);
    dispatch(fetchProfiles(users.id));
  }, []);

  // console.log("fetch profile :", profileData);

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

      <ProfilePicImg src={users.image} alt={users.name} />

      <ProfileUserDiv className="container">
        {users && (
          <>
            <ProfileUserH>{users.username}</ProfileUserH>
          </>
        )}
      </ProfileUserDiv>
      <div className="container">
        <ProfileBioH>{users.bio}</ProfileBioH>
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
