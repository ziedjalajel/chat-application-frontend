import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, Link } from "react-router-dom";
// styling
import "./Room.css";
import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
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
  const chatId = chatName.id;

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetch && token) dispatch(chatDetail(chatSlug));
  }, []);

  if (!token) return <Redirect to="/" />;

  return (
    <RoomMasterDiv>
      <RoomSecondDiv>
        <RoomNameH>{chatName.name} </RoomNameH>
        {!chatName.image ? (
          <RoomImage src={Profile} />
        ) : (
          <RoomImage src={chatName.image} />
        )}

        <Link to={`/chats/${chatId}/add-members`}>
          <AiOutlineUsergroupAdd
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              left: "93%",
              right: "0.9%",
              top: " 18px",
              bottom: " 90.23%",
              color: "red",
            }}
          />
        </Link>
      </RoomSecondDiv>
      <RoomScroll>
        <RoomScrollFScroll className="scroll">
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
