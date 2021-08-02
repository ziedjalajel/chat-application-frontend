import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

//store
import { signUp } from "../../store/actions/authActions";
import { addProfile } from "../../store/actions/profileAction";
//styles
import {
  Center,
  SignupButton,
  SignH,
  SignUp1Div,
  SignUp2Div,
  SignUpInput,
  SignInSpecialH,
} from "../../styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [profile] = useState("");

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(user, history));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <Center>
        <SignUp1Div className="mb-3 col-sm-5">
          <SignH className="form-label">Email :</SignH>
          <SignUpInput
            type="text"
            value={user.email}
            onChange={handleChange}
            name="email"
            className="form-control"
          />
        </SignUp1Div>
        <SignUp2Div className="mb-3 col-sm-5">
          <SignH className="form-label">Username :</SignH>
          <SignUpInput
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            className="form-control"
          />
        </SignUp2Div>
        <SignUp2Div className="mb-3 col-sm-5">
          <SignH className="form-label">Password :</SignH>
          <SignUpInput
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="form-control"
          />
        </SignUp2Div>
      </Center>
      <SignupButton type="submit" className="btn btn-danger">
        Create
      </SignupButton>
      <Link to="/signin">
        <SignInSpecialH>Already registerd ? Log In</SignInSpecialH>
      </Link>
    </form>
  );
};
export default SignUpForm;
