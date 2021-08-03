import { useState } from "react";
import { useSelector } from "react-redux";

//components
import ChatItem from "./ChatItem";
import SearchBar from "../SearchBar";

const ChatPrivate = () => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chatReducer.chats);
  const _user = useSelector((state) => state.authReducer.user);
  const chatPrivateList = chats
    .filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) &&
        chat.users.find((user) => user.id === _user.id) &&
        chat.users.length === 2
    )
    .map((chat) => <ChatItem chat={chat} key={chat.id} />);
  return <div>{chatPrivateList}</div>;
};
export default ChatPrivate;
