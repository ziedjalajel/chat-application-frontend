import { useState } from "react";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { addSignUp } from "../../store/actions/signUpActions";

import { Center, Button } from "../../styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setSignUp({ ...signUp, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSignUp(signUp));
    history.push("/");
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
            value={signUp.email}
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
            value={signUp.username}
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
            value={signUp.password}
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
