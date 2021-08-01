import { Link } from "react-router-dom";

//styles
import {
  ChatListMasterDiv,
  ChatListImage,
  ChatListIconDiv,
  ChatListH,
  ChatListInp,
  ChatListDiv,
} from "../../../styles";
import Profile from "../../../Picture1.png";
import { FaRegCircle } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";

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
        <Link to="/newchat">
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
        </Link>
      </ChatListIconDiv>
      <ChatListInp />
      <div>
        <Link to="/profile-settings">
          <AiFillSetting
            style={{
              position: "absolute",
              color: "red",
              left: "92%",
              top: "1.5%",
              height: "40px",
              width: "40px",
            }}
          />
        </Link>
      </div>
      <ChatListDiv>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
        <h1>blahblah</h1>
      </ChatListDiv>
    </ChatListMasterDiv>
  );
};
export default ChatList;
