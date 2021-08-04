import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addChat, fetchChats } from "../../../store/actions/chatActions";
//styles
import { AddChatLabel, AddChatInp, AddChatBtn } from "../../../styles";

const NewChatForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [chat, setChat] = useState("");
  const handleChange = (event) => setChat(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchChats());
    dispatch(addChat(chat)).then((c) => dispatch(fetchChats()));

    history.push("/chats");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <AddChatLabel>New Message</AddChatLabel>
        <AddChatInp
          type="text"
          className="form-control"
          placeholder="Enter id"
          onChange={handleChange}
        />
      </div>
      <AddChatBtn type="submit" className="btn btn-danger">
        Add Contact
      </AddChatBtn>
    </form>
  );
};
export default NewChatForm;
