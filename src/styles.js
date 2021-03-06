import styled from "styled-components";

export const Center = styled.div`
  text-align: center;
  color: red;
  font-weight: bold;
  font-style: italic;
  margin-top: 5%;
  h3 {
    text-align: center;
    margin-left: 11%;
    position: absolute;
  }
`;
export const Button = styled.button`
  justify-content: center;
  align-items: center;
  text-align: right;
  border-radius: 50%;
  margin-left: 43.5%;
  margin-top: 5%;
`;
//Room
export const RoomMasterDiv = styled.div`
  width: 65%;
  float: right;
`;
export const RoomSecondDiv = styled.div`
  background-color: red;
  height: 83px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(247, 231, 87, 0.87) 69.79%,
    rgba(234, 218, 66, 0) 100%
  );
`;
export const RoomNameH = styled.h1`
  position: absolute;
  color: red;
  left: 40%;
`;
export const RoomImage = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 84%;
  top: 5px;
  border-radius: 50%;
`;
export const RoomScroll = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
`;
export const RoomScrollFScroll = styled.div`
  /* overflow-y: auto; */
`;

export const HomeDiv = styled.div`
  margin-top: 15%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: right;
  border-radius: 5%;
  margin-left: 1%;
  margin-bottom: 25%;
  width: 300px;
  text-align: center;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const HomeTitleDiv = styled.div`
  text-align: center;
  margin-top: 10%;
  color: red;
`;
export const SignupButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 190%;
  border-radius: 5%;
  width: 300px;
  height: 100px;
  margin-left: 35%;
  margin-top: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const SignUp1Div = styled.div`
  margin-top: 100px;
`;
export const SignUp2Div = styled.div`
  margin-top: 8%;
`;
export const SignH = styled.h3`
  color: red;
  font-weight: bold;
`;
export const SignUpInput = styled.input`
  margin-left: 63%;
`;
export const SignInButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5%;
  width: 300px;
  height: 100px;
  font-size: 190%;
  margin-left: 35%;
  margin-top: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const SignIn1Div = styled.div`
  margin-top: 100px;
`;
export const SignIn2Div = styled.div`
  margin-top: 15%;
`;
export const SignInInput = styled.input`
  margin-left: 50%;
`;
export const SignInSpecialH = styled.h6`
  text-align: center;
  margin-right: 8%;
  margin-top: 1%;
  color: red;
  font-weight: bold;
  font-style: italic;
`;
//MessageForm
export const SendIconDiv = styled.div`
  width: 30px;
  margin-top: -4%;
  cursor: pointer;
  size: 200%;
  margin-left: 95%;
  z-index: 1;
  /* padding-right: 0.1%; */
`;
export const AttachIconDiv = styled.div`
  position: absolute;
  width: 30px;
  height: 40px;
  left: 94.5%;
  top: 92.5%;
  cursor: pointer;
  z-index: 1;
`;
export const InputImojiDiv = styled.div`
  top: 95.2%;
  margin-right: 8%;
`;
export const ButtonAtt = styled.button`
  position: absolute;
  right: 1.8%;
  top: 94%;
  background-color: rgb(33, 37, 41);
  border: none;
`;
export const MessageBoxP = styled.div`
  background: linear-gradient(
    270deg,
    rgba(221, 2, 2, 0.6) 3.44%,
    rgba(83, 46, 46, 0.6) 100%
  );
  width: auto;
  height: auto;
  border-radius: 5%;
  position: unset;
  padding: 2%;
  padding-left: 5%;
  padding-bottom: 2%;
  margin-left: 60%;
  margin-top: 2%;
  font-size: 22px;
  margin-right: 2%;
  color: white;
`;
export const MessageBoxP2 = styled.div`
  background: linear-gradient(
    270deg,
    rgba(187, 102, 102, 0.89) 0%,
    rgba(173, 17, 17, 0.61) 100%
  );
  width: auto;
  height: auto;
  border-radius: 5%;
  position: unset;
  padding: 2%;
  padding-left: 5%;
  padding-bottom: 2%;
  margin-right: 60%;
  margin-top: 2%;
  font-size: 22px;
  margin-left: 2%;
  color: white;
`;
export const DetailMesaageMasterDiv = styled.div`
  flex-direction: column;
`;
export const MessageImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10%;
  margin-left: 5%;
  padding: 1%;
`;
// export const MessageImage = styled.img`
//   width: 300px;
//   height: 300px;
//   border-radius: 10%;
//   margin-left: 59%;
//   padding: 1%;
// `;
export const ImageDisNone = styled.img`
  display: none;
`;
//CreateNewChat
export const BGDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(247, 231, 87, 0.87) 69.79%,
    rgba(234, 218, 66, 0) 100%
  );
  width: 35%;
  position: absolute;
  float: left;
  height: 100%;
`;
export const SideBMasterDiv = styled.div`
  width: 35%;
  position: absolute;
  top: 6%;
  background-color: red;
  width: 100px;
  height: 100px;
  border-radius: 70%;
  left: 8%;
  /* background: linear-gradient(
    180deg,
    rgba(247, 231, 87, 0.87) 69.79%,
    rgba(234, 218, 66, 0) 100%
  ); */
`;
export const GroupIconDiv = styled.div`
  margin-top: 9%;
  margin: 8%;
  width: 50px;
`;
export const PStyle = styled.p`
  margin-top: 70%;
  margin-left: 9%;
  vertical-align: middle;
`;
export const PlusIconDiv = styled.div`
  position: absolute;
  left: 380%;
  top: 5%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const P2Style = styled.p`
  margin-top: 70%;
  vertical-align: middle;
  color: black;
`;
export const NewChattInp = styled.input`
  background-color: red;
  width: 400%;
  color: white;
  margin-top: 50%;
  margin-left: 80%;
`;
//ChatList
export const ChatListMasterDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(247, 231, 87, 0.87) 69.79%,
    rgba(234, 218, 66, 0) 100%
  );
  width: 35%;
  position: absolute;
  float: left;
`;
export const ChatListIconDiv = styled.div`
  margin-top: 3%;
`;
export const ChatListImage = styled.img`
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  padding: 2%;
`;
export const ChatListH = styled.h4`
  color: red;
  margin-left: 30%;
  margin-top: 0%;
`;
export const ChatListInp = styled.input`
  background: linear-gradient(270deg, #e35959 0%, rgba(235, 20, 20, 0.32) 100%);
  border-radius: 30px;
  width: 78%;
  font-weight: bold;
  font-size: large;
  margin-top: 9.5%;
  margin-left: 14%;
`;
export const ChatListDiv = styled.div`
  overflow-y: auto;
  height: 580px;
`;
//BackgroundColor
export const BackgroundDiv = styled.div`
  width: 30%;
  background-color: red;
`;
//FullPage
export const FullPageDiv = styled.div`
  /* display: flex; */
`;
//profile
export const ProfileBGDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(247, 231, 87, 0.68) 0%,
    rgba(234, 218, 66, 0.41) 52.4%,
    rgba(234, 218, 66, 0.55) 82.27%
  );
  width: 35%;
  position: absolute;
  float: left;
  height: 100%;
`;
export const ProfilePicImg = styled.img`
  position: absolute;
  height: 170px;
  width: 170px;
  right: 35%;
  top: 5%;
  border-radius: 50%;
`;
export const ProfileUserDiv = styled.div`
  position: absolute;
  top: 29%;
  left: 30%;
`;
export const ProfileUserH = styled.h2`
  font-weight: bold;
  font-style: italic;
  color: red;
  margin-left: 10%;
  margin-top: 2%;
`;
export const ProfileBioH = styled.h4`
  font-weight: bold;
  font-style: italic;
  color: red;
  position: absolute;
  top: 37%;
  left: 7%;
  padding: 10%;
`;
export const SignOutBtn = styled.button`
  position: fixed;
  top: 65%;
  left: 11%;
  font-size: xx-large;
  width: 200px;
  height: 90px;
  border-radius: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
//Settings
export const SettingsMasterDiv = styled.div`
  position: absolute;
  float: right;
  height: 100%;
  width: 65%;
  background: linear-gradient(
    180deg,
    rgba(255, 230, 0, 0.32) 0%,
    rgba(248, 239, 36, 0) 100%,
    rgba(250, 255, 0, 0.32) 100%
  );
  left: 35%;
`;
//SettingsFullPage
export const SettingsImage = styled.img`
  position: absolute;
  right: 2%;
  height: 280px;
  width: 280px;
  border-radius: 50%;
  padding: 20px;
`;
export const SettingsUserDiv = styled.div`
  position: absolute;
  left: 18.4%;
  top: 10%;
`;
export const SettingsUserH = styled.h1`
  color: red;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
`;
export const SettingsImgInp = styled.input`
  color: white;
  position: absolute;
  left: 20%;
  top: 20%;
  height: 60px;
  width: 250px;
  border-radius: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const SettingsBioH = styled.h2`
  position: absolute;
  top: 51%;
  left: 5%;
  color: red;
`;
export const SettingsBioInp = styled.textarea`
  margin-top: 40%;
  margin-left: 12%;
  border: none;
  height: 90px;
  width: 450px;
`;

export const SettingsPass2Btn = styled.button`
  color: white;
  position: absolute;
  left: 60%;
  top: 53.5%;
  height: 60px;
  width: 160;
  border-radius: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const ChangeImageBtn = styled.button`
  color: white;
  position: absolute;
  height: 60px;
  width: 160;
  border-radius: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
//ChatItem
export const ChatItemImage = styled.img`
  height: 70px;
  width: 70px;
  display: flex;
  margin-right: 10px;
  border-radius: 50%;
`;
export const ChatItemDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const ChatItemH2 = styled.h2`
  color: red;
  margin-left: 4%;
  margin-top: 4%;
  text-decoration: none;
`;
export const ChatItemH6 = styled.h6`
  position: absolute;
  color: red;
  margin-left: 66%;
  margin-top: 6.8%;
`;
//addchatform
export const AddChatLabel = styled.label`
  position: absolute;
  color: red;
  font-size: xx-large;
  margin-top: 10%;
  left: 44%;
  font-weight: bold;
`;
export const AddChatInp = styled.input`
  position: absolute;
  color: white;
  background: linear-gradient(270deg, #e35959 0%, rgba(235, 20, 20, 0.32) 100%);
  margin-top: 18%;
  left: 35%;
  font-weight: bold;
  width: 450px;
`;
export const AddChatBtn = styled.button`
  position: absolute;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
  border: none;
  margin-top: 30%;
  left: 46%;
`;
//newgroupform
export const CreateGroupLabel = styled.label`
  position: absolute;
  color: red;
  font-size: xx-large;
  margin-top: 10%;
  left: 44%;
  font-weight: bold;
`;
export const CreateGroupInpImg = styled.input`
  position: absolute;
  color: white;
  background-color: red;
  margin-top: 18%;
  left: 35%;
  font-weight: bold;
  width: 450px;
  border: none;
`;
export const CreateGroupInp = styled.input`
  position: absolute;
  color: white;
  background: linear-gradient(270deg, #e35959 0%, rgba(235, 20, 20, 0.32) 100%);
  margin-top: 26%;
  left: 35%;
  font-weight: bold;
  width: 450px;
  border: none;
`;
export const CreateGroupBtn = styled.button`
  position: absolute;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
  border: none;
  margin-top: 35%;
  left: 45%;
  font-size: x-large;
`;
