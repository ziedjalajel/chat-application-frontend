import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
//styles
import {
  ChatItemImage,
  ChatItemDiv,
  ChatItemH2,
  ChatItemH6,
} from "../../../styles";
//components
import FullPage from "../../FullPage/FullPage";

const ChatItem = ({ chat }) => {
  const month = chat.updatedAt.substring(10, -1);
  const hourly = chat.updatedAt.substring(11, 16);
  const time = `${month}-${hourly}`;
  return (
    <>
      <Link to={`/chats/${chat.id}`} style={{ textDecoration: "none" }}>
        <ChatItemDiv className="container">
          <ChatItemImage src={chat.image} alt={chat.name} />
          <ChatItemH2>{chat.name}</ChatItemH2>
          <ChatItemH6>{time}</ChatItemH6>
        </ChatItemDiv>
      </Link>
    </>
  );
};
export default ChatItem;
