import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
//styles
import {
  ChatItemImage,
  ChatItemDiv,
  ChatItemH2,
  ChatItemH6,
} from "../../../styles";
import ProfilePic from "../../../Picture1.png";
//components
import FullPage from "../../FullPage/FullPage";

const ChatItem = ({ chat }) => {
  const _user = useSelector((state) => state.authReducer.user);

  const month = chat.updatedAt.substring(10, -1);
  const hourly = chat.updatedAt.substring(11, 16);
  const time = `${month}-${hourly}`;
  if (chat.users.length === 2) {
    let otherUser = chat.users.find((a) => a.id !== _user.id);
    chat.name = otherUser.username;
    chat.image = otherUser.image;
  }
  return (
    <>
      <Link to={`/chats/${chat.id}`} style={{ textDecoration: "none" }}>
        <ChatItemDiv className="container">
          {!chat.image ? (
            <ChatItemImage src={ProfilePic} alt={chat.name} />
          ) : (
            <ChatItemImage src={chat.image} alt={chat.name} />
          )}

          <ChatItemH2>{chat.name}</ChatItemH2>
          {/* <ChatItemH6>{time}</ChatItemH6> */}
        </ChatItemDiv>
      </Link>
    </>
  );
};
export default ChatItem;
