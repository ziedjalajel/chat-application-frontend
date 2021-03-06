import { useState } from "react";
import { useDispatch } from "react-redux";
//Emoji
import InputEmoji from "react-input-emoji";
//styling
import { IoMdAttach, IoMdSend } from "react-icons/io";
import {
  InputImojiDiv,
  SendIconDiv,
  AttachIconDiv,
  ButtonAtt,
} from "../../../styles";
//action
import { addMessage } from "../../../store/actions/messageActions";

const MessageForm = ({ id }) => {
  const dispatch = useDispatch();
  const [message] = useState({
    image: "",
  });

  const [text, setText] = useState("");
  const resetForm = () => {
    setText("");
  };

  function handleOnEnter(event) {
    resetForm();
    dispatch(addMessage({ text }, id));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message), id);
  };
  const handleAttachment = (event) => {
    dispatch(addMessage({ ...message, image: event.target.files[0] }, id));
  };

  return (
    <div>
      <InputImojiDiv>
        <InputEmoji
          name="text"
          className="Emoji"
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </InputImojiDiv>
      <SendIconDiv type="button " onClick={handleOnEnter}>
        <IoMdSend
          style={{
            width: "40px",
            height: "30px",
          }}
        />
      </SendIconDiv>
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <label>
            <AttachIconDiv type="input ">
              <input
                name="image"
                type="file"
                onChange={handleAttachment}
                className="attachment"
              />
              <IoMdAttach
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </AttachIconDiv>
          </label>
        </form>
      </div>
    </div>
  );
};
export default MessageForm;
