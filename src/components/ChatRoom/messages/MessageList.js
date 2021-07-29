//component
import MessageDetails from "./MessageDetails";

const MessageList = ({ messages }) => {
  const messageList = messages.map((message) => (
    <MessageDetails message={message} key={message.id} />
  ));
  return <div>{messageList}</div>;
};
export default MessageList;
