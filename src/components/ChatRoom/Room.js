import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
// styling
import "./Room.css";
import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";
import {
  RoomMasterDiv,
  RoomSecondDiv,
  RoomImage,
  RoomScroll,
  RoomScrollFScroll,
  RoomNameH,
} from "../../styles";
// components
import MessageForm from "./messages/MessageForm";
import MessageList from "./messages/MessageList";
import { chatDetail } from "../../store/actions/chatActions";

function Room() {
  const messages = useSelector((state) => state.messageReducer.messages);
  const token = useSelector((state) => state.authReducer.user);
  const fetch = useSelector((state) => state.authReducer.fetch);
  const chat = useSelector((state) => state.chatReducer.chats);
  const { chatSlug } = useParams();
  const chatName = chat.find((c) => +chatSlug === c.id);
  const dispatch = useDispatch();
  console.log("here :", chatName);
  useEffect(() => {
    if (fetch && token) dispatch(chatDetail(chatSlug));
  }, []);

  if (!token) return <Redirect to="/" />;

  console.log("fetch :", chatName);
  return (
    <RoomMasterDiv>
      <RoomSecondDiv>
        <RoomNameH>{chatName.name} </RoomNameH>
        <RoomImage src={chatName.image} />
        <BsTrash
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "93%",
            right: "0.9%",
            top: " 10px",
            bottom: " 90.23%",
          }}
        />
        <BsHeart
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "93%",
            right: "0.9%",
            top: " 50px",
          }}
        />
      </RoomSecondDiv>
      <RoomScroll>
        <RoomScrollFScroll>
          <MessageList
            users={chatName.users}
            messages={messages.filter(
              (message) => message.chatId === +chatSlug
            )}
          />
        </RoomScrollFScroll>
      </RoomScroll>
      <MessageForm id={+chatSlug} />
    </RoomMasterDiv>
  );
}

export default Room;
