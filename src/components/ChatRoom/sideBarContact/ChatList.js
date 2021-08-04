import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//styles
import {
  ChatListMasterDiv,
  ChatListImage,
  ChatListIconDiv,
  ChatListH,
  ChatListDiv,
} from "../../../styles";
import Profile from "../../../Picture1.png";
import { FaRegCircle } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
//components
import ChatListComponent from "../chats";
import { fetchProfiles } from "../../../store/actions/authActions";

const ChatList = ({ chat }) => {
  const users = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles(users.id));
  }, []);

  return (
    <ChatListMasterDiv>
      {!users.image ? (
        <ChatListImage src={Profile} />
      ) : (
        <ChatListImage src={users.image} alt={users.username} />
      )}

      <ChatListIconDiv type="button">
        {users && (
          <>
            <ChatListH>{users.username}</ChatListH>
          </>
        )}

        {/* <FaRegCircle
          style={{
            color: "red",
            height: "20px",
            width: "20px",
            marginLeft: "19%",
          }}
        /> */}
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
        <ChatListComponent />
      </ChatListDiv>
    </ChatListMasterDiv>
  );
};
export default ChatList;
