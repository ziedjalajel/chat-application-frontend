//styling
import {
  MessageBoxP,
  DetailMesaageMasterDiv,
  MessageImage,
  ImageDisNone,
} from "../../../styles";

const MessageDetails = ({ message }) => {
  //conic-gradient(from 180deg at 50% 50%, #FF0000 0deg, rgba(219, 255, 0, 0.933544) 80.63deg, #FF0000 202.5deg, rgba(226, 0, 0, 0.924051) 234.38deg, #FAFF00 266.25deg, rgba(255, 0, 0, 0.85) 360deg);

  return (
    <DetailMesaageMasterDiv>
      {message.text && <MessageBoxP>{message.text}</MessageBoxP>}
      {message.image ? <MessageImage src={message.image} /> : <ImageDisNone />}
    </DetailMesaageMasterDiv>
  );
};
export default MessageDetails;
