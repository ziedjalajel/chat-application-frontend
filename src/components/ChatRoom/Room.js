import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";

// styling
import "./Room.css";
import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";
import { RoomMasterDiv, RoomSecondDiv, RoomImage } from "../../styles";
// components
import FormMessage from "./messages/FormMessage";
import MessageList from "./messages/MessageList";
import { signOut } from "../../store/actions/authActions";
//ToDo
function Room() {
  const dispatch = useDispatch();
  const history = useHistory();
  const messages = useSelector((state) => state.messages.messages);
  const token = useSelector((state) => state.user.user);
  if (!token) return <Redirect to="/" />;
  const handleSignOut = () => dispatch(signOut(history));
  return (
    <RoomMasterDiv>
      <RoomSecondDiv>
        <h1>Chat name </h1>
        <Link to="/">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </Link>
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
      <div className="BigDiv">
        <MessageList messages={messages} />
      </div>
      <FormMessage />
    </RoomMasterDiv>
  );
}

export default Room;
