import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
//styles
import { ChatItemImage, ChatItemDiv } from "../../../styles";
//components
import FullPage from "../../FullPage/FullPage";

const ChatItem = ({ chat }) => {
  const month = chat.updatedAt.substring(10, -1);
  const hourly = chat.updatedAt.substring(11, 16);
  const time = `${month}-${hourly}`;
  return (
    <Link to={`/chats/${chat.id}`}>
      <ChatItemDiv className="container">
        <ChatItemImage src={chat.image} alt={chat.name} />
        <h2>{chat.name}</h2>
        <h6>{time}</h6>
      </ChatItemDiv>
    </Link>
  );
};
export default ChatItem;
