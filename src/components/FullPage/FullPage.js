//components
import Room from "../ChatRoom/Room";
import ChatList from "../ChatRoom/sideBarContact/ChatList";
//styles
import { FullPageDiv } from "../../styles";

const FullPage = () => {
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
