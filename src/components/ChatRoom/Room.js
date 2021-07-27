import Profile from "../../Picture1.png";
import { BsTrash, BsHeart } from "react-icons/bs";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";
import { Dropdown, Icon } from "rsuite";
import "./Room.css";

function Room() {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
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
      </div>

      <div
        style={{
          position: "absolute",
          width: "90%",
          height: "54px",
          left: "30%px",
          top: "298%",
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
        <div>
          <IoMdSend
            style={{
              placement: "inline",
              position: "absolute",
              width: "32px",
              height: "32px",
              left: "100%",
              right: "0.9%",
              top: "65%",
            }}
          />

          <div>
            <label className="custom-file-upload">
              <input type="file" multiple />
              <IoMdAttach
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  left: "103%",
                  right: "0.9%",
                  top: "60%",
                }}
              />
            </label>
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

          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
        </div>
      </div>
    </div>
  );
}

export default Room;
