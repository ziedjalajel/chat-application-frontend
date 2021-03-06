import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//styles
import Profile from "../../Picture1.png";
import { GrCheckboxSelected } from "react-icons/gr";
import {
  SettingsMasterDiv,
  SettingsImage,
  SettingsUserDiv,
  SettingsUserH,
  SettingsImgInp,
  SettingsBioH,
  SettingsBioInp,
  SettingsPass2Btn,
} from "../../styles";
//action
import { updateProfile } from "../../store/actions/authActions";

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authReducer.user);
  const [profile, setProfile] = useState({
    bio: users.bio,
  });
  const [image, setImage] = useState({
    image: "",
  });

  const resetForm = () => {
    setProfile({ bio: "" });
  };
  const resetFormImage = () => {
    setImage({ image: "" });
  };
  const handleChange = (event) =>
    setProfile({ ...profile, [event.target.name]: event.target.value });

  const handleImage = (event) => {
    setImage({ ...image, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    dispatch(updateProfile(profile, users.id));
  };
  const handleSubmitImage = (event) => {
    event.preventDefault();
    resetFormImage();
    dispatch(updateProfile(image, users.id));
  };
  return (
    <SettingsMasterDiv className="container">
      {!users.image ? (
        <SettingsImage src={Profile} />
      ) : (
        <SettingsImage src={users.image} alt={users.username} />
      )}

      <SettingsUserDiv className="container">
        {users && <SettingsUserH>{users.username}</SettingsUserH>}
      </SettingsUserDiv>

      <form onSubmit={handleSubmitImage}>
        <SettingsImgInp
          name="image"
          type="file"
          onChange={handleImage}
          className="form-control"
        />
        <div type="button" onClick={handleSubmitImage}>
          <GrCheckboxSelected
            style={{
              position: "absolute",
              color: "red",
              height: "25px",
              width: "25px",
              left: "48%",
              top: "22%",
              backgroundColor: "red",
              borderRadius: "20%",
            }}
          />
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          <SettingsBioH>Bio</SettingsBioH>

          <SettingsBioInp
            type="text"
            value={profile.bio}
            onChange={handleChange}
            name="bio"
          />

          <SettingsPass2Btn type="submit" className="btn btn-danger">
            Save Changes
          </SettingsPass2Btn>
        </div>
      </form>
    </SettingsMasterDiv>
  );
};
export default Settings;
