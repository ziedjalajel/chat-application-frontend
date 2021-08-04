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
    <>
      <DetailMesaageMasterDiv>
        {(message.text || message.image) && message.userId === profileId.id ? (
          <MessageBoxP>
            {user.username}: {message.text}
            {message.image ? (
              <MessageImage src={message.image} />
            ) : (
              <ImageDisNone />
            )}
          </MessageBoxP>
        ) : (
          <MessageBoxP2>
            {user.username}: {message.text}
            {message.image ? (
              <MessageImage src={message.image} />
            ) : (
              <ImageDisNone />
            )}
          </MessageBoxP2>
        )}
      </DetailMesaageMasterDiv>
    </>
  );
};
export default MessageDetails;
