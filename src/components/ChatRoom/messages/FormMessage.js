//redux
import { useDispatch } from "react-redux";
//react
import { useState } from "react";
//Emoji
import InputEmoji from "react-input-emoji";

import { IoMdAttach, IoMdSend } from "react-icons/io";

//action
import { addMessage } from "../../../store/actions/messageActions";

const FormMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    image: "",
  });

  const [text, setText] = useState("");
  const resetForm = () => {
    setText("");
  };

  function handleOnEnter(event) {
    console.log(text);
    resetForm();
    dispatch(addMessage({ text }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    console.log(message);
  };
  const handleAttachment = (event) =>
    setMessage({ ...message, image: event.target.files[0] });

  return (
    <div>
      <InputEmoji
        name="text"
        className="Emoji"
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={() => handleOnEnter()}
        placeholder="Type a message"
      />
      <div type="button " onClick={handleOnEnter}>
        <IoMdSend
          className="Send"
          style={{
            placement: "inline",
            position: "absolute",
            width: "28px",
            height: "28px",
            left: "129%",
            right: "0.9%",
            top: "17%",
          }}
        />
      </div>
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <label>
            <input
              name="image"
              type="file"
              onChange={handleAttachment}
              className="form-control"
            />

            <IoMdAttach
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                left: "125%",
                right: "0.9%",
                top: "10%",
              }}
            />
          </label>
          <button type="submit " onSubmit={handleSubmit}></button>
        </form>
      </div>
    </div>
  );
};
export default FormMessage;
