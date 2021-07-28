import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";
import { Dropdown, Icon } from "rsuite";
import "./Room.css";
import FormMessage from "./messages/FormMessage";
import MessageList from "./messages/MessageList";
import { useSelector } from "react-redux";

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
      <div
        className="BigDiv"
        style={{
          //   overflow: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {/* <div
          className="CircledText"
          style={{
            backgroundColor: "#F48444",
            width: "500px",
            height: "100px",
            borderRadius: "50%",
            position: "unset",
            left: "70%",
            padding: "5%",
            paddingLeft: "10%",
            paddingBottom: "6%",
            marginLeft: "50%",
            marginTop: "2%",
          }}
        >
          <h3>text</h3>
        </div> */}
        <MessageList messages={messages} />
      </div>
      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "54px",
          left: "30%px",
          // top: "298%",
          boxSizing: " border-box",
        }}
      >
        {/* <button >  */}

        {/* <div class="input-group">
          <select
            class="form-select"
            id="movie"
            aria-label="Example select with button addon"
            class="col-4"
            name="userId"
            defaultValue={toDo.priority}
            onChange={handleChange}
          >
            <option value="">Type</option> not done
            <option value="1">Owner</option>
            <option value="2">Coach</option>
            <option value="3">Member</option>
          </select>
        </div> */}
      </div>
      <FormMessage />
    </div>
  );
}

export default Room;
