//styling
import { useSelector } from "react-redux";
import {
  MessageBoxP,
  DetailMesaageMasterDiv,
  MessageImage,
  ImageDisNone,
  ChatItemH2,
  ChatItemH6,
} from "../../../styles";

const MessageDetails = ({ message }) => {
  const _user = useSelector((state) => state.authReducer.user);
  // const chats = useSelector((state) => state.chatReducer.chats);

  // const month = message.updatedAt.substring(10, -1);
  // const hourly = message.updatedAt.substring(11, 16);
  // const time = `${month}-${hourly}`;
  return (
    <DetailMesaageMasterDiv>
      <ChatItemH2>{_user.name}</ChatItemH2>
      {/* <ChatItemH6>{time}</ChatItemH6> */}
      {message.text && <MessageBoxP>{message.text}</MessageBoxP>}
      {message.image ? <MessageImage src={message.image} /> : <ImageDisNone />}
    </DetailMesaageMasterDiv>
  );
};
export default MessageDetails;
