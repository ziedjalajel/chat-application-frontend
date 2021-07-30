import {
  ChatListMasterDiv,
  ChatListImage,
  ChatListIconDiv,
  ChatListH,
  ChatListInp,
} from "../../../styles";
import Profile from "../../../Picture1.png";
import { FaRegCircle } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";

//components
import BackGroundColor from "./BackGroungColor";
//ToDo : input * 2 y?
const ChatList = () => {
  return (
    <ChatListMasterDiv>
      <ChatListImage src={Profile} />
      <ChatListIconDiv type="button">
        <ChatListH>Username</ChatListH>

        <FaRegCircle
          style={{
            color: "red",
            height: "20px",
            width: "20px",
            marginLeft: "19%",
          }}
        />
        <SiGooglemessages
          style={{
            position: "absolute",
            color: "red",
            height: "35px",
            width: "35px",
            top: "2%",
            left: "84%",
          }}
        />
        <AiOutlineBars
          style={{
            position: "absolute",
            color: "red",
            left: "92%",
            top: "1.5%",
            height: "40px",
            width: "40px",
          }}
        />
      </ChatListIconDiv>
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
      <ChatListInp />
    </ChatListMasterDiv>
  );
};
export default ChatList;
