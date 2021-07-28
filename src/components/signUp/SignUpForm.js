import { useState } from "react";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { signUp } from "../../store/actions/authActions";

import { Center, Button } from "../../styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(user, history));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <Center>
        <div className="mb-3 col-sm-5" style={{ marginTop: "100px" }}>
          <h3
            className="form-label"
            style={{ color: "red", fontWeight: "bold " }}
          >
            Email :
          </h3>
          <input
            style={{ marginLeft: "60%" }}
            type="text"
            value={user.email}
            onChange={handleChange}
            name="email"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-5" style={{ marginTop: "8%" }}>
          <h3
            className="form-label"
            style={{ color: "red", fontWeight: "bold " }}
          >
            Username :
          </h3>
          <input
            style={{ marginLeft: "60%" }}
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-5" style={{ marginTop: "8%" }}>
          <h3
            className="form-label"
            style={{
              color: "red",
              fontWeight: "bold ",
            }}
          >
            Password :
          </h3>
          <input
            style={{ marginLeft: "60%" }}
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="form-control"
          />
        </div>
      </Center>
      <Button
        type="submit"
        className="btn btn-danger"
        style={{ borderRadius: "60%" }}
      >
        Create
      </Button>
    </form>
  );
};
export default SignUpForm;
