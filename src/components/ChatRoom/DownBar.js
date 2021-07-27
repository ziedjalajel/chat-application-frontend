import { IoMdAttach, IoMdSend } from "react-icons/io";
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";
import FormMessage from "./messages/FormMessage";

const DownBar = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="Fixed">
      <div className="footer">
        {/* <IoMdSend
          className="Send"
          style={{
            placement: "inline",
            position: "absolute",
            width: "28px",
            height: "28px",
            left: "91%",
            right: "0.9%",
            // top: "48%",
          }}
        /> */}

        <div>
          {/* <label className="custom-file-upload">
            <input type="file" multiple />
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
          </label> */}
          {/* onChange={this.onChange} */}

          {/* {this.state.files.map((x) => (
            <div
              className="file-preview"
              onClick={this.removeFile.bind(this, x)}
            >
              {x.name}
            </div>
          )
          )} */}
        </div>

        {/* <InputEmoji
          className="Emoji"
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        /> */}
        <FormMessage />
      </div>
    </div>
  );
};
export default DownBar;
