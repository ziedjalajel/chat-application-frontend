import styled, { createGlobalStyle } from "styled-components";

export const Center = styled.div`
  text-align: center;
  color: red;
  font-weight: bold;
  font-style: italic;
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
`;
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
export const RoomImage = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  left: 85%;
  top: 1px;
`;
export const HomeDiv = styled.div`
  margin-top: 15%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: right;
  border-radius: 5%;
  margin-left: 1%;
  margin-bottom: 25%;
  width: 300px;
  text-align: center;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const HomeTitleDiv = styled.div`
  text-align: center;
  margin-top: 10%;
  color: red;
`;
export const SignupButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 190%;
  border-radius: 5%;
  width: 300px;
  height: 100px;
  margin-left: 35%;
  margin-top: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const SignUp1Div = styled.div`
  margin-top: 100px;
`;
export const SignUp2Div = styled.div`
  margin-top: 8%;
`;
export const SignH = styled.h3`
  color: red;
  font-weight: bold;
`;
export const SignUpInput = styled.input`
  margin-left: 63%;
`;
export const SignInButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5%;
  width: 300px;
  height: 100px;
  font-size: 190%;
  margin-left: 35%;
  margin-top: 5%;
  background: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );
`;
export const SignIn1Div = styled.div`
  margin-top: 100px;
`;
export const SignIn2Div = styled.div`
  margin-top: 15%;
`;
export const SignInInput = styled.input`
  margin-left: 50%;
`;
export const SignInSpecialH = styled.h6`
  text-align: center;
  margin-right: 8%;
  margin-top: 1%;
  color: red;
  font-weight: bold;
  font-style: italic;
`;
