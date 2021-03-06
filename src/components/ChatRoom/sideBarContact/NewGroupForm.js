import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// actions
import { addChat, fetchChats } from "../../../store/actions/chatActions";
import { fetchUserProfile } from "../../../store/actions/authActions";
//styles
import {
  CreateGroupLabel,
  CreateGroupInpImg,
  CreateGroupInp,
  CreateGroupBtn,
} from "../../../styles";

const NewGroupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [chat, setChat] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setChat({
      ...chat,
      [event.target.name]: event.target.value,
    });

  const handleImage = (event) =>
    setChat({ ...chat, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addChat(chat));
    dispatch(fetchChats());
    history.push("/chats");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CreateGroupLabel>Create a Group</CreateGroupLabel>
        <CreateGroupInpImg
          type="file"
          placeholder="choose image"
          onChange={handleImage}
        />
        <CreateGroupInp
          type="text"
          placeholder="Enter Group Name"
          onChange={handleChange}
        />
      </div>
      <CreateGroupBtn type="submit" className="btn btn-danger">
        Create Group
      </CreateGroupBtn>
    </form>
  );
};
export default NewGroupForm;
