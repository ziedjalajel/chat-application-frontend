//redux
import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
//react
import { useState } from "react";
//Emoji
import InputEmoji from "react-input-emoji";

import { IoMdAttach, IoMdSend } from "react-icons/io";

//action
import { addMessage } from "../../../store/actions/messageActions";
import ChatInput from "./emoji";
const FormMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    text: "",
    image: "",
  });
  const [text, setText] = useState({ text: "" });

  function handleOnEnter() {
    console.log(text);
  }
  const handleChange = (event) =>
    setMessage({ ...message, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    // history.push("/products");
  };
  const handleAttachment = (event) =>
    setMessage({ ...message, image: event.target.files[0] });

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message.text}
          onChange={handleChange}
          name="text"
        />

        <label className="custom-file-upload">
          <input
            type="file"
            //   value={message.image}
            onChange={handleAttachment}
            name="image"
          />
          <IoMdAttach
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              left: "100%",
              right: "0.9%",
              // top: "45%",
            }}
          />
        </label>
      </form>
      {/* <InputEmoji
        name="text"
        className="Emoji"
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
      /> */}
      {/* <ChatInput /> */}
    </div>
  );
};
export default FormMessage;
