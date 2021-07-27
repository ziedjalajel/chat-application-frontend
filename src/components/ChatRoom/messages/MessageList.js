import DetailsMessage from "./DetailsMessage";

const MessageList = ({ messages }) => {
  const messageList = messages.map((message) => (
    <DetailsMessage message={message} key={message.id} />
  ));
  return <div>{messageList}</div>;
};
export default MessageList;
