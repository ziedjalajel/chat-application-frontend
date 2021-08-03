//styles
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addChat, fetchChats } from "../../../store/actions/chatActions";
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
      [event.target.name]: event.target.value.split(",").map((c) => +c),
    });

  const handleImage = (event) =>
    setChat({ ...chat, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addChat(chat)).then((a) => dispatch(fetchChats()));
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
          placeholder="Enter ids"
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
