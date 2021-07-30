import { SideBMasterDiv, GroupIconDiv, PStyle } from "../../../styles";
import { GrGroup } from "react-icons/gr";

const CreateNewChat = () => {
  return (
    <SideBMasterDiv className="container">
      <GroupIconDiv type="button">
        <GrGroup
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            left: "34%",
            right: "60%",
            top: " 13%",
            bottom: " 86%",
            // verticalAlign: "center",
          }}
        />
        <PStyle>Create Group</PStyle>
      </GroupIconDiv>
    </SideBMasterDiv>
  );
};
export default CreateNewChat;
