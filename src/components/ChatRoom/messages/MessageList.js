import React, { useEffect, useRef } from "react";

//component
import MessageDetails from "./MessageDetails";

const MessageList = ({ messages }) => {
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollIntoView({ block: "end" });
  });
  const messageList = messages.map((message) => (
    <MessageDetails message={message} key={message.id} />
  ));

  return (
    <div id={"el"} ref={el}>
      {messageList}
    </div>
  );
};
export default MessageList;
