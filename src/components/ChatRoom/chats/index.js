import { useState } from "react";
import { useSelector } from "react-redux";

//components
import ChatItem from "./ChatItem";
import SearchBar from "../SearchBar";

const ChatListComponent = () => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chatReducer.chats);
  const _user = useSelector((state) => state.authReducer.user);
  const chatList = chats
    .filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) &&
        chat.users.find((user) => user.id === _user.id)
    )
    .map((chat) => <ChatItem chat={chat} key={chat.id} />);
  console.log("moe :", chats);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {chatList}
    </div>
  );
};
export default ChatListComponent;
