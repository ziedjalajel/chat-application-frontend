//components
import Room from "../ChatRoom/Room";
import ChatList from "../ChatRoom/sideBarContact/ChatList";
//styles
import { FullPageDiv } from "../../styles";
import { useSelector } from "react-redux";

const FullPage = () => {
  const user = useSelector((state) => state.authReducer.user);
  const chat = useSelector((state) => state.chatReducer.chats);

  return (
    <FullPageDiv>
      <div style={{ alignSelf: "self-start" }}>
        <ChatList />
      </div>
      <div style={{ alignSelf: "self-end" }}>
        <Room />
      </div>
    </FullPageDiv>
  );
};
export default FullPage;
