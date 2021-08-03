//styling
import { useSelector } from "react-redux";
import {
  MessageBoxP,
  DetailMesaageMasterDiv,
  MessageImage,
  ImageDisNone,
  MessageBoxP2,
} from "../../../styles";

const MessageDetails = ({ message, user }) => {
  const profileId = useSelector((state) => state.authReducer.user);

  return (
    <DetailMesaageMasterDiv>
      {message.text && message.userId === profileId.id ? (
        <MessageBoxP>
          {user.username}:{message.text}
        </MessageBoxP>
      ) : (
        <MessageBoxP2>
          {user.username}:{message.text}
        </MessageBoxP2>
      )}

      {message.image ? <MessageImage src={message.image} /> : <ImageDisNone />}
    </DetailMesaageMasterDiv>
  );
};
export default MessageDetails;
