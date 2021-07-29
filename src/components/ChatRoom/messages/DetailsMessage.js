import {
  MessageBoxP,
  DetailMesaageMasterDiv,
  MessageImage,
  ImageDisNone,
} from "../../../styles";

const DetailsMessage = ({ message }) => {
  return (
    <DetailMesaageMasterDiv>
      {message.text && <MessageBoxP>{message.text}</MessageBoxP>}
      {message.image ? <MessageImage src={message.image} /> : <ImageDisNone />}
    </DetailMesaageMasterDiv>
  );
};
export default DetailsMessage;
