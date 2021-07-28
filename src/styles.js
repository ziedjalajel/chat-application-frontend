import styled, { createGlobalStyle } from "styled-components";

export const Center = styled.div`
  text-align: center;
  color: red;
  font-weight: bold;
  font-style: italic;
  /* justify-content: center;
  align-items: center; */
  margin-top: 5%;
  h3 {
    text-align: center;
    margin-left: 11%;
    position: absolute;
  }
`;
export const Button = styled.button`
  justify-content: center;
  align-items: center;
  text-align: right;
  border-radius: 50%;
  margin-left: 43.5%;
  margin-top: 5%;
  /* margin: auto; */
`;
// export const Center = styled.input`
//   text-align: center;
//   color: red;
//   font-weight: bold;
//   font-style: italic;
//   /* justify-content: center;
//   align-items: center; */
//   /* position: absolute; */
// `;
export const RoomMasterDiv = styled.div`
  width: 70%;
  position: absolute;
  left: 30%;
`;
export const RoomSecondDiv = styled.div`
  border: 15px solid red;
  background-color: red;
  width: 100%;
`;
