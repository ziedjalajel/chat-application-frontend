import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
//styles
import { ChatItemImage, ChatItemDiv } from "../../../styles";
//components
import FullPage from "../../FullPage/FullPage";

const ChatItem = ({ chat }) => {
  return (
    <Link to={`/chats/${chat.slug}/room`}>
      <ChatItemDiv className="container">
        <ChatItemImage src={chat.image} alt={chat.name} />
        <h2>{chat.name}</h2>
      </ChatItemDiv>
    </Link>
  );
};
export default ChatItem;
