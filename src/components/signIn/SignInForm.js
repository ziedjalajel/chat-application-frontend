import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//store
import { signIn } from "../../store/actions/authActions";
//styles
import {
  Center,
  SignInButton,
  SignIn1Div,
  SignIn2Div,
  SignH,
  SignInInput,
  SignInSpecialH,
} from "../../styles";

const SignInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(user, history));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <Center>
        <SignIn1Div className="mb-3 col-sm-6">
          <SignH className="form-label">Username :</SignH>
          <SignInInput
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            className="form-control "
          />
        </SignIn1Div>
        <SignIn2Div className="mb-3 col-sm-6">
          <SignH className="form-label">Password :</SignH>
          <SignInInput
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="form-control"
          />
        </SignIn2Div>
      </Center>
      <SignInButton type="submit" className="btn btn-danger">
        Log in
      </SignInButton>
      <Link to="/signup">
        <SignInSpecialH>Don't have account? Register Now</SignInSpecialH>
      </Link>
    </form>
  );
};
export default SignInForm;
