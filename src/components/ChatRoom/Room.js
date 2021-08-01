import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
} from "../../styles";
// components
import MessageForm from "./messages/MessageForm";
import MessageList from "./messages/MessageList";
//ToDo
//for the icons(heart,trash)most probably we will move them to sittings icon thats why we didn't fix the inline styling (for now laila)
function Room() {
  const messages = useSelector((state) => state.messageReducer.messages);
  const token = useSelector((state) => state.authReducer.user);

  if (!token) return <Redirect to="/" />;

  return (
    <>
      <RoomMasterDiv>
        <RoomSecondDiv>
          <h1>Chat name </h1>
          <RoomImage src={Profile} />
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
            <MessageList messages={messages} />
          </RoomScrollFScroll>
        </RoomScroll>
        <MessageForm />
      </RoomMasterDiv>
    </>
  );
}

export default Room;
