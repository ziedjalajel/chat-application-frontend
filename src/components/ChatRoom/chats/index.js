import { useState } from "react";
import { useSelector } from "react-redux";

//components
import ChatItem from "./ChatItem";
import SearchBar from "../SearchBar";
import ChatPrivate from "./ChatPrivate";

const ChatListComponent = () => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chatReducer.chats);
  const _user = useSelector((state) => state.authReducer.user);
  const chatList = chats
    .filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) &&
        chat.users.find((user) => user.id === _user.id) &&
        chat.users.length !== 2
    )
    .map((chat) => <ChatItem chat={chat} key={chat.id} />);
  console.log("here", chats);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {chatList}
      <ChatPrivate setQuery={setQuery} />
    </div>
  );
};
export default ChatListComponent;
