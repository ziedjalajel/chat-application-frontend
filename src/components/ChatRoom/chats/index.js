import { useState } from "react";
import { useSelector } from "react-redux";

//components
import ChatItem from "./ChatItem";
import SearchBar from "../SearchBar";

const ChatListComponent = () => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chatReducer.chats);
  const chatList = chats
    .filter((chat) => chat.name.toLowerCase().includes(query.toLowerCase()))
    .map((chat) => <ChatItem chat={chat} key={chat.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {chatList}
    </div>
  );
};
export default ChatListComponent;
