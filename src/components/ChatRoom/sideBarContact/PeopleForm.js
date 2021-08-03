import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
// actions
import { addChat, fetchChats } from "../../../store/actions/chatActions";
import {
  addChatUser,
  fetchUserProfile,
} from "../../../store/actions/authActions";
//styles
import {
  CreateGroupLabel,
  CreateGroupInpImg,
  CreateGroupInp,
  CreateGroupBtn,
} from "../../../styles";

const PeopleForm = () => {
  const { chatSlug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [chat, setChat] = useState({
    id: "",
  });
  const handleChange = (event) =>
    setChat({
      ...chat,
      [event.target.name]: event.target.value.split(",").map((c) => +c),
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addChatUser(chat, +chatSlug));
    history.push(`/chats/${chatSlug}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CreateGroupLabel>Add People</CreateGroupLabel>

        <CreateGroupInp
          type="text"
          name="id"
          value={chat.id}
          placeholder="Enter ids"
          onChange={handleChange}
        />
      </div>
      <CreateGroupBtn type="submit" className="btn btn-danger">
        Add People
      </CreateGroupBtn>
    </form>
  );
};
export default PeopleForm;
