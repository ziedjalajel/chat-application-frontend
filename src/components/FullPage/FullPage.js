//components
import Room from "../ChatRoom/Room";
import ChatList from "../ChatRoom/sideBarContact/ChatList";
//styles
import { FullPageDiv } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import ChatPrivate from "../ChatRoom/chats/ChatPrivate";
import { fetchMessages } from "../../store/actions/messageActions";
import { useEffect, useState } from "react";

const FullPage = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState();
  const user = useSelector((state) => state.authReducer.user);
  const chat = useSelector((state) => state.chatReducer.chats);
  //Very Important
  //ToDo
  //Uncomment the comment
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("here");
  //     dispatch(fetchMessages());
  //   }, 3000);
  //   return () => clearInterval(intervalID);
  // }, []);
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
