import { BackgroundDiv } from "../../../styles";
//components
import ChatList from "./ChatList";
import Room from "../Room";

const BackGroundColor = () => {
  return (
    <BackgroundDiv>
      <ChatList />
    </BackgroundDiv>
  );
};
export default BackGroundColor;
