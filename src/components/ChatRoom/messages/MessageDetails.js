//styling
import {
  MessageBoxP,
  DetailMesaageMasterDiv,
  MessageImage,
  ImageDisNone,
} from "../../../styles";

const MessageDetails = ({ message }) => {
  return (
    <DetailMesaageMasterDiv>
      {message.text && <MessageBoxP>{message.text}</MessageBoxP>}
      {message.image ? <MessageImage src={message.image} /> : <ImageDisNone />}
    </DetailMesaageMasterDiv>
  );
};
export default MessageDetails;
