//redux
import { useDispatch, useSelector } from "react-redux";
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
    text: "",
    image: "",
  });

  const [text, setText] = useState("");
const resetForm= ()=>{setText("")}

  function handleOnEnter(event) {
    console.log(text);
    // event.preventDefault();
    resetForm()
    dispatch(addMessage({text}));
  }
  // const handleChange = (event) =>
  //   setMessage({ ...message, [event.target.name]: event.target.value });

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //    dispatch(addMessage(message))
  // }
  const handleAttachment = (event) =>
    setMessage({ ...message, image: event.target.files[0] });

  return (
    <div className="container" style={{background: "linear-gradient(180deg, #F4DD06 50%, rgba(196, 196, 196, 0) 100%)",width:'140%'}}>
     <InputEmoji
        name="text"
        className="Emoji"
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={()=>handleOnEnter()}
        placeholder="Type a message"
      />
    <div>
      <form className="container" onSubmit={handleOnEnter}>
       
      <label>
                          
          <input
            type="file"
            //   value={message.image}
            onChange={handleAttachment}
            name="image"
            // accept="application/pdf, application/vnd.ms-excel" 
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
        /></div>
         </form>
    </div>    
    
      </div>
  );
};
export default FormMessage;
