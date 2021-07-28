import React from "react";

import { useSelector } from "react-redux";

import "./Room.css";

import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";

import FormMessage from "./messages/FormMessage";
import MessageList from "./messages/MessageList";

function Room() {
  const messages = useSelector((state) => state.messages.messages);

  return (
    <div style={{ width: "70%", position: "absolute", left: "30%" }}>
      <div
        style={{
          border: "15px solid red",
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <h1>Chat name </h1>
        <img
          src={Profile}
          style={{
            position: "absolute",
            width: "90px",
            height: "90px",
            left: "85%",
            top: "1px",
          }}
        />

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
      </div>
      <div className="BigDiv">
        <MessageList messages={messages} />
      </div>
      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "54px",
          left: "30%px",
          boxSizing: " border-box",
        }}
      ></div>
      <FormMessage />
    </div>
  );
}

export default Room;
