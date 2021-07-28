import { useState } from "react";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

import { Center, Button } from "../../styles";

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
        <div className="mb-3 col-sm-6" style={{ marginTop: "100px" }}>
          <h3
            className="form-label"
            style={{ color: "red", fontWeight: "bold " }}
          >
            Username :
          </h3>
          <input
            style={{ marginLeft: "50%" }}
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            className="form-control "
          />
        </div>
        <div className="mb-3 col-sm-6" style={{ marginTop: "15%" }}>
          <h3
            className="form-label"
            style={{ color: "red", fontWeight: "bold " }}
          >
            Password :
          </h3>
          <input
            style={{ marginLeft: "50%" }}
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="form-control"
          />
        </div>
      </Center>
      <Button type="submit" className="btn btn-danger">
        Log in
      </Button>
      <Link to="/signup">
        <h6 style={{ textAlign: "center" }}>
          Don't have account? Register Now
        </h6>
      </Link>
    </form>
  );
};
export default SignInForm;
