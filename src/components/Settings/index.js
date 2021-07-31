//styles
import Profile from "../../Picture1.png";
import {
  SettingsMasterDiv,
  SettingsImage,
  SettingsUserDiv,
  SettingsUserH,
  SettingsButton1,
  SettingsBioH,
  SettingsBioInp,
  SettingsPass1Inp,
  SettingsPassH1,
  SettingsPass2Inp,
  SettingsPassH2,
  SettingsPass3Inp,
  SettingsPass3H,
  SettingsPass2Btn,
} from "../../styles";

const Settings = () => {
  return (
    <SettingsMasterDiv className="container">
      <SettingsImage src={Profile} />
      <SettingsUserDiv className="container">
        <SettingsUserH>Username</SettingsUserH>
      </SettingsUserDiv>
      <SettingsButton1 className="btn btn-danger">
        Change Profile Picture
      </SettingsButton1>
      <div>
        <SettingsBioH>Bio</SettingsBioH>
        <SettingsBioInp />
        <SettingsPassH1>Old Password</SettingsPassH1>
        <SettingsPass1Inp type="password" />
        <SettingsPassH2>New Password</SettingsPassH2>
        <SettingsPass2Inp />
        <SettingsPass3H>Confirm Password</SettingsPass3H>
        <SettingsPass3Inp />
        <SettingsPass2Btn className="btn btn-danger">
          Save Changes
        </SettingsPass2Btn>
      </div>
    </SettingsMasterDiv>
  );
};
export default Settings;
